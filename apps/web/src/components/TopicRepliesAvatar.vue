<script setup lang="ts">
import { computed } from 'vue';

import { Topic } from '@/lib/domain';
import { cn } from '@/lib/utils';
import AvatarImage from '@/components/AvatarImage.vue';

const props = defineProps<{ replies: Topic[] }>();
const positioningByLength: Record<number, string[]> = {
  1: ['left-2 top-2'],
  2: ['left-4 top-1', 'left-0.5 top-5'],
  3: ['left-5 top-1', 'left-0 top-3', 'left-4 top-7'],
};
const sizeByIndex = ['w-5 h-5', 'w-4 h-4', 'w-3 h-3'];

const avatars = computed(() =>
  props.replies.slice(0, 3).map((reply, index, replies) => ({
    id: reply.id,
    author: reply.author,
    positioning: positioningByLength[replies.length][index],
    size: sizeByIndex[index],
  }))
);
</script>

<template>
  <div class="relative h-10 w-10">
    <template v-for="avatar in avatars" :key="avatar.id">
      <AvatarImage
        :class="avatar.positioning"
        :username="avatar.author.username"
        :src="avatar.author.avatarUrl"
        :class-name="cn('absolute', avatar.size)"
      />
    </template>
  </div>
</template>
