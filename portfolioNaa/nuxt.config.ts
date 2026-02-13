// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//    css: ['./app/assets/css/main.css'],
//   devtools: { enabled: true }
// })
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
compatibilityDate: '2025-07-15',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
   devtools: { enabled: true }
})
