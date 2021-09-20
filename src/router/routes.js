import { Home, History, Favorite, NotFound } from '../pages';

export const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/favorit',
    component: Favorite,
  },
  {
    exact: true,
    path: '/history',
    component: History,
  },
  {
    exact: false,
    path: '*',
    component: NotFound,
  },
];
