<template>
  <div>
    <form
      @submit.prevent="submitForm()"
      class="box-content mx-auto mt-5  text-olive-800 sm:max-w-xl sm:w-full sm:grid sm:grid-cols-2 sm:gap-4"
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

    <p class="mt-4 text-sm text-olive-500">
      You'll receive TWO emails. Email confirmation, then my email.
    </p>
  </div>
</template>

<script>
const qs = require("qs");
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
      axios({
        method: "post",
        url: "https://maillist-manage.com.au/weboptin.zc",
        data: qs.stringify({
          CONTACT_EMAIL: this.email,
          SIGNUP_SUBMIT_BUTTON: "Join+Now",
          submitType: "optinCustomView",
          emailReportId: "",
          formType: "QuickForm",
          zx: "11a152b97a",
          zcvers: "2.0",
          oldListIds: "",
          mode: "OptinCreateView",
          zcld: "1200abb933ac08a",
          zctd: "1200abb933abfa1",
          zc_trackCode: "ZCFORMVIEW",
          zc_formIx:
            "3zbb11adb398c087415785ed56ece36092ca7821bf28f8c199b783be7eb91f2410",
          scriptless: "yes",
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
        .then((response) => {
          if (response.data.includes("SUCCESS")) {
            this.$emit("done");
          } else {
            alert(
              "Oops, something went wrong! Please email me at amer@valueheads.org. "
            );
          }
        })
        .catch((error) => {
          alert(
            "Oops, something went wrong! Please email me at amer@valueheads.org. \n\n" +
              error
          );
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    },
  },
};
</script>