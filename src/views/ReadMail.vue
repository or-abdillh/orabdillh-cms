<style scoped>

.btn {
   @apply rounded-lg px-3 py-2 text-gray-100;
}

</style>

<template>
   <main class="pt-20">
      <page-section title="Sandhika Galih" :subtitle="`UNPAS - ${ new Date().toLocaleString() }`">
         <template v-slot:body>
            <p>
               Morbi purus enim, dapibus a, facilisis non Sit amet, tellus. Maecenas a dolor. Praesent tempor, felis eget gravida blandit, urna lacus faucibus velit, in consectetuer sapien erat nec quam. Integer bibendum odio sit.
            </p>
            <!-- Actions -->
            <section class="w-full mt-12 flex gap-3">
               <!-- Reply use WA -->
               <a class="btn bg-green-600 border-green-100" href="" >
                  <i class="fa-brands fa-whatsapp"></i>
                  Reply via WA
               </a>
               <!-- Reply use email -->
               <a class="btn bg-red-600 border-red-100" href="mailto:">
                  <i class="fa-solid fa-envelope"></i>
                  Email
               </a>
            </section>
         </template>
      </page-section>
   </main>
</template>

<script setup>

import PageSection from '@component/PageSection.vue'

</script>
