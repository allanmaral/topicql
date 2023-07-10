import type { GraphQLFieldResolver } from 'graphql';

import type { Context } from './context';

export type Resolver<
  TArgs extends object = any,
  TSource = any,
  TContext = Context,
  TReturn = any
> = GraphQLFieldResolver<TSource, TContext, TArgs, TReturn>;

export type Resolvers = {
  [type: string]: {
    [resolver: string]: Resolver;
  };
};
