<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TopicForm from '../components/TopicForm.vue';

// TODO: Load current user
const currentUser = {
  id: 1,
  username: 'topicql',
  avatarUrl:
    'https://vectorseek.com/wp-content/uploads/2023/02/GraphQL-Logo-Vector.jpg',
};

// TODO: Create topic
function handleSubmit(content: string) {
  console.log('Submit form', content);
}
</script>

<template>
  <DefaultLayout>
    <template v-slot:title>Novo Tópico</template>

    <template #default>
      <TopicForm :user="currentUser" @submit="handleSubmit"></TopicForm>
    </template>
  </DefaultLayout>
</template>
