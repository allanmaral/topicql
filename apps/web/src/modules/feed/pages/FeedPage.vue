<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { computed } from 'vue';
import { useQuery, gql } from '@urql/vue';

import TopicList from '@/components/TopicList.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

const { data, fetching, error } = useQuery({
  query: gql`
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
  `,
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
