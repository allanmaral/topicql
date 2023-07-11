/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PrismaClient, Topic } from '@prisma/client';
import { sub } from 'date-fns';

import { userId } from './users';

const topics: Topic[] = [
  {
    id: 1,
    content: 'Sério, mais uma cópia???',
    authorId: userId.twitter,
    createdAt: sub(new Date(), { hours: 3, minutes: 45 }),
    updatedAt: sub(new Date(), { hours: 3, minutes: 45 }),
    replyToId: null,
  },
  {
    id: 2,
    content: '👀',
    authorId: userId.facebook,
    createdAt: sub(new Date(), { hours: 2, minutes: 34 }),
    replyToId: null,
    updatedAt: sub(new Date(), { hours: 2, minutes: 34 }),
  },
  {
    id: 3,
    content: 'Onde eu clico para enviar imagem?',
    authorId: userId.instagram,
    createdAt: sub(new Date(), { hours: 1, minutes: 59 }),
    updatedAt: sub(new Date(), { hours: 1, minutes: 59 }),
    replyToId: null,
  },
  {
    id: 4,
    content: 'Acho que você tá na rede social errada',
    authorId: userId.threads,
    createdAt: sub(new Date(), { hours: 1, minutes: 20 }),
    updatedAt: sub(new Date(), { hours: 1, minutes: 20 }),
    replyToId: 3,
  },
  {
    id: 5,
    content: '@topicql tá valendo quanto?',
    authorId: userId.facebook,
    createdAt: sub(new Date(), { hours: 1, minutes: 5 }),
    replyToId: 2,
    updatedAt: sub(new Date(), { hours: 1, minutes: 5 }),
  },
  {
    id: 6,
    content: 'Já vai comprar essa também?',
    authorId: userId.mastodon,
    createdAt: sub(new Date(), { hours: 1, minutes: 1 }),
    replyToId: 2,
    updatedAt: sub(new Date(), { hours: 1, minutes: 1 }),
  },
  {
    id: 7,
    content: '@facebook e ai, vai ser quando?',
    authorId: userId.twitter,
    createdAt: sub(new Date(), { minutes: 45 }),
    replyToId: null,
    updatedAt: sub(new Date(), { minutes: 45 }),
  },
  {
    id: 8,
    content: 'Só vem 💪',
    authorId: userId.facebook,
    createdAt: sub(new Date(), { minutes: 30 }),
    replyToId: 7,
    updatedAt: sub(new Date(), { minutes: 30 }),
  },
  {
    id: 9,
    content: '🤦‍♂️',
    authorId: userId.mastodon,
    createdAt: sub(new Date(), { minutes: 22 }),
    replyToId: 7,
    updatedAt: sub(new Date(), { minutes: 22 }),
  },
  {
    id: 10,
    content: '#team🦎',
    authorId: userId.instagram,
    createdAt: sub(new Date(), { minutes: 19 }),
    replyToId: 7,
    updatedAt: sub(new Date(), { minutes: 19 }),
  },
];

export async function seedTopics(db: PrismaClient): Promise<void> {
  const alreadyCreated = await db.topic.findMany();
  if (alreadyCreated.length > 0) return;

  for (let i = 0; i < topics.length; i++) {
    await db.topic.create({ data: topics[i] });
  }
}
