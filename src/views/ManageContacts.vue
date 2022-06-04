<template>
   <main class="pt-20">
      <page-section title="Manage your information about contacts and social media">
         <template v-slot:body>
            <form class="mt-8">
               <!-- Whatsapp -->
               <section class="input-field">
                  <label for="whatsapp">Whatsapp</label>
                  <div class="input-wrapper">
                     <input placeholder="Your whatsapp number" name="whatsapp" id="whatsapp" type="number">
                  </div>
               </section>
               <!-- Email -->
               <section class="input-field">
                  <label for="email">Email</label>
                  <div class="input-wrapper">
                     <input placeholder="Your email address" name="email" id="email" type="email">
                  </div>
               </section>
               <!-- Link IG -->
               <section class="input-field">
                  <label for="instagram">Link IG</label>
                  <div class="input-wrapper">
                     <input placeholder="Your instagram link profile" name="instagram" id="instagram" type="url">
                  </div>
               </section>
               <!-- Link FB -->
               <section class="input-field">
                  <label for="facebook">Link FB</label>
                  <div class="input-wrapper">
                     <input placeholder="Your facebook link profile" name="facebook" id="facebook" type="urlr">
                  </div>
               </section>
               <!-- Link Github -->
               <section class="input-field">
                  <label for="github">Link Github</label>
                  <div class="input-wrapper">
                     <input placeholder="Your github link profile" name="github" id="github" type="url">
                  </div>
               </section>
               <!-- Address -->
               <section class="input-field">
                  <label for="address">Address</label>
                  <div class="input-wrapper">
                     <textarea rows="5" placeholder="Your current address" name="address" id="address"></textarea>
                  </div>
               </section>
               <!-- Actions -->
               <section class="mt-10 w-full flex gap-3">
                  <!-- Submit -->
                  <button class="btn-submit" type="submit">
                     <i class="fa fa-solid fa-paper-plane"></i>
                     Submit
                  </button>
                  <!-- Reset -->
                  <button class="btn-reset" type="reset">
                     <i class="fa fa-solid fa-repeat"></i>
                     Reset
                  </button>
               </section>
            </form>
         </template>
      </page-section>
      <process-state></process-state>
   </main>
</template>

<script setup>

import PageSection from '@component/PageSection.vue'
import ProcessState from '@component/ProcessState.vue'

</script>
