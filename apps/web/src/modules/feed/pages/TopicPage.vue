<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQuery } from '@urql/vue';
import { computed } from 'vue';

import { graphql } from '@/gql';
import DetailLayout from '@/layouts/DetailLayout.vue';
import TopicListItem from '@/components/TopicListItem.vue';
import TopicList from '@/components/TopicList.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

const topicQueryDocument = graphql(/* GraphQL */ `
  query Topic($topicId: ID!) {
    topic(id: $topicId) {
      id
      content
      createdAt
      author {
        id
        username
        avatarUrl
      }
      replies {
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
  }
`);

const route = useRoute();
const { data, fetching, error } = useQuery({
  query: topicQueryDocument,
  variables: {
    topicId: <string>route.params['id'],
  },
});

const topic = computed(() => data.value?.topic);
</script>

<template>
  <DetailLayout>
    <template #title> Tópico </template>

    <template #default>
      <template v-if="fetching">
        <LoadingIndicator />
      </template>
      <template v-else-if="error">
        <ErrorMessage />
      </template>
      <template v-else-if="topic">
        <TopicListItem :topic="topic"></TopicListItem>
        <TopicList :topics="topic.replies" />
      </template>
    </template>
  </DetailLayout>
</template>
