// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  typescript: {
    typeCheck: true
  },
  build: {
    transpile: ['@headlessui/vue']
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "@nuxt/image",
    '@vee-validate/nuxt'
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  image: {
    dir: 'assets/img'
  },
  css: [
    // SCSS file in the project
    "~/assets/style/main.scss", // you should add main.scss somewhere in your app
  ],
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P',  //設定只有伺服器端可以使用的環境變數。
    public: {
      apiBase: '/api'
    }
  },
  appConfig: {  // 也可以建立app.config.ts，如有建立會以檔案內容為主。當伺服器端與客戶端需要使用的設置，可以被使用者調整變動的且需要具有響應性，就可以放置在 appConfig 之中。
    theme: {
      primaryColor: '#0ea4e9',
      darkMode: false
    }
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Murecho:wght@100..900&display=swap' }
      ]
    }
  }
})