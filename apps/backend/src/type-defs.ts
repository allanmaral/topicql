import { gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const rawSchema = readFileSync(resolve(__dirname, 'schema.graphql'));

export const typeDefs = gql`
  ${rawSchema}
`;
