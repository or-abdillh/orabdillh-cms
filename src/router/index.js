import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'Landing & Navbar',
    path: '/manage/landing-navbar',
    component: () => import('@/views/ManageLandingNavbar.vue')
  },
  {
    name: 'Contacts & Social Media',
    path: '/manage/contacts',
    component: () => import('@/views/ManageContacts.vue')
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
