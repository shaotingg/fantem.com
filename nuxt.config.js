module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Simple Smart Home',
    titleTemplate: 'Fantem | %s',
    link: [
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/bulma/css/bulma.min.css' }
    ],
    script: [
      { src: '//pv.sohu.com/cityjson' },
      { src: '/geoip2.js' }
    ]
  },
  modules: [
    '@nuxtjs/icon',
    '@nuxtjs/meta',
    '@nuxtjs/manifest'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    '~/assets/styles/style.styl'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
