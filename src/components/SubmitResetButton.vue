<template>
  <main>
    <section class="mt-10 w-full flex gap-3">
      <!-- Submit -->
      <button @click="emits('submit')" class="btn-submit" type="submit">
        <i class="fa fa-solid fa-paper-plane"></i>
          Submit
      </button>
      <!-- Reset -->
      <button @click="emits('reset')" class="btn-reset" type="reset">
        <i class="fa fa-solid fa-repeat"></i>
          Reset
      </button>
    </section>
  </main>
</template>

<script setup>

const emits = defineEmits(['submit', 'reset'])

</script>
