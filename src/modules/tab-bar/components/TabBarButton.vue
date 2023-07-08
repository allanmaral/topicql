<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

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
const iconClass = computed(() =>
  active.value ? "text-purple-300" : "text-purple-300 opacity-60"
);
</script>

<template>
  <router-link :to="href">
    <component
      :is="icon"
      class="h-6 w-6 transition-colors"
      :class="iconClass"
    ></component>
  </router-link>
</template>
