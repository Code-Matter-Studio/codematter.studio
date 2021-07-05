<template>
  <div class="full-screen">
    <section
      class="section bg-center bg-fixed effect-section"
      :style="{ backgroundImage: `url(${spacePatterImg})` }"
    >
      <div class="mask theme-bg opacity-9"></div>
      <div class="container">
        <div class="row justify-content-center p-50px-t">
          <div class="col-lg-8 text-center">
            <h2 class="white-color h1 m-20px-b">
              {{ $t('articles_page.title') }}
            </h2>
            <ol class="breadcrumb white justify-content-center">
              <li>
                <NuxtLink :to="localePath('/')">{{
                  $t('links.go_to_the_main_page')
                }}</NuxtLink>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <ul class="m-0">
                  <li v-for="article in articles" :key="article.slug">
                    <nuxt-link :to="localePath(article.path)">{{
                      article.title
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import spacePatterImg from 'assets/img/space-pattern.jpg'
export default {
  layout: 'non-header',

  data() {
    return {
      spacePatterImg: spacePatterImg,
    }
  },

  async asyncData({ $content }) {
    let query = $content('articles', { deep: true })

    const articles = await query.fetch()

    return {
      articles,
    }
  },
  watch: {},
  watchQuery: true,
}
</script>
