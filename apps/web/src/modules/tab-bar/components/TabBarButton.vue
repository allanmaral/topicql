<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { cn } from '../../../lib/utils';

const props = defineProps<{
  icon: any;
  activeIcon: any;
  exact?: boolean;
  href: string;
}>();

const route = useRoute();
const active = computed(() =>
  props.exact ? route.path === props.href : route.path.startsWith(props.href)
);
const icon = computed(() => (active.value ? props.activeIcon : props.icon));
</script>

<template>
  <router-link :to="href">
    <component
      :is="icon"
      class="h-6 w-6 transition-colors"
      :class="
        cn('h-6 w-6 transition-colors text-primary', !active && 'opacity-60')
      "
    ></component>
  </router-link>
</template>
