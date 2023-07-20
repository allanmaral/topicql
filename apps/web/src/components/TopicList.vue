<script setup lang="ts">
import { FeedTopic } from '@/lib/domain';
import TopicListItem from './TopicListItem.vue';
import { useRouter } from 'vue-router';

withDefaults(defineProps<{ topics?: FeedTopic[] }>(), { topics: () => [] });

const router = useRouter();

function handleOpen(topic: FeedTopic) {
  router.push(`/topic/${topic.id}`);
}

function handleReply(topic: FeedTopic) {
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
