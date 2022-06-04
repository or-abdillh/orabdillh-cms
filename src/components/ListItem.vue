<template>
  <main class="flex items-center justify-between gap-3 mb-3 px-3 py-4 border border-indigo-100 rounded-lg active:bg-gray-50 active:border-indigo-300 active:scale-95 duration-300">
    <section>
      <slot name="start"></slot>
    </section>
    <section>
      <slot name="center"></slot>
    </section>
    <section>
      <slot name="end"></slot>
    </section>
  </main>
</template>

<script setup>

const props = defineProps({
  item: {
    type: Object,
    default: {}
  }
})

</script>
