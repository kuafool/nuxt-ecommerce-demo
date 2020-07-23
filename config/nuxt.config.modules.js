export default {
  modules: [
    '@nuxtjs/style-resources',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '~/modules/directives/module',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /**
   * Style resources configuration
   * See https://github.com/nuxt-community/style-resources-module#scss-example
   */
  styleResources: {
    scss: [
      // variables
      '~/assets/styles/_variables.scss',
      // mixins
      '~/assets/styles/_mixins.scss',
    ],
  },
}
