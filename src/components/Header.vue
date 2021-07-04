<template>
  <b-navbar toggleable="lg" variant="light" type="light" fixed="top ">
    <b-navbar-brand>
      <NuxtLink :to="localePath('/')">
        <img
          src="~/assets/img/logo-black.png"
          class="dark-logo"
          alt="Code Matter Studio"
          title=""
          height="48"
        /> </NuxtLink
    ></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#services">{{ $t('links.services') }}</b-nav-item>
        <b-nav-item href="#process">{{ $t('links.process') }}</b-nav-item>
        <b-nav-item href="#tech-stack">{{ $t('links.tech_stack') }}</b-nav-item>
        <b-nav-item href="#team">{{ $t('links.team') }}</b-nav-item>
        <b-nav-item href="#contact">{{ $t('links.contact_us') }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
