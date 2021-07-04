<template>
  <section id="home" class="effect-section gray-bg">
    <div class="effect theme-bg effect-skew"></div>
    <vue-particles class="particles-box"> </vue-particles>

    <div class="container container-large">
      <div class="row full-screen align-items-center p-100px-tb">
        <div class="col-12 col-lg-5 col-xl-4 p-50px-tb">
          <h1 class="white-color h1 m-0">{{ $t('home_section.name') }}</h1>
          <p class="font-2 white-color-light m-50px-b">
            {{ $t('home_section.moto') }}
          </p>
          <p class="font-2 white-color-light">
            {{ $t('home_section.description') }}
          </p>
        </div>
        <div class="col-lg-7 col-xl-8">
          <img
            class="max-width-auto"
            src="~/assets/img/home-banner-1.svg"
            title=""
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
