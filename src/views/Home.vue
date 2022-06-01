<template>
  <main class="pt-20">
     <home-title-bar></home-title-bar>
     <!-- Dashboard -->
     <home-dashboard></home-dashboard>
     <!-- Manage Content -->
     <home-manage-content></home-manage-content>
     <!-- Overview -->
      <home-overview></home-overview>
  </main>
</template>

<script setup>

import HomeTitleBar from '@component/HomeTitleBar.vue'
import HomeDashboard from '@component/HomeDashboard.vue'
import HomeManageContent from '@component/HomeManageContent.vue'
import HomeOverview from '@component/HomeOverview.vue'

</script>
