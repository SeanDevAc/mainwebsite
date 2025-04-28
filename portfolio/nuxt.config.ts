import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  $development: {
    //
  },

  $env: {
    staging: {
      // 
    }
  },

  compatibilityDate: '2025-02-15',
})