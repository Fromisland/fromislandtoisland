// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/fromislandtoisland/', // GitHub repository name
    head: {
      title: '由島至島——記憶與對話\nFrom Island to Island: Memory and Dialogue',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '記憶像水一樣流動  我們可以選擇如何記憶' },
        // Open Graph
        { property: 'og:title', content: 'From Island To Island' },
        { property: 'og:description', content: '記憶像水一樣流動  我們可以選擇如何記憶' },
        {
          property: 'og:image',
          content: 'https://unikyolanda.github.io/From_Island_To_Island/ogimage.jpg',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        // { property: 'og:url', content: 'https://yourwebsite.com' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;500;600;700;800&family=Amiri:wght@400;700&display=swap&family=Wix+Madefor+Display:wght@400..800&display=swapfamily=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Caveat:wght@400..700&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: './favicon.png',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/ripples.client.ts'],
})
