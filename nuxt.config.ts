export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Clara & Mathis — Invitation de mariage',
      meta: [
        {
          name: 'description',
          content: 'Découvrez l’invitation de mariage de Clara & Mathis, le 18 septembre 2027 en Provence. Une création élégante C by C.'
        },
        { name: 'theme-color', content: '#eee7dc' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:title', content: 'Clara & Mathis — Invitation de mariage' },
        {
          property: 'og:description',
          content: 'Clara & Mathis ont la joie de vous convier à célébrer leur mariage le 18 septembre 2027 en Provence.'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Clara & Mathis — Invitation de mariage' },
        {
          name: 'twitter:description',
          content: 'Une invitation de mariage élégante imaginée par C by C.'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
