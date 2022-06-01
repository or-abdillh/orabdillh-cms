<template>
  <main class="mt-12">
    <home-section-page title="Manage Content">
      <template v-slot:body >
        <!-- Manage Contents -->
        <template v-for="item in manageContents" :key="item.id">
          <list-item @click="navigationTo( item.path )">
            <template v-slot:start><i :class="item.icon" class="text-indigo-600 bg-indigo-100 p-2 rounded text-2xl"></i></template>
            <template v-slot:center>
              <h1 class="text-indigo-600">{{ item.name }}</h1>
              <p class="text-sm">{{ item.description }}</p>
            </template>
          </list-item>
        </template>
        <!-- End -->
      </template>
    </home-section-page>
  </main>
</template>

<script setup>

import { useRouter } from 'vue-router'
import HomeSectionPage from '@component/HomeSectionPage.vue'
import ListItem from '@component/ListItem.vue'

const router = useRouter()

const navigationTo = path => {
  setTimeout(() => {
    router.push({ path })
  }, 350)
}

const manageContents = [
  {
    id: 1,
    name: 'Landing & Navbar',
    icon: 'fa fa-solid fa-id-card-clip',
    description: 'In ligula dapibus egestas. Donec sed.',
    path: '/manage/landing-navbar'
  },
  {
    id: 2,
    name: 'Contacts & Social Media',
    icon: 'fa fa-solid fa-address-book',
    description: 'In ligula dapibus egestas. Donec sed.',
    path: ''
  },
  {
    id: 3,
    name: 'Skills & Educations',
    icon: 'fa fa-solid fa-graduation-cap',
    description: 'In ligula dapibus egestas. Donec sed.',
    path: ''
  },
  {
    id: 4,
    name: 'Tools & Projects',
    icon: 'fa fa-solid fa-screwdriver-wrench',
    description: 'In ligula dapibus egestas. Donec sed.',
    path: ''
  }

]
</script>
