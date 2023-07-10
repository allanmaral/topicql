<script setup lang="ts">
import TabBarButton from "./TabBarButton.vue";
import { tabLinks } from "../tab-links";
</script>

<template>
  <nav>
    <ul class="grid h-16 grid-cols-3 place-items-center gap-4 pb-6">
      <li v-for="button in tabLinks" :key="button.href">
        <TabBarButton
          :href="button.href"
          :exact="button.exact"
          :icon="button.icon"
          :active-icon="button.activeIcon"
        ></TabBarButton>
      </li>
    </ul>
  </nav>
</template>
