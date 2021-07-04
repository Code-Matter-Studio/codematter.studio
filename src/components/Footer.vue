<template>
  <footer class="dark-bg footer">
    <div class="footer-bottom footer-border-light">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center text-md-right">
            <ul
              class="
                nav
                justify-content-center justify-content-md-start
                m-5px-tb
                links-white
                font-small
                footer-link-1
              "
            >
              <li>
                <a
                  href=""
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  @click.prevent.stop="$i18n.setLocale(locale.code)"
                  >{{ locale.name }}</a
                >
              </li>
              <li>
                <NuxtLink :to="localePath('/')">
                  {{ $t('links.home') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('policy')">
                  {{ $t('links.policy') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('contact')">
                  {{ $t('links.contact') }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink :to="localePath('articles')">
                  {{ $t('links.articles') }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-md-6 text-center text-md-right">
            <p class="m-0px font-small white-color-light">
              © {{ new Date().getFullYear() }} Code Matter Studio
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
