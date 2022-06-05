<template>
  <main>
    <page-section title="Skills">
      <template v-slot:body>
        <!-- Form -->
        <form class="mt-8">
          <!-- skill -->
          <section class="input-field">
            <label for="skill">Skill</label>
            <div class="input-wrapper">
              <input placeholder="Your skill" name="skill" id="skill" type="text">
            </div>
          </section>
          <!-- Actions -->
          <submit-reset-button></submit-reset-button>
        </form>
        <!-- Skills -->
        <section class="mt-8">
          <template v-for="skill in skills" :key="skill.id">
            <list-item>
              <template v-slot:start>
                <h1>{{ skill.title }}</h1>
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

const skills = [
  {
    id: 1,
    title: 'In orci. Maecenas vehicula. Sed.'
  },
  {
    id: 2,
    title: 'In orci. Maecenas vehicula. Sed.'
  },
  {
    id: 3,
    title: 'In orci. Maecenas vehicula. Sed.'
  },
  {
    id: 4,
    title: 'In orci. Maecenas vehicula. Sed.'
  }
]

</script>
