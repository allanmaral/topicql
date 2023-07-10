<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

import { UserAvatar } from "@/lib/domain";
import AvatarImage from "./AvatarImage.vue";

const props = withDefaults(
  defineProps<{ user: UserAvatar; interactive?: boolean }>(),
  {
    interactive: true,
  }
);

const wrapper = computed(() => (props.interactive ? RouterLink : "span"));
const profileUrl = computed(() => `/profile/${props.user.id}`);

function handleClick(event: MouseEvent) {
  if (props.interactive) {
    event.stopPropagation();
  }
}
</script>

<template>
  <component :is="wrapper" :to="profileUrl" @click="handleClick">
    <AvatarImage :username="user.username" :src="user.avatarUrl" />
  </component>
</template>
