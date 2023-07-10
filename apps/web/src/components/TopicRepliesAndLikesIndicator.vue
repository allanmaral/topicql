<script setup lang="ts">
import { Topic } from '@/lib/domain';

defineProps<{ topic: Topic }>();
</script>

<template>
  <div class="text-muted">
    {{ topic.replies.length }}
    {{ topic.replies.length !== 1 ? 'respostas' : 'resposta' }}
  </div>
</template>
