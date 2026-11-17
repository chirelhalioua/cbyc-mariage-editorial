export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
  app: {
    head: {
      title: 'Élise & Antoine — Invitation',
      meta: [
        { name: 'description', content: 'Une invitation de mariage imaginée avec élégance par C by C.' },
        { name: 'theme-color', content: '#eee7dc' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
