import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  head: {
    titleTemplate: '%s - crmvuetify',
    title: 'crmvuetify',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  css: [],

 
  plugins: [    
    '@/plugins/axios',
    '@/plugins/directives',
    '@/plugins/globals',
    '@/plugins/lodash.js',
    { src: '@/plugins/notifications-ssr', ssr: true },
    { src: '@/plugins/notifications-client', ssr: false }
  ],

  serverMiddleware: [
    '~/api/index.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.NODE_ENV ? process.env.BASEURL : 'http://localhost:3000'
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  loading: '~/components/AppLoader.vue',
  build: {}
}
