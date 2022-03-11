<template>
  <ul class="bg-white">
    <niche-result-single
      v-for="niche in niches"
      :key="niche.topic"
      :niche="niche"
    />
  </ul>
</template>

<script>
export default {
  props: {
    niches: {
      type: Array,
    },
  },
};
</script>
