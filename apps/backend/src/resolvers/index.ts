import { resolvers as authResolvers } from './auth';
import { dateResolvers } from './scalars';
import { resolvers as topicsResolvers } from './topics';
import { resolvers as userResolvers } from './users';

export const resolvers = [
  authResolvers,
  dateResolvers,
  topicsResolvers,
  userResolvers,
];
