<template>
  <main class="pt-20">
     <home-title-bar></home-title-bar>
     <!-- Dashboard -->
     <home-dashboard></home-dashboard>
     <!-- Manage Content -->
     <home-manage-contents></home-manage-contents>
     <!-- Overview -->
      <home-overview></home-overview>
  </main>
</template>

<script setup>

import HomeTitleBar from '@component/HomeTitleBar.vue'
import HomeDashboard from '@component/HomeDashboard.vue'
import HomeManageContents from '@component/HomeManageContents.vue'
import HomeOverview from '@component/HomeOverview.vue'

</script>
