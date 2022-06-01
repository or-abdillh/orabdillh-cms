<style scoped>

@keyframes spinner {
  from {
    transform: rotate(0);
  } to {
    transform: rotate(360deg)
  }
}

.spinner {
  animation: spinner 1.5s ease-in infinite;
}

.btn {
  @apply px-3 py-2 border-2 rounded-lg mt-4;
}

</style>

<template>
  <main v-if="show" class="duration-300 bg-gray-900 bg-opacity-50 fixed inset-0">
    <section class="container grid place-items-center min-h-screen">
      <div class="text-center text-indigo-600 bg-indigo-100 p-4 rounded-lg w-6/12">
        <i
          :class="loadIcon"
          class="fa fa-solid text-3xl text-indigo-600"></i>
        <h1 v-if="onLoad">Please wait</h1>
        <!-- Success state -->
        <div v-else-if="isSuccess">
          <h1>Sucess</h1>
          <button @click="buttonAction(true)" class="btn border-indigo-600">Ok</button>
        </div>
        <!-- failed state -->
        <div v-else-if="isFailed">
          <h1>Upps, something wrong</h1>
          <button @click="buttonAction(false)" class="btn border-red-600 text-red-600">Retry again</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  isSuccess: {
    type: Boolean,
    default: false
  },
  isFailed: {
    type: Boolean,
    default: false
  },
  onLoad: {
    type: Boolean,
    default: false
  }
})

const loadIcon = {
  'spinner fa-spinner': props.onLoad && !props.isSuccess && !props.isFailed,
  'fa-check': !props.onLoad && props.isSuccess && !props.isFailed,
  'fa-times': !props.onLoad && !props.isSuccess && props.isFailed
}

const emits = defineEmits(['retry'])

const buttonAction = success => {
  setTimeout(() => {
    if (success) router.push({ path: route.path })
    else emits('retry')
  }, 350)
}

</script>
