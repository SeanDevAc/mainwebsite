<script setup lang="ts">
defineProps<{
  image: string;
  name: string;
  attributes: string;
  date: string;
}>();
</script>

<template>
  <div class="shadow-md flex flex-col items-start max-w-82">
    <img :src="image" alt="Project Image" class="w-full h-48 object-cover rounded-lg" />
    <p class="font-bold mt-2">{{ name }}</p>
    <p >{{ attributes }}</p>
    <p >{{ date }}</p>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>
