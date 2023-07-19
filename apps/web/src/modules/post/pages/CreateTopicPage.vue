<script setup lang="ts">
import { getCurrentUser } from '@/lib/domain';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TopicForm from '../components/TopicForm.vue';

const currentUser = getCurrentUser();

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
