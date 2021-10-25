<template>
  <form
    @submit.prevent="submitForm()"
    class="box-content mx-auto mt-5  sm:max-w-xl sm:w-full sm:grid sm:grid-cols-2 sm:gap-4"
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
        :disabled="!isEmailValid"
        type="submit"
        class="block px-5 py-3 w-full text-base font-medium text-white bg-indigo-500 rounded-md border border-transparent shadow  hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
      >
        Join ValueHeads
      </button>
    </div>
  </form>
</template>

<script>
// Docs https://github.com/manishsaraan/email-validator
var validator = require("email-validator");

export default {
  data() {
    return {
      email: "not-ready@yet.com",
    };
  },
  computed: {
    isEmailValid() {
      return validator.validate(this.email);
    },
  },
  methods: {
    submitForm() {
      // this.input = e.target.value;
      this.$emit("done");
      alert(
        "Update 25 Oct: Sorry everybody. This is not ready yet. Please check again next Monday! "
      );
    },
  },
};
</script>