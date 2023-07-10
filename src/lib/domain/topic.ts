import { UserAvatar } from "./user";

export interface Topic {
  id: number;
  author: UserAvatar;
  content: string;
  replies: Topic[];
  createdAt: Date;
}
