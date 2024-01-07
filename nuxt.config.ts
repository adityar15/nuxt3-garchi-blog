// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    GARCHI_API_URL: "https://garchi.co.uk/api/v2",
    GARCHI_API_KEY: "your_api_key",
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: {
    dirs: [
      {
        "path": "~/components/garchi",
        "global": true
      },
      "~/components"
    ]
  },

  experimental: {
    componentIslands: true
  },

  modules: ["@nuxt/image"],
})