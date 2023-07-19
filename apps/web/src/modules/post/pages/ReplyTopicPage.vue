<script setup lang="ts">
import { getCurrentUser } from '@/lib/domain';
import DetailLayout from '@/layouts/DetailLayout.vue';
import TopicForm from '../components/TopicForm.vue';

const currentUser = getCurrentUser();

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
