<template>
  <main class="bg-gray-100 fixed top-0 right-0 left-0">
    <section class="container px-6 py-3 flex justify-between items-center text-lg">
      <section class="flex items-center gap-4">
        <img src="/icons/icon-152x152.png" class="w-2/12" alt="logo">
        <h1 class="font-semibold text-indigo-600">OR ABDILLH</h1>
      </section> 
      <section>
        <i @click="toMailBox" class="fa fa-solid fa-envelope-open text-indigo-600 text-2xl relative active:scale-95 duration-300">
          <span class="text-indigo-600 bg-gray-100 px-1 rounded-full font-semibold text-sm absolute -top-1 -right-1">2</span>
        </i>
      </section>
    </section>
  </main>
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()
const toMailBox = () => {
  setTimeout( router.push({ name: 'Mail Box' }), 350 )
}
</script>
