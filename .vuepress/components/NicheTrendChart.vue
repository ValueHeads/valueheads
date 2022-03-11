<template>
  <line-chart :data="chartData"></line-chart>
</template>

<script>
export default {
  props: {
    niche: {
      type: Object,
    },
  },
  computed: {
    chartData() {
      const monthlyDataOut = {};
      const monthlyData = this.niche.monthly_searches_summed;
      console.log(monthlyData);

      // flatten for use in chart
      for (const [key, val] of Object.entries(monthlyData))
        monthlyDataOut[key] = val.vol_sum;

      return monthlyDataOut;
    },
  },
};
</script>
