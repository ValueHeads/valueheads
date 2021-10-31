<template>
  <div>
    <form
      @submit.prevent="submitForm()"
      class="box-content mx-auto  text-olive-800 sm:max-w-xl sm:w-full sm:grid sm:grid-cols-2 sm:gap-4"
    >
      <div class="min-w-0">
        <label for="hero-email" class="sr-only">Email address</label>
        <input
          id="hero-email"
          type="email"
          v-model="email"
          class="block px-5 py-3 w-full text-base"
          placeholder="Enter your email"
        />
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-3">
        <button
          :disabled="!isEmailValid || isSubmitting"
          type="submit"
          class="block px-5 py-3 w-full text-base font-medium text-white bg-indigo-500 rounded-md border border-transparent shadow  hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
        >
          Join ValueHeads
        </button>
      </div>
    </form>

    <!-- <p class="mt-4 text-sm text-olive-500">
      You'll receive TWO emails. Email confirmation, then my email.
    </p> -->
  </div>
</template>

<script>
const axios = require("axios");

// Docs https://github.com/manishsaraan/email-validator
var validator = require("email-validator");

export default {
  data() {
    return {
      email: "",
      isSubmitting: false,
    };
  },
  computed: {
    isEmailValid() {
      return validator.validate(this.email);
    },
  },
  methods: {
    submitForm() {
      this.isSubmitting = true;
      axios
        .post("/.netlify/functions/contact-add", {
          email: this.email,
        })
        .then((response) => {
          if (response.data.success === true) {
            this.$emit("done");

            window.gtag("event", "prelaunch_cta_step1_success", {
              email: this.email,
            });
          } else {
            alert(
              "Oops, something went wrong! Please email me at amer@valueheads.org. " +
                response.data.msg
            );

            window.gtag("event", "prelaunch_cta_step1_error", {
              email: this.email,
              msg: response.data.msg,
            });
          }
        })
        .catch((error) => {
          alert(
            "Oops, something went wrong! Please email me at amer@valueheads.org. \n\n" +
              error
          );
          window.gtag("event", "prelaunch_cta_step1_error", {
            email: this.email,
            msg: error,
          });
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    },
  },
};
</script>