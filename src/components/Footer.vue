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
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/policy">Privace &amp; Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact">Contact</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/articles">Articles</NuxtLink>
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
