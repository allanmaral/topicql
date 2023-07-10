export interface User {
  id: number;
  name: string;
  bio: string;
  username: string;
  avatarUrl: string;
}

export interface UserAvatar {
  id: number;
  username: string;
  avatarUrl: string;
}

const USER_KEY = "user";

export function getCurrentUser(): User {
  const userData = localStorage.getItem(USER_KEY) ?? '{ "id": 1 }';
  return JSON.parse(userData);
}

export function setCurrentUser(user: User) {
  const userData = JSON.stringify(user);
  localStorage.setItem(USER_KEY, userData);
}
