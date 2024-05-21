// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  // To re-enable _all_ Nuxt v3 behavior, set the following options:
  // srcDir: '.',
  // dir: {
  //   app: 'app'
  // },
  // experimental: {
  //   sharedPrerenderData: false,
  //   compileTemplate: true,
  //   templateUtils: true,
  //   relativeWatchPaths: true,
  //   defaults: {
  //     useAsyncData: {
  //       deep: true
  //     }
  //   }
  // },
  // unhead: {
  //   renderSSRHeadOptions: {
  //     omitLineBreaks: false
  //   }
  // }
});
