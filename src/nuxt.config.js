export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Code Matter Studio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/style/master.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/particles.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/recaptcha',
    '@nuxtjs/yandex-metrika',
    'nuxt-lazy-load',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  recaptcha: {
    size: 'normal',
    hideBadge: false,
    version: 2,
    siteKey: '6LczrnEaAAAAABmMIdJU7cb9om1bqqyBYudLSBI1',
  },

  yandexMetrika: {
    id: '82368523',
    webvisor: false,
    clickmap: true,
    defer: true,
    trackLinks: true,
    accurateTrackBounce: true,
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'ru',
        name: 'Русский',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        onlyOnRoot: true,
      },
      fallbackLocale: 'en',
      messages: {
        en: {
          links: {
            articles: 'Articles',
            go_to_the_main_page: 'Go the main page',
            policy: 'Privacy & Policy',
            home: 'Home',
            contact: 'Contact',
            go_to_other_articles: 'Go to other articles',
            services: 'Services',
            process: 'Process',
            tech_stack: 'Teck Stack',
            team: 'Team',
            contact_us: 'Contact Us',
          },
          cookie_consent: {
            text: 'We are using cookies on all our websites including this one because without cookies the entire Internet would go to shit',
            button: 'Fine',
          },
          home_section: {
            name: 'Code Matter Studio',
            moto: 'More than software',
            description:
              'Like Dark matter, the software is everywhere. We cannot see it, but it significantly affects our everyday life',
          },
          contact_section: {
            title: "Let's start working together",
            description:
              'Like Dark matter, the software is everywhere. We cannot see it, but it significantly affects our everyday life',
            name_input: 'Name',
            email_input: 'Email address',
            message_input: 'Message',
            send_button: 'Send',
            address_info_title: 'Our Address Info',
            address_info_text: 'We are temporarily working online',
            contact_info_title: 'Our Contact Info',
            contact_info_text: 'contact@codematter.studio',
          },
        },
        ru: {
          links: {
            articles: 'Статьи',
            go_to_the_main_page: 'Вернуться на главную страницу',
            policy: 'Конфиденциальность',
            home: 'Главная',
            contact: 'Контакты',
            go_to_other_articles: 'Перейти ко всем статьям',
            services: 'Сервисы',
            process: 'Процесс',
            tech_stack: 'Технологии',
            team: 'Команда',
            contact_us: 'Свяжитесь с нами',
          },
          cookie_consent: {
            text: 'Мы используем куки на всех своих сайтах, включая этот, потому что без кук вообще весь интернет работал бы через жопу',
            button: 'Прекрасно',
          },
          home_section: {
            title: 'Студия Кодовой Материи',
            moto: 'Больше чем софт',
            description:
              'Как и Темная материя, программное обеспечение повсюду. Мы этого не видим, но это существенно влияет на нашу повседневную жизнь',
          },
          contact_section: {
            title: 'Начнем работать вместе',
            description:
              'Если у вас есть вопросы по услугам, технологиям, студии или чему-то еще, мы готовы ответить на все ваши вопросы',
            name_input: 'Имя',
            email_input: 'Почта',
            message_input: 'Сообщение',
            send_button: 'Отправить',
            address_info_title: 'Наш адрес',
            address_info_text: 'Мы временно работаем удаленно',
            contact_info_title: 'Наши контакты',
            contact_info_text: 'contact@codematter.studio',
          },
        },
      },
    },
  },
}
