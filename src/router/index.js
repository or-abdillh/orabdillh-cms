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
  },
  {
    name: 'Educations & Skills',
    path: '/manage/education-skill',
    component: () => import('@/views/ManageEducationSkill.vue')
  },
  {
    name: 'Tools & Projects',
    path: '/manage/tool-project',
    component: () => import('@/views/ManageToolProject.vue')
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
