<template>
  <main>
    <section>
      <h1 class="text-xl font-medium text-indigo-600">{{ title }}</h1>
      <p class="text-gray-500 text-sm">{{ subtitle }}</p>
    </section>
    <section class="mt-6">
      <slot name="body"></slot>
    </section>
  </main>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'Title Section'
  },
  subtitle: {
    type: String,
    default: 'Sed eget est vitae tortor mollis ullamcorper Et luctus faucibus, nibh nisi commodo.'
  }
})

</script>
