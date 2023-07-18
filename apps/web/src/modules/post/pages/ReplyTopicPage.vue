<script setup lang="ts">
import DetailLayout from '@/layouts/DetailLayout.vue';
import TopicForm from '../components/TopicForm.vue';

// TODO: Load current user
const currentUser = {
  id: 1,
  username: 'topicql',
  avatarUrl:
    'https://vectorseek.com/wp-content/uploads/2023/02/GraphQL-Logo-Vector.jpg',
};

// TODO: Reply a topic
function handleSubmit(content: string) {
  console.log('Submit form', content);
}
</script>

<template>
  <DetailLayout>
    <template #title>Responder</template>

    <template #default>
      <TopicForm
        :user="currentUser"
        :reply="true"
        @submit="handleSubmit"
      ></TopicForm>
    </template>
  </DetailLayout>
</template>
