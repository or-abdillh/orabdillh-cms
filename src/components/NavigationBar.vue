<template>
  <main v-if="pageTitle !== 'home'" class="fixed top-0 right-0 left-0 bg-gray-100">
    <section class="container flex gap-6 items-center px-6 py-4">
      <!-- Back button-->
      <div @click="buttonBack" class="border border-indigo-100 px-2 rounded-lg active:bg-gray-50 active:border-indigo-200 active:scale-95 duration-300">
        <i class="fa fa-solid fa-arrow-left text-indigo-600 text-2xl"></i>
      </div>
      <!-- Page title -->
      <div>
        <h1 class="text-lg font-medium text-indigo-600">{{ pageTitle }}</h1>
      </div>
    </section>
  </main>
</template>

<script setup>

import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const pageTitle = computed(() => route.name)


const buttonBack = () => {
  setTimeout(() => {
      router.go(-1)
  }, 350)
}

</script>
