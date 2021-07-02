<template>
  <section id="contact" class="section gray-bg">
    <div class="container">
      <div class="row md-m-25px-b m-45px-b justify-content-center text-center">
        <div class="col-lg-8">
          <h3 class="h1 m-20px-b p-20px-b theme-after after-50px">
            Let's start working together
          </h3>
          <p class="m-0px font-2">
            Whether you have a question about services, technologies, studio, or
            anything else, we are ready to answer all your questions
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-8 col-xl-8 m-15px-tb">
          <div class="white-bg box-shadow p-30px">
            <div class="p-20px-b">
              <h5 class="m-0px">Contact Us</h5>
            </div>
            <b-form @submit="onSubmit" v-if="show">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-control-label">Name</label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      placeholder="Name"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-control-label">Email address</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      placeholder="Email"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-control-label">Message</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      type="text"
                      placeholder="Message"
                      class="form-control"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <recaptcha />
                  </div>
                </div>

                <div class="col-md-12 p-10px-t">
                  <button
                    class="m-btn m-btn-theme m-btn-radius"
                    type="submit"
                    name="send"
                  >
                    Send
                  </button>
                  <div class="snackbars" id="form-output-global"></div>
                </div>
              </div>
            </b-form>
          </div>
        </div>
        <div class="col-md-4 col-lg-4 col-xl-4 m-15px-tb">
          <div
            class="
              border-all-10 border-color-white
              p-40px-tb p-20px-lr
              theme-bg
              box-shadow
              h-100
            "
          >
            <h5 class="font-1 white-color m-10px-b">Our Address Info</h5>
            <p class="white-color-light m-30px-b">
              We are temporarily working online
            </p>
            <h5 class="font-1 white-color m-10px-b">Our Contact Info</h5>
            <p class="m-5px-b">
              <a
                class="white-color-light"
                href="mailto:contact@codematter.studio"
                >contact@codematter.studio</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        message: '',
      },
      show: true,
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()

      try {
        await this.$recaptcha.getResponse()
        await this.$recaptcha.reset()

        const chatId = -1001223983245
        const botId = '1393160245:AAE2XHT_apqu5xGlkZ3vWx-QZwgN1zCQBzE'

        this.$axios
          .$post(
            'https://api.telegram.org/bot' +
              botId +
              '/sendMessage?chat_id=' +
              chatId +
              '&parse_mode=html&text=' +
              encodeURI(
                JSON.stringify({
                  Name: this.form.name,
                  Email: this.form.email,
                  Message: this.form.message,
                })
              ),
            {}
          )
          .then(
            () => {
              this.reset()
              this.makeToast('The message has been sent')
            },
            () => {
              this.makeToast('Could not submit the form')
            }
          )
      } catch (error) {
        this.makeToast('reCaptcha error')
      }
    },

    reset() {
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.message = ''

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },

    makeToast(text) {
      this.toastCount++
      this.$bvToast.toast(text, {
        title: 'Info',
        autoHideDelay: 5000,
      })
    },
  },
}
</script>
