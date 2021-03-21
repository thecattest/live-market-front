export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'live-market',
    script: [
      // {
      //   hid: 'tawk.io',
      //   src: 'https://embed.tawk.to/5a12941fbb0c3f433d4ca278/1bvmg9vet',
      //   async: true,
      // },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/normalize.css', '~/assets/less/style.less'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vuelidate'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  styleResources: {
    /* Do not import actual styles. Use this module only to import variables,
		mixins, functions (et cetera) as they won't exist in the actual build.
		Importing actual styles will include them in every component and
		will also make your build/HMR magnitudes slower. Do not do this!
     */
    less: [
      '~/assets/less/vars/_colors.less',
      '~/assets/less/vars/_params.less',
      '~/assets/less/vars/_screen.less',
    ],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/style-resources-module#readme
    '@nuxtjs/style-resources',
    ['vue-screen/nuxt'],
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
