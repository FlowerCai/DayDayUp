import { createRouter, createWebHashHistory } from 'vue-router'
import EmojiScroll from '@/components/EmojiScroll'

const routes = [
  {
    path: '/',
    name: 'home',
    component: EmojiScroll
  },
  {
    path: '/horizontal',
    name: 'horizontal',
    component: () => import('@/components/HorizontalScroll')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
