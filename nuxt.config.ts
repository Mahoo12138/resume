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
    rest: {
      baseUrl: "http://192.168.1.100:18055", // Directus app base url
      nuxtBaseUrl: "http://localhost:3000", // Nuxt app base url
    },
  }
})
