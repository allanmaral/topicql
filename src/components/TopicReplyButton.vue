<script setup lang="ts">
import { ChatBubbleOvalLeftIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits<{
  (event: "click"): void;
}>();

function handleClick() {
  emit("click");
}
</script>

<template>
  <button
    class="flex h-11 w-11 cursor-pointer items-center justify-center"
    @click.stop="handleClick"
  >
    <ChatBubbleOvalLeftIcon class="h-6 w-6" />
  </button>
</template>
