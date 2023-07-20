import { ID } from './identifier';
import { UserAvatar } from './user';

export interface Topic {
  id: ID;
  author: UserAvatar;
  content: string;
  replies?: Topic[];
  createdAt: Date;
}

export interface FeedTopic {
  id: ID;
  author: UserAvatar;
  content: string;
  replies?: FeedTopicReply[];
  createdAt: Date;
}

export interface FeedTopicReply {
  author: UserAvatar;
}
