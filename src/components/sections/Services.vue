<template>
  <section id="services" class="section gray-bg">
    <div class="container">
      <div class="row md-m-25px-b m-45px-b justify-content-center text-center">
        <div class="col-lg-8">
          <h3 class="h1 m-20px-b p-20px-b theme-after after-50px">
            Build anything you want
          </h3>
          <p class="m-0px font-2">Solutions to cover all your business needs</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 m-15px-tb">
          <div
            class="
              box-shadow
              hover-top
              white-bg
              border-radius-5
              theme-hover-bg
              p-20px-lr p-40px-tb
              text-center
              height100
            "
          >
            <div
              class="
                icon-80
                gray-bg
                dots-icon
                border-radius-50
                theme-color
                d-inline-block
                m-20px-b
              "
            >
              <b-icon-cloud></b-icon-cloud>
              <span class="dots"
                ><i class="dot dot1"></i><i class="dot dot2"></i
                ><i class="dot dot3"></i
              ></span>
            </div>
            <h6>Web Apps</h6>
            <p class="m-0px">
              Automate your business processes by creating responsive web
              application easily accessible from all over the world
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 m-15px-tb">
          <div
            class="
              box-shadow
              hover-top
              white-bg
              border-radius-5
              theme-hover-bg
              p-20px-lr p-40px-tb
              text-center
              height100
            "
          >
            <div
              class="
                icon-80
                gray-bg
                dots-icon
                border-radius-50
                theme-color
                d-inline-block
                m-20px-b
              "
            >
              <b-icon-laptop></b-icon-laptop>
              <span class="dots"
                ><i class="dot dot1"></i><i class="dot dot2"></i
                ><i class="dot dot3"></i
              ></span>
            </div>
            <h6>Desktop Apps</h6>
            <p class="m-0px">
              Build a fast and solid desktop application to work with data in an
              intranet
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 m-15px-tb">
          <div
            class="
              box-shadow
              hover-top
              white-bg
              border-radius-5
              theme-hover-bg
              p-20px-lr p-40px-tb
              text-center
              height100
            "
          >
            <div
              class="
                icon-80
                gray-bg
                dots-icon
                border-radius-50
                theme-color
                d-inline-block
                m-20px-b
              "
            >
              <b-icon-tools></b-icon-tools>
              <span class="dots"
                ><i class="dot dot1"></i><i class="dot dot2"></i
                ><i class="dot dot3"></i
              ></span>
            </div>
            <h6>Custom Tools</h6>
            <p class="m-0px">
              Create a custom application to fit all your business needs and
              consolidate external application through integration
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 m-15px-tb">
          <div
            class="
              box-shadow
              hover-top
              white-bg
              border-radius-5
              theme-hover-bg
              p-20px-lr p-40px-tb
              text-center
              height100
            "
          >
            <div
              class="
                icon-80
                gray-bg
                dots-icon
                border-radius-50
                theme-color
                d-inline-block
                m-20px-b
              "
            >
              <b-icon-chat-left-text></b-icon-chat-left-text>
              <span class="dots"
                ><i class="dot dot1"></i><i class="dot dot2"></i
                ><i class="dot dot3"></i
              ></span>
            </div>
            <h6>Bots</h6>
            <p class="m-0px">
              Optimize experience for your customer by launching chatbot to
              answer the most popular and common questions
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  BIconCloud,
  BIconLaptop,
  BIconTools,
  BIconChatLeftText,
} from 'bootstrap-vue'

export default {
  components: {
    BIconCloud,
    BIconLaptop,
    BIconTools,
    BIconChatLeftText,
  },
}
</script>
