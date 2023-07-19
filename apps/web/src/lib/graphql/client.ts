import urql, { Client, cacheExchange, fetchExchange } from '@urql/vue';
import { App } from 'vue';

export const client = new Client({
  url: 'http://localhost:4000/',
  exchanges: [cacheExchange, fetchExchange],
});

export function graphql(app: App) {
  app.use(urql, client);
}
