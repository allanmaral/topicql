import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z, ZodError } from 'zod';

import {
  BasePayload,
  createPayload,
  createValidationError,
  createValidationErrors,
  Resolvers,
  Resolver,
} from '../utils';

const HASH_SALT_ROUNDS = Number(process.env.HASH_SALT_ROUNDS) ?? 20;
const DUMMY_HASH =
  '$2a$12$6l3eJ.Q6SKvwge9i11tNYevxTHDCr7dWYqwuU2KQu9POEEf7iui.C';
const JWT_SECRET = process.env.JWT_SECRET ?? 'secret';

interface AuthPayload extends BasePayload {
  token?: string;
}

const registerArgsSchema = z.object({
  user: z.object({
    username: z.string().min(3).nonempty(),
    password: z.string().min(8).nonempty(),
    name: z.string().nonempty(),
    bio: z.string().nonempty(),
    avatarUrl: z.string().nonempty(),
  }),
});
type RegisterArgs = z.infer<typeof registerArgsSchema>;

const register: Resolver<RegisterArgs> = async (self, args, ctx) => {
  const payload = createPayload<AuthPayload>();

  try {
    const registerArgs = registerArgsSchema.parse(args);

    const userExists = await ctx.prisma.user.findUnique({
      where: {
        username: registerArgs.user.username,
      },
    });

    if (userExists) {
      payload.userErrors.push(
        createValidationError('username', 'Already in use')
      );
      return payload;
    }

    const hashedPassword = await bcrypt.hash(
      registerArgs.user.password,
      HASH_SALT_ROUNDS
    );

    const user = await ctx.prisma.user.create({
      data: {
        username: registerArgs.user.username,
        name: registerArgs.user.name,
        password: hashedPassword,
        bio: registerArgs.user.bio,
        avatarUrl: registerArgs.user.avatarUrl,
      },
    });

    const token = jwt.sign(
      {
        sub: user.id,
        name: user.name,
        username: user.username,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    payload.token = token;
  } catch (error) {
    if (error instanceof ZodError) {
      payload.userErrors.push(...createValidationErrors(error));
    } else {
      throw error;
    }
  }

  return {
    token: payload.token,
  };
};

const loginArgsSchema = z.object({
  credentials: z.object({
    username: z.string().nonempty(),
    password: z.string().nonempty(),
  }),
});
type LoginArgs = z.infer<typeof loginArgsSchema>;

const login: Resolver<LoginArgs> = async (self, args, ctx) => {
  const payload = createPayload<AuthPayload>();

  try {
    const loginArgs = loginArgsSchema.parse(args);

    const user = await ctx.prisma.user.findUnique({
      where: {
        username: loginArgs.credentials.username,
      },
    });

    const passwordMatch = await bcrypt.compare(
      loginArgs.credentials.password,
      // Use a dummy hash to avoid aborting early
      // in case of a not found user
      user?.password ?? DUMMY_HASH
    );

    if (!user || !passwordMatch) {
      payload.userErrors.push(
        createValidationError('Invalid email/password combination')
      );
      return payload;
    }

    const token = jwt.sign(
      {
        sub: user.id,
        name: user.name,
        username: user.username,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    payload.token = token;
  } catch (error) {
    if (error instanceof ZodError) {
      payload.userErrors.push(...createValidationErrors(error));
    } else {
      throw error;
    }
  }

  return {
    token: payload.token,
  };
};

export const resolvers: Resolvers = {
  Query: {},
  Mutation: {
    register,
    login,
  },
};
