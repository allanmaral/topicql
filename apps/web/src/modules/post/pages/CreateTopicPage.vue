<script setup lang="ts">
import { User } from "@/lib/domain";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TopicForm from "../components/TopicForm.vue";

// TODO: Load current user
const currentUser: User = {
  id: 1,
  name: "TopicQL",
  bio: "Só mais uma rede social",
  username: "topicql",
  avatarUrl:
    "https://vectorseek.com/wp-content/uploads/2023/02/GraphQL-Logo-Vector.jpg",
};

// TODO: Create topic
function handleSubmit(content: string) {
  console.log("Submit form", content);
}
</script>

<template>
  <DefaultLayout>
    <template v-slot:title>Novo Tópico</template>

    <template #default>
      <TopicForm :user="currentUser" @submit="handleSubmit"></TopicForm>
    </template>
  </DefaultLayout>
</template>
