import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {
      path: '/',
      name: 'root',
      redirect: to => {
        return { path: '/home' }
      }
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
      path: '/services/seo',
      name: 'seo',
      component: () => import('../views/services/Seo.vue')
    },
    {
      path: '/services/web-development',
      name: 'web-development',
      component: () => import('../views/services/WebDevelopment.vue')
    },
    {
      path: '/services/digital-marketing',
      name: 'digital-marketing',
      component: () => import('../views/services/DigitalMarketing.vue')
    },
    {
      path: '/services/system-integration',
      name: 'system-integration',
      component: () => import('../views/services/SystemIntegration.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]