<template>
   <main class="pt-20">
      <img src="/icons/icon-384x384.png" class="w-2/12 mb-3" alt="hero">
      <page-section title="Login" subtitle="Username and Password must be correctly">
         <template v-slot:body>
            <form class="mt-8">
            <!-- Username -->
            <section class="input-field">
               <label for="username">Username</label>
               <div class="input-wrapper">
                  <input placeholder="Your username here" name="username" id="username" required type="text">
               </div>
            </section>
            <!-- Password -->
            <section class="input-field">
               <label for="password">Password</label>
               <div class="input-wrapper">
                  <input placeholder="Your password here" name="password" id="password" required :type="showPassword ? 'text' : 'password'">
                  <i @click="showPassword = !showPassword" :class="showPassword ? 'fa-eye' : 'fa-eye-slash'" class="fa-solid p-3 w-2/12 text-indigo-600"></i>
               </div>
            </section>
            <!-- Actions -->
            <submit-reset-button></submit-reset-button>
            </form>
         </template>
      </page-section>
   </main>
</template>

<script setup>

import { ref } from 'vue'
import PageSection from '@component/PageSection.vue'
import SubmitResetButton from '@component/SubmitResetButton.vue'

const showPassword = ref(false)
</script>
