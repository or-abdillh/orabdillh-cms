<template>
  <main class="mt-12">
    <page-section title="Overview">
      <template v-slot:body>
        <section class="">
          <!-- List of overview -->
          <template v-for="item in overviews" :key="item.id">
            <list-item>
              <template v-slot:start><h1 class="bg-indigo-100 text-indigo-600 text-3xl p-2 rounded-lg">{{ item.value }}</h1></template>
              <template v-slot:center>
                <div>
                  <h1 class="text-indigo-600">{{ item.name }}</h1>
                  <p class="text-sm">Last update :{{ item.timestamp }}</p>
                </div>
              </template>
            </list-item>
          </template>
          <!-- End -->
        </section>
        <section class="my-5">
          <button class="bg-indigo-100 text-indigo-600 rounded-lg px-3 py-2 mr-3">Live preview</button>
          <button class="bg-red-100 text-red-600 px-3 py-2 rounded-lg">Log Out</button>
        </section>
      </template>
    </page-section>
  </main>
</template>

<script setup>

import  PageSection from '@component/PageSection.vue'
import ListItem from '@component/ListItem.vue'

const overviews = [
  {
    id: 1,
    value: 12,
    name: 'Projects',
    timestamp: '5/5/2022'
  },
  {
    id: 2,
    value: 12,
    name: 'Tools',
    timestamp: '5/5/2022'
  },
  {
    id: 3,
    value: 12,
    name: 'Educations',
    timestamp: '5/5/2022'
  },
  {
    id: 4,
    value: 12,
    name: 'Skills',
    timestamp: '5/5/2022'
  }
]
</script>
