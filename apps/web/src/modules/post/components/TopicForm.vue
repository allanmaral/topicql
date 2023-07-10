<script setup lang="ts">
import { ref } from 'vue';

import { UserAvatar as User } from '@/lib/domain';
import AvatarImage from '@/components/AvatarImage.vue';
import UserAvatar from '@/components/UserAvatar.vue';
import UserUsername from '@/components/UserUsername.vue';

defineProps<{ user: User; reply?: boolean }>();
const emit = defineEmits<{
  (event: 'submit', content: string): void;
}>();

const content = ref('');

function handleSubmit() {
  emit('submit', content.value);
}
</script>

<template>
  <form class="flex flex-col px-4" @submit.prevent="handleSubmit">
    <div class="flex flex-1 gap-2">
      <div class="flex flex-col items-center gap-2">
        <UserAvatar :user="user" :interactive="false" />
        <div class="w-0 flex-1 border-l-2 border-timeline"></div>
        <AvatarImage
          :username="user.username"
          :src="user.avatarUrl"
          class-name="h-5 w-5"
        />
      </div>

      <div class="flex flex-1 flex-col">
        <div class="flex justify-between pb-2">
          <UserUsername :user="user" :interactive="false" />
        </div>

        <div>
          <textarea
            v-model="content"
            class="min-h-[5rem] w-full rounded bg-transparent outline-none focus-within:outline-1 focus-within:outline-timeline"
            type="text"
            autofocus
            :placeholder="reply ? 'Responda...' : 'Comece um novo tópico...'"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button
        type="submit"
        class="flex h-11 cursor-pointer items-center justify-center px-2 font-semibold text-primary"
      >
        Postar
      </button>
    </div>
  </form>
</template>
