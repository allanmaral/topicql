import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';

import { resolvers } from './resolvers';
import { typeDefs } from './type-defs';

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;

    let userId: number | undefined = undefined;
    if (token) {
      const base64Payload = token.split('.')[1] ?? '';
      const tokenPayload = JSON.parse(
        Buffer.from(base64Payload, 'base64').toString()
      );
      userId = tokenPayload.sub;
    }

    return {
      prisma,
      userId,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
