<script setup lang="ts">
import { ref } from 'vue';
import { useMutation } from '@urql/vue';
import { useRoute, useRouter } from 'vue-router';

import { graphql } from '@/gql';
import { getCurrentUser } from '@/lib/domain';
import DetailLayout from '@/layouts/DetailLayout.vue';
import TopicForm from '../components/TopicForm.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';

const replyTopicMutationDocument = graphql(/* GraphQL */ `
  mutation ReplyTopic($topic: TopicInput!) {
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

const currentUser = getCurrentUser();
const route = useRoute();
const router = useRouter();
const { executeMutation: replyTopic } = useMutation(replyTopicMutationDocument);

const loading = ref(false);
async function handleSubmit(content: string) {
  loading.value = true;
  try {
    const topicId = <string>route.params['id'];
    await replyTopic({
      topic: { content, replyTo: topicId },
    });
    router.push('/');
  } catch (error) {
    console.error('Ops...', error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <DetailLayout>
    <template #title>Responder</template>

    <template #default>
      <template v-if="loading">
        <LoadingIndicator />
      </template>
      <template v-else>
        <TopicForm
          :user="currentUser"
          :reply="true"
          @submit="handleSubmit"
        ></TopicForm>
      </template>
    </template>
  </DetailLayout>
</template>
