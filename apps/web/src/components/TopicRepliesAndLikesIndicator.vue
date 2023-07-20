<script setup lang="ts">
import { FeedTopic } from '@/lib/domain';

defineProps<{ topic: FeedTopic }>();
</script>

<template>
  <div class="text-muted">
    {{ topic.replies?.length }}
    {{ topic.replies?.length !== 1 ? 'respostas' : 'resposta' }}
  </div>
</template>
