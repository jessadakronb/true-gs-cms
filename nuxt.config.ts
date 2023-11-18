export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  
  app: {
    head: {
      title:
        "TrueGS CMS",
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico', // Adjust the path if your favicon is in a different location
        },
      ],
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    serveStatic: true,
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],
});
