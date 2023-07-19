<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { Topic } from '@/lib/domain';
import { onMounted, ref } from 'vue';

// TODO: Components
import TopicList from '@/components/TopicList.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
// import ErrorMessage from '@/components/ErrorMessage.vue';

// TODO: Retrieve feed from server
// const topics: Topic[] = [
//   {
//     id: 1,
//     author: {
//       id: 1,
//       username: 'topicql',
//       avatarUrl:
//         'https://vectorseek.com/wp-content/uploads/2023/02/GraphQL-Logo-Vector.jpg',
//     },
//     content: 'Lorem ipsum',
//     replies: [],
//     createdAt: new Date(new Date().getTime() - 1000 * 60 * 10),
//   },
// ];

const topics = ref<any>();
const loading = ref(true);
onMounted(() => {
  fetch('http://localhost:4000/', {
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `#graphql
      query Feed {
        feed {
          id
          content
          createdAt
          author {
            id
            username
            avatarUrl
          }
        }
      }
      `,
    }),
    method: 'POST',
  })
    .then((response) => response.json())
    .then((json) => {
      topics.value = json.data.feed;
      loading.value = false;
    });
});
</script>

<template>
  <DefaultLayout>
    <template #title> TopicQL </template>

    <template #default>
      <template v-if="loading">
        <LoadingIndicator></LoadingIndicator>
      </template>
      <template v-else-if="topics">
        <TopicList :topics="topics"></TopicList>
      </template>
    </template>
  </DefaultLayout>
</template>
