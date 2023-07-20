import { ID } from './identifier';

export interface User {
  id: ID;
  name: string;
  bio: string;
  username: string;
  avatarUrl: string;
}

export interface UserAvatar {
  id: ID;
  username: string;
  avatarUrl: string;
}

const USER_KEY = 'user';

export function getCurrentUser(): User {
  const savedUser = localStorage.getItem(USER_KEY);
  return savedUser
    ? JSON.parse(savedUser)
    : {
        id: 1,
        username: 'topicql',
        avatarUrl:
          'https://vectorseek.com/wp-content/uploads/2023/02/GraphQL-Logo-Vector.jpg',
        bio: 'A GraphQL study',
        name: 'TopicQL',
      };
}

export function setCurrentUser(user: User) {
  const userData = JSON.stringify(user);
  localStorage.setItem(USER_KEY, userData);
}
