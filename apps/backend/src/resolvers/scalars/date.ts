import { GraphQLScalarType, Kind } from 'graphql';

const dateScalar = new GraphQLScalarType<Date | null, string>({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize: (outputValue) => {
    const value = outputValue as Date;
    if (value?.toISOString) {
      return value.toISOString();
    }
    return String(outputValue);
  },
  parseValue: (inputValue) => {
    if (typeof inputValue === 'string') {
      return new Date(inputValue);
    }
    return null;
  },
  parseLiteral: (ast) => {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
});

export const dateResolvers = {
  Date: dateScalar,
};
