const baseUrl = process.env.DIRECTUS_HOST || 'http://localhost:8055'
const nuxtBaseUrl = process.env.NUXT_BASE_URL || 'http://localhost:3000'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@bg-dev/nuxt-directus"],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  directus: {
    rest: { baseUrl, nuxtBaseUrl }
  }
})
