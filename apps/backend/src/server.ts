import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';

import { resolvers } from './resolvers';
import { typeDefs } from './type-defs';
import { Context } from './utils';

const prisma = new PrismaClient();

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const token = req.headers.authorization;

    let userId: number | undefined = 1;
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
}).then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
