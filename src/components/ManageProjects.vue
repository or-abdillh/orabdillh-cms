<template>
  <main>
    <page-section title="Projects">
      <template v-slot:body>
        <!--Form -->
        <form class="mt-8">
          <!-- Title project -->
          <section class="input-field">
            <label for="title">Title project</label>
            <div class="input-wrapper">
              <input placeholder="Your title project" name="title" id="title" required type="text">
            </div>
          </section>
          <!-- Github project -->
          <section class="input-field">
            <label for="github">Github Repository</label>
            <div class="input-wrapper">
              <input placeholder="Github repository link" name="github" id="github" required type="url">
            </div>
          </section>
          <!-- Instagram project -->
          <section class="input-field">
            <label for="instagram">Instagram Post</label>
            <div class="input-wrapper">
              <input placeholder="Instagram post link" name="instagram" id="instagram" required type="url">
            </div>
          </section>
          <!-- Asset project -->
          <section class="input-field">
            <label for="asset">Asset</label>
            <div class="input-wrapper">
              <input placeholder="Poster of project link" name="asset" id="asset" required type="url">
            </div>
          </section>
          <!-- Tags project -->
          <section class="input-field">
            <label for="tags">Tags project</label>
            <div class="input-wrapper">
              <input placeholder="Use <space> as delimitter" name="tags" id="tags" required type="text">
            </div>
          </section>
          <!-- Actions -->
          <submit-reset-button></submit-reset-button>
        </form>
        <!-- Projects -->
        <section class="mt-8">
          <template v-for="project in projects" :key="project.id">
            <list-item>
              <template v-slot:start><img :src="project.asset" :alt="project.title" class="w-full"></template>
              <template v-slot:center>
                <h1>{{ project.title }}</h1>
                <p class="flex gap-2">
                  <a :href="project.instagram"><i class="fa fa-brands fa-instagram text-pink-600"></i></a>
                  <a :href="project.github"><i class="fa fa-brands fa-github text-gray-600"></i></a>
                </p>
                <!-- Tags -->
                <p class="flex gap-2">
                  <template v-for="tag in project.tags.split(' ')" :key="tag">
                    <span class="text-xs text-indigo-600"><i class="fa-solid fa-tags mr-1"></i>{{ tag }}</span>
                  </template>
                </p>
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

const projects = [
  {
    id: 1,
    title: 'OMDB Web App',
    github: 'https://github.com/or-abdillh/omdb-app.git',
    instagram: 'https://instagram.com/or.abdillh',
    asset: '/omdb.png',
    tags: 'vue-js sass open-api'
  },
  {
    id: 2,
    title: 'OMDB Web App',
    github: 'https://github.com/or-abdillh/omdb-app.git',
    instagram: 'https://instagram.com/or.abdillh',
    asset: '/omdb.png',
    tags: 'vue-js sass open-api'
  },
  {
    id: 3,
    title: 'OMDB Web App',
    github: 'https://github.com/or-abdillh/omdb-app.git',
    instagram: 'https://instagram.com/or.abdillh',
    asset: '/omdb.png',
    tags: 'vue-js sass open-api'
  }

]

</script>
