<template>
  <b-navbar toggleable="lg" variant="light" type="light" fixed="top ">
    <b-navbar-brand>
      <NuxtLink to="/">
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
        <b-nav-item href="#services">Services</b-nav-item>
        <b-nav-item href="#process">Process</b-nav-item>
        <b-nav-item href="#tech-stack">Tech Stack</b-nav-item>
        <b-nav-item href="#team">Team</b-nav-item>
        <b-nav-item href="#contact">Contact Us</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
