<template>
  <div>
    <h2>An error occurred!</h2>
    <p>Make sure your searched movie title is spelled correctly and is the movie's english title.</p>
  </div>
</template>

<script setup>

</script>

<style scoped lang="postcss">
div {
  @apply bg-primary-gray text-white p-4 mx-auto text-balance my-4 rounded-md text-center max-w-lg drop-shadow-md;

  h2 {
    @apply text-xl font-bold;
  }
}
</style>