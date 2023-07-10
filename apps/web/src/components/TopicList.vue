<script setup lang="ts">
import { Topic } from '@/lib/domain';
import TopicListItem from './TopicListItem.vue';
import { useRouter } from 'vue-router';

defineProps<{ topics: Topic[] }>();

const router = useRouter();

function handleOpen(topic: Topic) {
  router.push(`/topic/${topic.id}`);
}

function handleReply(topic: Topic) {
  router.push(`/topic/${topic.id}/reply`);
}
</script>

<template>
  <div class="flex flex-col">
    <template v-for="topic in topics" :key="topic.id">
      <TopicListItem
        :topic="topic"
        @open="handleOpen(topic)"
        @reply="handleReply(topic)"
      />
    </template>
  </div>
</template>
