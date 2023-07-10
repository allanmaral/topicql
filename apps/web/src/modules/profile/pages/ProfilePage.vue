<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ProfileHeader from '../components/ProfileHeader.vue';
import ProfileFeed from '../components/ProfileFeed.vue';
import { Topic, User, getCurrentUser } from '@/lib/domain';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();

function getUserId() {
  return route.params['id'] ? Number(route.params['id']) : getCurrentUser().id;
}

onMounted(() => {
  const userId = getUserId();

  console.log('Component mounted', userId);
});

// TODO: Load profile
const profile: { user: User; topics: Topic[] } = {
  user: {
    id: 1,
    username: 'topicql',
    name: 'TopicQL',
    bio: 'Alguns dizem que eu sou um clone',
    avatarUrl:
      'https://vectorseek.com/wp-content/uploads/2023/02/GraphQL-Logo-Vector.jpg',
  },
  topics: [
    {
      id: 1,
      author: {
        id: 1,
        username: 'topicql',
        avatarUrl:
          'https://vectorseek.com/wp-content/uploads/2023/02/GraphQL-Logo-Vector.jpg',
      },
      content: 'Lorem ipsum',
      replies: [],
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 10),
    },
  ],
};
</script>

<template>
  <DefaultLayout>
    <template #title>
      <ProfileHeader :user="profile.user"></ProfileHeader>
    </template>

    <template #default>
      <ProfileFeed :topics="profile.topics"></ProfileFeed>
    </template>
  </DefaultLayout>
</template>
