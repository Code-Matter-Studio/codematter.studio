(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{355:function(t,e,o){"use strict";o.r(e);var n=o(29),c=(o(69),o(35),{data:function(){return{form:{email:"",name:"",message:""},show:!0}},methods:{onSubmit:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.preventDefault(),o.prev=1,o.next=4,e.$recaptcha.getResponse();case 4:return o.next=6,e.$recaptcha.reset();case 6:-0xe91d99908d,"1393160245:AAE2XHT_apqu5xGlkZ3vWx-QZwgN1zCQBzE",e.$axios.$post("https://api.telegram.org/bot1393160245:AAE2XHT_apqu5xGlkZ3vWx-QZwgN1zCQBzE/sendMessage?chat_id=-1001223983245&parse_mode=html&text="+encodeURI(JSON.stringify({Name:e.form.name,Email:e.form.email,Message:e.form.message})),{}).then((function(){e.reset(),e.makeToast("The message has been sent")}),(function(){e.makeToast("Could not submit the form")})),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(1),e.makeToast("reCaptcha error");case 14:case"end":return o.stop()}}),o,null,[[1,11]])})))()},reset:function(){var t=this;this.form.email="",this.form.name="",this.form.message="",this.show=!1,this.$nextTick((function(){t.show=!0}))},makeToast:function(text){this.toastCount++,this.$bvToast.toast(text,{title:"Info",autoHideDelay:5e3})}}}),r=o(50),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"section gray-bg",attrs:{id:"contact"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row md-m-25px-b m-45px-b justify-content-center text-center"},[o("div",{staticClass:"col-lg-8"},[o("h3",{staticClass:"h1 m-20px-b p-20px-b theme-after after-50px"},[t._v("\n          "+t._s(t.$t("contact_section.title"))+"\n        ")]),t._v(" "),o("p",{staticClass:"m-0px font-2"},[t._v("\n          "+t._s(t.$t("contact_section.description"))+"\n        ")])])]),t._v(" "),o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-md-8 col-lg-8 col-xl-8 m-15px-tb"},[o("div",{staticClass:"white-bg box-shadow p-30px"},[t.show?o("b-form",{on:{submit:t.onSubmit}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"form-control-label"},[t._v(t._s(t.$t("contact_section.name_input")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",placeholder:t.$t("contact_section.name_input"),required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"form-control-label"},[t._v(t._s(t.$t("contact_section.email_input")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",placeholder:t.$t("contact_section.email_input"),required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"form-control-label"},[t._v(t._s(t.$t("contact_section.message_input")))]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",type:"text",placeholder:t.$t("contact_section.message_input"),rows:"3",required:""},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"form-group"},[o("recaptcha")],1)]),t._v(" "),o("div",{staticClass:"col-md-12 p-10px-t"},[o("button",{staticClass:"m-btn m-btn-theme m-btn-radius",attrs:{type:"submit",name:"send"}},[t._v("\n                  "+t._s(t.$t("contact_section.send_button"))+"\n                ")]),t._v(" "),o("div",{staticClass:"snackbars",attrs:{id:"form-output-global"}})])])]):t._e()],1)]),t._v(" "),o("div",{staticClass:"col-md-4 col-lg-4 col-xl-4 m-15px-tb"},[o("div",{staticClass:"\n            border-all-10 border-color-white\n            p-40px-tb p-20px-lr\n            theme-bg\n            box-shadow\n            h-100\n          "},[o("h5",{staticClass:"font-1 white-color m-10px-b"},[t._v("\n            "+t._s(t.$t("contact_section.address_info_title"))+"\n          ")]),t._v(" "),o("p",{staticClass:"white-color-light m-30px-b"},[t._v("\n            "+t._s(t.$t("contact_section.address_info_text"))+"\n          ")]),t._v(" "),o("h5",{staticClass:"font-1 white-color m-10px-b"},[t._v("\n            "+t._s(t.$t("contact_section.contact_info_title"))+"\n          ")]),t._v(" "),o("p",{staticClass:"m-5px-b"},[o("a",{staticClass:"white-color-light",attrs:{href:"mailto:contact@codematter.studio"}},[t._v(t._s(t.$t("contact_section.contact_info_text")))])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);