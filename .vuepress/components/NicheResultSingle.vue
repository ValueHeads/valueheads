<template>
  <li :class="{ 'mb-5': isOpen }">
    <niche-result-summary
      class="niche-result-summary"
      :niche="niche"
      @click.prevent="isOpen = !isOpen"
    />
    <niche-result-details
      class="niche-result-details"
      :niche="niche"
      :class="[isOpen ? 'show-details' : 'hide-details']"
    />
  </li>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    niche: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  .niche-result-summary {
    @apply border border-b-0 border-gray-300;
  }

  &:first-of-type {
    .niche-result-summary {
      @apply rounded-t-md border-b-0;
    }
  }
  &:last-of-type {
    .niche-result-summary {
      @apply rounded-b-md border-b;
    }
  }

  .niche-result-details {
    @apply relative transition-all overflow-hidden duration-700;

    &.hide-details {
      @apply max-h-0;
    }
    &.show-details {
      @apply rounded-b-md border border-gray-300 max-h-[2000px];
    }
  }
}
</style>
