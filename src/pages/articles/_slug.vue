<template>
  <div>
    <section
      class="section bg-center bg-fixed effect-section"
      :style="{ backgroundImage: `url(${spacePatterImg})` }"
    >
      <div class="mask theme-bg opacity-9"></div>
      <div class="container">
        <div class="row justify-content-center p-50px-t">
          <div class="col-lg-8 text-center">
            <h2 class="white-color h1 m-20px-b">{{ article.title }}</h2>
            <ol class="breadcrumb white justify-content-center">
              <li>
                <NuxtLink :to="localePath('articles')">{{
                  $t('links.go_to_other_articles')
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
                <nuxt-content :document="article" />
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

  async asyncData({ $content, params, error }) {
    let article

    try {
      article = await $content('articles', params.slug).fetch()
    } catch (e) {
      return error({ message: 'Article not found' })
    }

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
  head() {
    return {
      title: this.article.title,
      description: this.article.description,
    }
  },
}
</script>
