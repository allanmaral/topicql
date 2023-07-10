<script setup lang="ts">
import { User } from "@/lib/domain";
import AvatarImage from "@/components/AvatarImage.vue";

defineProps<{ user: User }>();
</script>

<template>
  <div class="flex justify-between">
    <div>
      <div class="">
        {{ user.name }}
      </div>
      <div class="text-sm font-light">
        {{ user.username }}
      </div>
    </div>
    <div>
      <AvatarImage
        :username="user.username"
        :src="user.avatarUrl"
        class-name="h-16 w-16"
      ></AvatarImage>
    </div>
  </div>
</template>
