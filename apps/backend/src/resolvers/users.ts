import { User } from '@prisma/client';

import { Resolvers, Resolver } from '../utils';

interface FindUserByIdArgs {
  id: number;
}

const userById: Resolver<FindUserByIdArgs> = (self, args, ctx) => {
  return ctx.prisma.user.findUnique({
    where: {
      id: Number(args.id),
    },
  });
};

const UserResolvers: Record<string, Resolver<any, User>> = {
  id: (self) => self.id,
  name: (self) => self.name,
  bio: (self) => self.bio,
  avatarUrl: (self) => self.avatarUrl,
  topics: (self, _, ctx) => {
    return ctx.prisma.topic.findMany({ where: { authorId: self.id } });
  },
};

export const resolvers: Resolvers = {
  User: UserResolvers,
  Query: {
    user: userById,
  },
};
