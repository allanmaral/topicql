<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { graphql } from '@/gql';
import { useQuery } from '@urql/vue';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ProfileHeader from '../components/ProfileHeader.vue';
import ProfileFeed from '../components/ProfileFeed.vue';
import { getCurrentUser } from '@/lib/domain';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

const userProfileQueryDocument = graphql(/* GraphQL */ `
  query Profile($userId: ID!) {
    user(id: $userId) {
      id
      username
      name
      bio
      avatarUrl
      topics {
        id
        content
        createdAt
        author {
          id
          username
          avatarUrl
        }
        replies {
          author {
            id
            username
            avatarUrl
          }
        }
      }
    }
  }
`);

const route = useRoute();

function getUserId() {
  return route.params['id'] ? Number(route.params['id']) : getCurrentUser().id;
}

const { data, fetching, error } = useQuery({
  query: userProfileQueryDocument,
  variables: {
    userId: <string>getUserId(),
  },
});

const profile = computed(() =>
  data.value?.user
    ? {
        user: data.value.user,
        topics: data.value.user.topics,
      }
    : undefined
);
</script>

<template>
  <DefaultLayout>
    <template #title>
      <ProfileHeader v-if="profile" :user="profile.user"></ProfileHeader>
    </template>

    <template #default>
      <template v-if="fetching">
        <LoadingIndicator />
      </template>
      <template v-else-if="error">
        <ErrorMessage />
      </template>
      <template v-else-if="profile">
        <ProfileFeed :topics="profile.topics"></ProfileFeed>
      </template>
    </template>
  </DefaultLayout>
</template>
