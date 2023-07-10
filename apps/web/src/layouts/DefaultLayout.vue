<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';

defineSlots<{
  default(props: any): any;
  title(props: any): any;
}>();
</script>

<template>
  <div class="flex flex-col pt-10">
    <PageHeader class="mb-4 px-4">
      <slot name="title"></slot>
    </PageHeader>

    <main class="flex flex-1 flex-col">
      <slot></slot>
    </main>
  </div>
</template>
