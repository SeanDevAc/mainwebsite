<script setup lang="ts">
import { useAppConfig, useRuntimeConfig } from '#imports';
import tailwindcss from '@tailwindcss/vite'

const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();

useHead({
  title: 'Sean Wakker | Portfolio',
  link: [
    { rel: 'icon', type: 'image/png', href: '/img/logo.png' }
  ]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
