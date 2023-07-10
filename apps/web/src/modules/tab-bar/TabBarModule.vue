<script setup lang="ts">
import TabBar from './components/TabBar.vue';
</script>

<template>
  <div class="flex-1 overflow-y-auto overflow-x-hidden">
    <div class="flex flex-col">
      <router-view></router-view>
    </div>
  </div>

  <TabBar></TabBar>
</template>
