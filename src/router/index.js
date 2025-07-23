import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MatchView from '../views/MatchView.vue'
import MatchFindingView from '../views/MatchFindingView.vue'
import TestView from '../views/TestView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pre-match',
      name: 'prematch',
      component: MatchView,
    },
    {
      path: '/matching',
      name: 'matching',
      component: MatchFindingView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
  ],
})

export default router
