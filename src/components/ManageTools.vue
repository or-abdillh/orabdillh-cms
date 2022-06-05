<template>
  <main>
    <page-section title="Tools">
      <template v-slot:body>
        <!-- Form -->
        <form class="mt-8">
          <!-- Title -->
          <section class="input-field">
            <label for="title">Title</label>
            <div class="input-wrapper">
              <input placeholder="Your nsme of tool" name="title" id="title" required type="text">
            </div>
          </section>
          <!-- Assets -->
          <section class="input-field">
            <label for="asset">Asset</label>
            <div class="input-wrapper">
              <input placeholder="Direct link to your asset image" name="asset" id="asset" required type="url">
            </div>
          </section>
          <!-- Actions -->
          <submit-reset-button></submit-reset-button>
        </form>
        <!-- Tools -->
        <section class="mt-8">
          <template v-for="tool in tools" :key="tool.id">
            <list-item>
              <template v-slot:start><img :src="tool.asset" :alt="tool.title" class="w-full"></template>
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

const tools = [
  {
    id: 1,
    title: 'Vue',
    asset: '/vue.png'
  },
  {
    id: 2,
    title: 'Vue',
    asset: '/vue.png'
  },
  {
    id: 3,
    title: 'Vue',
    asset: '/vue.png'
  }
]

</script>
