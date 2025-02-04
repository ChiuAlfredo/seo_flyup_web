import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: 'home'  // 將根路徑重定向到 /home
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router