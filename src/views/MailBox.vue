<template>
   <main class="pt-20">
      <!-- Unread Mail -->
      <unread-mail-box></unread-mail-box>
      <!-- Old mail -->
      <page-section class="mt-12" title="Mail Box">
         <template v-slot:body>
            <template v-for="mail in mails" :key="mail.id">
               <list-item :thumbnail="false">
                  <template v-slot:start>
                     <strong>From : {{ mail.fullname }}</strong>
                     <p>at {{ mail.timestamp }}</p>
                  </template>
                  <template v-slot:end><i class="fa-solid fa-envelope-open text-indigo-600"></i></template>
               </list-item>
            </template>
         </template>
      </page-section>
   </main>
</template>

<script setup>

import PageSection from '@component/PageSection.vue'
import ListItem from '@component/ListItem.vue'
import UnreadMailBox from '@component/UnreadMailBox.vue'

const mails = [
   {
      id: 1,
      fullname: 'Sandhika',
      phone: '086578945899',
      email: 'Sandhika@gmail.com',
      company: 'UNPAS',
      text: 'Dis parturient montes, nascetur ridiculus mus. Nulla facilisis massa ut massa. Sed nisi purus, malesuada eu, porta vulputate, suscipit.',
      unread: false,
      timestamp: new Date().toLocaleString()
   },
   {
      id: 2,
      fullname: 'Sandhika',
      phone: '086578945899',
      email: 'Sandhika@gmail.com',
      company: 'UNPAS',
      text: 'Dis parturient montes, nascetur ridiculus mus. Nulla facilisis massa ut massa. Sed nisi purus, malesuada eu, porta vulputate, suscipit.',
      unread: false,
      timestamp: new Date().toLocaleString()
   },
   {
      id: 3,
      fullname: 'Sandhika',
      phone: '086578945899',
      email: 'Sandhika@gmail.com',
      company: 'UNPAS',
      text: 'Dis parturient montes, nascetur ridiculus mus. Nulla facilisis massa ut massa. Sed nisi purus, malesuada eu, porta vulputate, suscipit.',
      unread: false,
      timestamp: new Date().toLocaleString()
   }
]
</script>
