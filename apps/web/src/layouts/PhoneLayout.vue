<script setup lang="ts"></script>

<template>
  <div
    class="flex min-h-full flex-col items-center justify-center bg-slate-200"
  >
    <div
      class="relative flex h-[52rem] w-96 flex-col overflow-hidden rounded-[2.5rem] border-4 border-slate-500 bg-background text-foreground shadow-2xl"
    >
      <slot></slot>
    </div>
  </div>
</template>
