<template>
  <section class="effect-section" :style="{ backgroundImage: `url(${bgImg})` }">
    <div class="container container-large">
      <div class="row full-screen align-items-center justify-content-between">
        <div class="col-lg-6 m-50px-tb">
          <h1 class="white-color display-4 m-20px-b">Kia Ora New Zealand!</h1>
          <p class="font-2 white-color-light">
            We are a software development studio from Saint Petersburg looking
            for productive relationships with you.
          </p>
          <div class="btn-bar p-25px-t">
            <NuxtLink to="/contact" class="m-btn m-btn-white m-btn-radius"
              >Start Now!</NuxtLink
            >
          </div>
        </div>
        <div class="col-lg-6">
          <img
            class="max-width-auto"
            src="~/assets/img/home-9-b1.svg"
            title=""
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bgImg from 'assets/img/home-9-b-bg.png'

export default {
  layout: 'non-header',

  data() {
    return {
      bgImg: bgImg,
    }
  },
}
</script>
