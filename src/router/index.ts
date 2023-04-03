import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResourcesView from '../views/ResourcesView.vue'
import ResourceView from '../views/ResourceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/upload-article',
      name: 'upload',
      component: () => import('../views/UploadView.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView
    },
    {
      path: '/resources/:slug',
      name: 'resource',
      component: ResourceView
    },
    {
      path: '/model-utilization',
      name: 'util',
      component: () => import('../views/UtilizationView.vue')
    }
  ]
})

export default router
