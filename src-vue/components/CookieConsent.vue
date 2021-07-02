<template>
  <div v-if="show" class="cookie-consent" role="dialog">
    <div class="herbyCookieConsent herbyIn">
      <slot name="message">
        {{ message }}
      </slot>

      <slot name="button">
        <a class="herbyBtn" @click="dismiss">{{ buttonLabel }}</a>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  props: {
    message: {
      type: String,
      default:
        'We are using cookies on all our websites including this one because without cookies the entire Internet would go to shit.',
    },
    buttonLabel: {
      type: String,
      default: 'Fine',
    },
    href: {
      type: String,
      default: 'http://cookiesandyou.com',
    },
    target: {
      type: String,
      default: '_blank',
    },
    rel: {
      type: String,
      default: 'noopener',
    },
    cookieName: {
      type: String,
      default: 'cookieconsent_status',
    },
    cookiePath: {
      type: String,
      default: '/',
    },
    cookieDomain: {
      type: String,
      default: '',
    },
    cookieExpiryDays: {
      type: Number,
      default: 365,
    },
  },
  data() {
    return {
      show: undefined,
    }
  },
  computed: {
    cookie() {
      return !this.getCookie(this.cookieName)
    },
  },
  beforeMount() {
    this.show = this.cookie
  },
  methods: {
    dismiss() {
      this.show = false
      this.setCookie(
        this.cookieName,
        1,
        this.cookieExpiryDays,
        this.cookieDomain,
        this.cookiePath
      )
    },
    getCookie(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)

      return parts.length !== 2 ? undefined : parts.pop().split(';').shift()
    },
    setCookie(name, value, expiryDays, domain, path) {
      const exdate = new Date()
      exdate.setDate(exdate.getDate() + (expiryDays || 365))

      const cookie = [
        `${name}=${value}`,
        `expires=${exdate.toUTCString()}`,
        `path=${path || '/'}`,
      ]

      if (domain) {
        cookie.push(`domain=${domain}`)
      }

      document.cookie = cookie.join(';')
    },
  },
}
</script>
