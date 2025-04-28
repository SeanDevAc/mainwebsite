<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  date: string;
}>();
</script>

<template>
  <div>
      <br>
      <p class="font-bold"> {{ title }} </p>
      <p> {{ subtitle }}</p>
      <p> {{ date }} </p>
      <br>
      <hr>
  </div>
</template>
