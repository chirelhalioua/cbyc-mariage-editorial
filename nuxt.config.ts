export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Clara & Mathis — Invitation Art Déco | C by C',
      meta: [
        { name: 'description', content: 'Clara & Mathis vous invitent à célébrer leur mariage le 18 septembre 2027 en Provence. Une invitation digitale Art Déco signée C by C.' },
        { name: 'theme-color', content: '#541c2a' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:title', content: 'Clara & Mathis — Invitation Art Déco' },
        { property: 'og:description', content: 'Une invitation de mariage digitale aux accents bordeaux et champagne.' },
        { name: 'twitter:card', content: 'summary' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
