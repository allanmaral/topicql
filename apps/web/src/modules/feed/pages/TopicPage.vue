<script setup lang="ts">
import { Topic } from '@/lib/domain';
import DetailLayout from '@/layouts/DetailLayout.vue';
import TopicListItem from '@/components/TopicListItem.vue';
import TopicList from '@/components/TopicList.vue';

// TODO: Load topic details
const topic: Topic = {
  id: 1,
  author: {
    id: 1,
    username: 'topicql',
    avatarUrl:
      'https://vectorseek.com/wp-content/uploads/2023/02/GraphQL-Logo-Vector.jpg',
  },
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur.',
  createdAt: new Date(new Date().getTime() - 1000 * 60 * 10),
  replies: [
    {
      id: 2,
      author: {
        id: 2,
        username: 'threads',
        avatarUrl:
          'https://seeklogo.com/images/T/threads-logo-9F3F8228AC-seeklogo.com.png?v=638243212870000000',
      },
      content: 'Ut ante sapien, placerat nec.',
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 5),
      replies: [],
    },
  ],
};
</script>

<template>
  <DetailLayout>
    <template #title> Tópico </template>

    <template #default>
      <TopicListItem :topic="topic"></TopicListItem>
      <TopicList :topics="topic.replies" />
    </template>
  </DetailLayout>
</template>
