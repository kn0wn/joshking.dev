export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/all.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/composition-api'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    /**
     * @docs https://github.com/Developmint/nuxt-purgecss
     */
    'nuxt-purgecss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    /**
     * @docs https://github.com/nuxt-community/style-resources-module
     */
    '@nuxtjs/style-resources',
    /**
     * @docs https://github.com/nuxt-community/sitemap-module#readme
     * @note Must always be at the bottom of the modules array
     */
    '@nuxtjs/sitemap'
  ],
  /**
   * @docs https://github.com/nuxt-community/style-resources-module
   */
  styleResources: {
    scss: ['~assets/styling/variables/_all.scss']
  },
  sitemap: {
    hostname: 'joshking.dev',
    gzip: true
  },
  purgeCSS: {
    mode: 'postcss'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
