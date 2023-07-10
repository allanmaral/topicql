<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  src?: string;
  username: string;
  className?: string;
}>();

const fallbackName = computed(() =>
  props.username.includes(' ')
    ? props.username
        .split(' ')
        .map((name) => name[0])
        .join('')
        .toLocaleUpperCase()
    : props.username.slice(0, 2).toLocaleUpperCase()
);
</script>

<template>
  <span
    :class="
      cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )
    "
  >
    <template v-if="!!src">
      <img
        class="aspect-square h-full w-full object-cover"
        :alt="username"
        :src="src"
      />
    </template>
    <template v-else>
      <span
        class="flex h-full w-full items-center justify-center rounded-full bg-muted"
      >
        {{ fallbackName }}
      </span>
    </template>
  </span>
</template>
