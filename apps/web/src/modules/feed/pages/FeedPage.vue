<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { Topic } from '@/lib/domain';

// TODO: Components
// import TopicList from '@/components/TopicList.vue';
// import LoadingIndicator from '@/components/LoadingIndicator.vue';
// import ErrorMessage from '@/components/ErrorMessage.vue';

// TODO: Retrieve feed from server
const topics: Topic[] = [
  {
    id: 1,
    author: {
      id: 1,
      username: 'topicql',
      avatarUrl:
        'https://vectorseek.com/wp-content/uploads/2023/02/GraphQL-Logo-Vector.jpg',
    },
    content: 'Lorem ipsum',
    replies: [],
    createdAt: new Date(new Date().getTime() - 1000 * 60 * 10),
  },
];
</script>

<template>
  <DefaultLayout>
    <template #title> TopicQL </template>

    <template #default>
      <!-- TODO: List topics -->
    </template>
  </DefaultLayout>
</template>
