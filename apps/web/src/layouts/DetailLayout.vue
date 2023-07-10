<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';

defineSlots<{
  default(props: any): any;
  title(props: any): any;
}>();

const router = useRouter();

function handleBack() {
  router.go(-1);
}
</script>

<template>
  <div class="flex flex-col pt-10">
    <div class="flex justify-between px-4 pb-4 pt-2">
      <button class="flex w-16 items-center text-primary" @click="handleBack">
        <ChevronLeftIcon class="h-5 w-5"></ChevronLeftIcon>
        Voltar
      </button>

      <slot name="title"></slot>

      <div class="w-16"></div>
    </div>

    <main class="flex flex-1 flex-col">
      <slot></slot>
    </main>
  </div>
</template>
