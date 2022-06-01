<template>
  <navigation-bar></navigation-bar>
  <main class="container px-6 py-3">
    <router-view></router-view>
  </main>
</template>

<script setup>

import NavigationBar from '@component/NavigationBar.vue'

</script>
