import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'h',
    component: () => import('../views/PassportHelper/HomePage.vue'),
  },
  {
    path: '/more/:id',
    name: 'more',
    component: () => import('../views/PassportHelper/MoreRead.vue'),
  },
  {
    path: '/insert',
    name: 'userInsert',
    component: () => import('../views/PassportHelper/AddData.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
