import { Topic } from '@prisma/client';

import {
  BasePayload,
  createInternalServerError,
  createPayload,
  createValidationError,
  Resolvers,
  Resolver,
  createUnauthorizedError,
} from '../utils';

interface TopicInput {
  content?: string;
  replyTo?: number;
}

interface TopicPayload extends BasePayload {
  topic?: Topic;
}

interface CreateTopicArgs {
  topic: TopicInput;
}

const createTopic: Resolver<CreateTopicArgs> = async (self, args, ctx) => {
  const payload = createPayload<TopicPayload>();

  try {
    if (!args.topic.content) {
      payload.userErrors.push(
        createValidationError('content', 'Content is required')
      );
    }

    if (!ctx.userId) {
      payload.userErrors.push(
        createUnauthorizedError('You must be logged in to create a topic')
      );
    }

    if (!payload.userErrors.length) {
      const topic = await ctx.prisma.topic.create({
        data: {
          content: args.topic.content as string,
          authorId: Number(ctx.userId),
          replyToId: args.topic.replyTo
            ? Number(args.topic.replyTo)
            : undefined,
        },
      });

      payload.topic = topic;
    }
  } catch (error) {
    payload.userErrors.push(
      createInternalServerError('Failed to create a topic')
    );
  }

  return payload.topic;
};

const feed: Resolver = (self, args, ctx) => {
  return ctx.prisma.topic.findMany({
    where: { replyToId: { equals: null } },
    orderBy: [{ createdAt: 'desc' }],
  });
};

interface FindTopicByIdArgs {
  id: number;
}

const topicById: Resolver<FindTopicByIdArgs> = (self, args, ctx) => {
  return ctx.prisma.topic.findUnique({
    where: {
      id: Number(args.id),
    },
  });
};

const TopicResolvers: Record<string, Resolver<any, Topic>> = {
  id: (self) => self.id,
  content: (self) => self.content,
  createdAt: (self) => self.createdAt,
  author: (self, _, ctx) => {
    return ctx.prisma.user.findUnique({ where: { id: self.authorId } });
  },
  replies: (self, _, ctx) => {
    return ctx.prisma.topic.findMany({ where: { replyToId: self.id } });
  },
};

export const resolvers: Resolvers = {
  Topic: TopicResolvers,
  Query: {
    feed,
    topic: topicById,
  },
  Mutation: {
    createTopic,
  },
};
