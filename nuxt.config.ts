// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/ionic", 
    "@nuxt/image"
  ],
  image: {
    dir: 'assets/',
},
  ssr: false,
  devtools: { enabled: false }
})
