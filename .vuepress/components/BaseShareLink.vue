<template>
  <button @click="share()" v-if="canShare()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },

  methods: {
    // see https://web.dev/web-share/
    canShare() {
      console.log("navigator.share", navigator.share);
      return !!navigator.share;
    },
    share() {
      if (navigator.share) {
        navigator.share({
          title: this.title,
          text: `Check out StellarNurse's ${this.title}`,
          url: `https://valueheads.org/${this.$route.fullPath}`,
        });
      }
    },
  },
};
</script>
