<script setup lang="ts">
import { FeedTopic } from '@/lib/domain';
import TopicList from '@/components/TopicList.vue';

defineProps<{ topics: FeedTopic[] }>();
</script>

<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-2">
      <div
        class="border-b border-border-highlight pb-2 text-center font-semibold"
      >
        Tópicos
      </div>
      <div class="border-b border-border"></div>
    </div>

    <TopicList :topics="topics"></TopicList>
  </div>
</template>
