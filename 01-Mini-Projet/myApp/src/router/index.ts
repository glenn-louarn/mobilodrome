import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Sessions from '@/views/Sessions.vue';
import Session from '@/views/Session.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/sessions',
    component: Sessions,
  },
  {
    path: '/session/:idSession',
    component: Session,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;