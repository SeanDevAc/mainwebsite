// import { defineStore } from 'pinia'

// export const useWebsiteStore = defineStore('websiteStore', {
//   state: () => ({
//     name: '',
//     description: '',
//     werk: {
//       bedrijf: '',
//       titel: '',
//       competenties: [],
//       images: [],
//       referentie: '',
//       beschrijving: ''
//     }
//   }),
//   actions: {
//     async fetch() {
//       try {
//         const infos = await $fetch('https://api.nuxt.com/modules/pinia')

//         this.werk = {
//           bedrijf: infos.bedrijf || '',
//           titel: infos.titel || '',
//           competenties: infos.competenties || [],
//           images: infos.images || [],
//           referentie: infos.referentie || '',
//           beschrijving: infos.beschrijving || ''
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error)
//       }
//     }
//   }
// })
