<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation } from '@urql/vue';

import { getCurrentUser } from '@/lib/domain';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TopicForm from '../components/TopicForm.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import { graphql } from '@/gql';

const router = useRouter();
const currentUser = getCurrentUser();

const createTopicMutationDocument = graphql(/* GraphQL */ `
  mutation CreateTopic($topic: TopicInput!) {
    createTopic(topic: $topic) {
      id
      content
      createdAt
      author {
        id
        name
      }
    }
  }
`);

const loading = ref(false);
const { executeMutation: createTopic } = useMutation(
  createTopicMutationDocument
);

async function handleSubmit(content: string) {
  try {
    loading.value = true;
    createTopic({ topic: { content } });
    router.push('/');
  } catch (error) {
    console.error('Ops...', error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <DefaultLayout>
    <template v-slot:title>Novo Tópico</template>

    <template #default>
      <template v-if="loading">
        <LoadingIndicator />
      </template>
      <template v-else>
        <TopicForm :user="currentUser" @submit="handleSubmit"></TopicForm>
      </template>
    </template>
  </DefaultLayout>
</template>
