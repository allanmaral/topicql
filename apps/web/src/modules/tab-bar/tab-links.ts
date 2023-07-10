import {
  HomeIcon as HomeSolid,
  PencilSquareIcon as PencilSolid,
  UserIcon as UserSolid,
} from "@heroicons/vue/24/solid";
import {
  HomeIcon as HomeOutline,
  PencilSquareIcon as PencilOutline,
  UserIcon as UserOutline,
} from "@heroicons/vue/24/outline";

export const tabLinks = [
  {
    href: "/",
    exact: true,
    icon: HomeOutline,
    activeIcon: HomeSolid,
  },
  {
    href: "/topic/create",
    icon: PencilOutline,
    activeIcon: PencilSolid,
  },
  {
    href: "/profile",
    icon: UserOutline,
    activeIcon: UserSolid,
  },
];
