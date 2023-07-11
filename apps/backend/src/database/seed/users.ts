import { PrismaClient, User } from '@prisma/client';

export const userId = {
  topicql: 1,
  twitter: 2,
  threads: 3,
  mastodon: 4,
  instagram: 5,
  facebook: 6,
};

const users: User[] = [
  {
    id: userId.topicql,
    name: 'TopicQL',
    username: 'topicql',
    bio: 'A GraphQL study',
    avatarUrl:
      'https://vectorseek.com/wp-content/uploads/2023/02/GraphQL-Logo-Vector.jpg',
    createdAt: new Date(),
    password: '$2a$12$pq1CeOnyMb6OXa1Fkwen6uRWvOWcLAOFO51LEDc2JGOCbusgXxm3S',
    updatedAt: new Date(),
  },
  {
    id: userId.twitter,
    name: 'Twitter',
    username: 'twitter',
    bio: 'We believe real change starts with conversation',
    avatarUrl: 'https://logowik.com/content/uploads/images/908_twitter.jpg',
    createdAt: new Date(),
    password: '$2a$12$pq1CeOnyMb6OXa1Fkwen6uRWvOWcLAOFO51LEDc2JGOCbusgXxm3S',
    updatedAt: new Date(),
  },
  {
    id: userId.threads,
    name: 'Threads',
    username: 'threads',
    bio: 'Share ideas & trends with text',
    avatarUrl:
      'https://logowik.com/content/uploads/images/threads-app2124.logowik.com.webp',
    createdAt: new Date(),
    password: '$2a$12$pq1CeOnyMb6OXa1Fkwen6uRWvOWcLAOFO51LEDc2JGOCbusgXxm3S',
    updatedAt: new Date(),
  },
  {
    id: userId.mastodon,
    name: 'Mastodon',
    username: 'mastodon',
    bio: 'Decentralized network',
    avatarUrl:
      'https://logowik.com/content/uploads/images/mastodon-social5333.jpg',
    createdAt: new Date(),
    password: '$2a$12$pq1CeOnyMb6OXa1Fkwen6uRWvOWcLAOFO51LEDc2JGOCbusgXxm3S',
    updatedAt: new Date(),
  },
  {
    id: userId.instagram,
    name: 'Instagram',
    username: 'instagram',
    bio: 'Photo & Video',
    avatarUrl:
      'https://logowik.com/content/uploads/images/5501-instagram-new-2022-line.webp',
    createdAt: new Date(),
    password: '$2a$12$pq1CeOnyMb6OXa1Fkwen6uRWvOWcLAOFO51LEDc2JGOCbusgXxm3S',
    updatedAt: new Date(),
  },
  {
    id: userId.facebook,
    name: 'Facebook',
    username: 'facebook',
    bio: 'Open your world',
    avatarUrl:
      'https://logowik.com/content/uploads/images/facebook-2021-icon8576.logowik.com.webp',
    createdAt: new Date(),
    password: '$2a$12$pq1CeOnyMb6OXa1Fkwen6uRWvOWcLAOFO51LEDc2JGOCbusgXxm3S',
    updatedAt: new Date(),
  },
];

export async function seedUsers(db: PrismaClient): Promise<void> {
  const alreadyCreated = await db.user.findMany();
  if (alreadyCreated.length > 0) return;

  for (let i = 0; i < users.length; i++) {
    await db.user.create({ data: users[i] });
  }
}
