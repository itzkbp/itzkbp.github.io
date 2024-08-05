// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss"
  ],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      title: "Kailash B. Poudel - Portfolio Website",
    },
  },

})