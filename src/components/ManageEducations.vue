<template>
  <main>
    <page-section title="Eeducations">
      <template v-slot:body>
        <form class="mt-8">
          <!-- Title -->
          <section class="input-field">
            <label for="title">Title</label>
            <div class="input-wrapper">
              <input placeholder="Your education title" name="title" id="title" type="text">
            </div>
          </section>
          <!-- From -->
          <section class="input-field">
            <label for="from">From</label>
            <div class="input-wrapper">
              <input placeholder="Start begin" name="from" id="from" type="number">
            </div>
          </section>
          <!-- Until -->
          <section class="input-field">
            <label for="until">Until</label>
            <div class="input-wrapper">
              <input placeholder="Graduate year" name="until" id="until" type="text">
            </div>
          </section>
          <!-- Actions -->
          <submit-reset-button></submit-reset-button>
        </form>
        <!-- Educations Lists -->
        <section class="mt-8">
          <template v-for="item in educations" :key="item.id">
            <list-item>
              <template v-slot:start>
                <h1>{{ item.title }}</h1>
                <p>{{ item.from }} - {{ item.until }}</p>
              </template>
              <template v-slot:end>
                <edit-delete-button></edit-delete-button>
              </template>
            </list-item>
          </template>
        </section>
      </template>
    </page-section>
  </main>
</template>

<script setup>

import PageSection from '@component/PageSection.vue'
import ListItem from '@component/ListItem.vue'
import EditDeleteButton from '@component/EditDeleteButton.vue'
import SubmitResetButton from '@component/SubmitResetButton.vue'

const educations = [
   {
      id: 1,
      from: '2017',
      until: '2022',
      title: 'SMAN 1 Alalak'
   },
   {
      id: 2,
      from: '2017',
      until: '2022',
      title: 'SMAN 1 Alalak'
   },
   {
      id: 3,
      from: '2017',
      until: '2022',
      title: 'SMAN 1 Alalak'
   }
]
</script>
