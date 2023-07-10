<script setup lang="ts">
import { computed } from "vue";

import { Topic } from "@/lib/domain";
import { formatDistanceToNow } from "@/lib/utils";
import TopicRepliesAvatar from "./TopicRepliesAvatar.vue";
import TopicRepliesAndLikesIndicator from "./TopicRepliesAndLikesIndicator.vue";
import TopicReplyButton from "./TopicReplyButton.vue";
import UserAvatar from "./UserAvatar.vue";
import UserUsername from "./UserUsername.vue";

const props = defineProps<{ topic: Topic; hideReplies?: boolean }>();
const emit = defineEmits<{
  (event: "reply", topic: Topic): void;
  (event: "open", topic: Topic): void;
}>();

const hasReplies = computed(() => props.topic.replies.length > 0);

function handleReply() {
  emit("reply", props.topic);
}

function handleOpen() {
  emit("open", props.topic);
}
</script>

<template>
  <article class="border-b border-b-border p-4" @click="handleOpen">
    <div class="flex flex-1 gap-2">
      <div class="flex flex-col items-center gap-2">
        <UserAvatar :user="topic.author" />
        <div
          v-if="hasReplies && !hideReplies"
          class="w-0 flex-1 border-l-2 border-timeline"
        ></div>
      </div>

      <div class="flex flex-1 flex-col">
        <div class="flex justify-between pb-1">
          <UserUsername :user="topic.author" />
          <span class="text-xs text-muted">
            {{ formatDistanceToNow(topic.createdAt) }}
          </span>
        </div>

        <div>{{ topic.content }}</div>

        <div class="-ml-3 flex gap-4">
          <TopicReplyButton @click="handleReply" />
        </div>
      </div>
    </div>

    <div v-if="hasReplies && !hideReplies" class="flex items-center gap-2">
      <TopicRepliesAvatar :replies="topic.replies" />
      <TopicRepliesAndLikesIndicator :topic="topic" />
    </div>
  </article>
</template>
