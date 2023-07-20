import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000',
  documents: ['src/**/*.vue'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
