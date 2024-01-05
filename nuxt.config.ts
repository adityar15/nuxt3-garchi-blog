// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    GARCHI_API_URL: "https://garchi.co.uk/api/v2",
    GARCHI_API_KEY: "136|FxaNowsrR8eSU2wFoSxT6UHDPqUgO2lwi2kK0P6V8d3c2262",
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
  }
})
