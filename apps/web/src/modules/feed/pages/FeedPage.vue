<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { computed } from 'vue';
import { useQuery } from '@urql/vue';

import { graphql } from '@/gql';
import TopicList from '@/components/TopicList.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

const feedQueryDocument = graphql(/* GraphQL */ `
  query Feed {
    feed {
      id
      content
      createdAt
      author {
        id
        username
        avatarUrl
      }
      replies {
        author {
          id
          username
          avatarUrl
        }
      }
    }
  }
`);

const { data, fetching, error } = useQuery({
  query: feedQueryDocument,
});

const topics = computed(() => data.value?.feed);
</script>

<template>
  <DefaultLayout>
    <template #title> TopicQL </template>

    <template #default>
      <template v-if="fetching">
        <LoadingIndicator></LoadingIndicator>
      </template>
      <template v-else-if="error">
        <ErrorMessage />
      </template>
      <template v-else-if="topics">
        <TopicList :topics="topics"></TopicList>
      </template>
    </template>
  </DefaultLayout>
</template>
