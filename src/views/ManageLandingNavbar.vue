<template>
   <main class="pt-20">
      <page-section title="Manage your landing and navbar content">
         <template v-slot:body>
            <form class="mt-8">
               <!-- brand -->
               <section class="input-field">
                  <label for="brand">Brand</label>
                  <div class="input-wrapper">
                     <input name="brand" id="brand" placeholder="Your brand name" required type="text">
                  </div>
               </section>
               <!-- first Paragraph -->
                <section class="input-field">
                  <label for="first-paragraph">First Pargraph</label>
                  <div class="input-wrapper">
                     <textarea rows="5" name="first-paragraph" id="first-paragraph" placeholder="Write something here" required type="text"></textarea>
                  </div>
               </section>
               <!--seconds Paragraph -->
                <section class="input-field">
                  <label for="seconds-paragraph">Seconds Pargraph</label>
                  <div class="input-wrapper">
                     <textarea rows="5" name="seconds-paragraph" id="seconds-paragraph" placeholder="Write something here" required type="text"></textarea>
                  </div>
               </section>
               <!-- Actions -->
               <submit-reset-button></submit-reset-button>
            </form>
         </template>
      </page-section>
      <!-- Process state -->
      <process-state v-on:retry="retry"></process-state>
   </main>
</template>

<script setup>

import PageSection from '@component/PageSection.vue'
import ProcessState from '@component/ProcessState.vue'
import SubmitResetButton from '@component/SubmitResetButton.vue'

const retry = () => console.log('retry')

</script>
