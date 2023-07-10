<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { Topic } from '@/lib/domain';
import TopicList from '@/components/TopicList.vue';

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
      <TopicList :topics="topics" />
    </template>
  </DefaultLayout>
</template>
