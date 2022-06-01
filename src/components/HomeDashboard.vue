<template>
  <main>
    <home-section-page title="Dashboard">
      <template v-slot:body >
        <!-- Range by Date -->
        <section class="mb-8">
          <p>Range data :</p>
          <div class="flex gap-3 mt-2 w-full">
            <!-- From -->
            <div class="input-wrapper w-5/12">
              <input v-model="ranges.from" type="date">
            </div>
            <!-- To -->
            <div class="input-wrapper w-5/12">
              <input v-model="ranges.to" placeholder="To" type="date">
            </div>
            <!-- Save -->
            <button class="bg-indigo-600 text-gray-100 w-2/12 rounded"><i class="fa-solid fa-floppy-disk"></i></button>
          </div>
        </section>
        <!-- Chart bar -->
        <bar
          chart-id="Trafic"
          :chart-data="chartData"
          :chart-options="chartOptions"
          dataset-id-key="label"
        />
      </template>
    </home-section-page>
  </main>
</template>

<script setup>

import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import HomeSectionPage from '@component/HomeSectionPage.vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['5/5/2022', '6/5/2022', '7/5/2022', '8/5/2022', '9/5/2022', '10/5/2022'],
  datasets: [
    { 
      data: [22, 18, 11, 10, 10, 9],
      label: 'Visitors',
      backgroundColor: '#3949ab'
    },
    {
      data: [12, 11, 5, 7, 8, 2],
      label: 'CV direct',
      backgroundColor: '#43a047'
    }
  ]
}

const chartOptions = {
  responsive: true
}

const ranges = ref({
  from: '5/5/2022',
  to: '10/5/2022'
})

</script>
