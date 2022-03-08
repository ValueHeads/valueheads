<template>
  <li class="card">
    <!-- Card header -->
    <div
      class="card-header"
      :class="{ '!bg-yellow-200': nicheCluster.is_best }"
    >
      <h3>{{ nicheCluster.keywords[0]["kw"] }}</h3>

      <div class="flex justify-between">
        <p class="font-bold">{{ nicheCluster.search_volume_sum }} searches/m</p>
        <p>cpc {{ nicheCluster.cpc_wavg }}</p>
        <p>kd {{ nicheCluster.kd_wavg }}</p>
        <p>s {{ nicheCluster.score }}</p>
        <p>
          slope %
          {{
            Math.round(
              (nicheCluster.monthly_searches_slope /
                nicheCluster.monthly_searches_mean) *
                100,
              2
            )
          }}
        </p>
      </div>
    </div>

    <!-- Card body -->
    <div class="card-body">
      <ul class="mb-2">
        <li
          v-for="cat in nicheCluster.categories_scored.filter(
            (c) => c.score > 0.15
          )"
          :key="cat.label"
          class="inline-block mb-0 text-[0.65rem]"
        >
          <button
            type="button"
            class="
              inline-block
              px-1.5
              py-0.5
              rounded-md
              font-medium
              bg-yellow-100
              text-yellow-700
            "
            @click="setCatsByL2(cat.label)"
          >
            {{ cat.label.split("/")[1] }}
          </button>
          &nbsp;
        </li>
      </ul>

      <ul>
        <li
          v-for="kObj in nicheCluster.keywords"
          :key="kObj.kw"
          class="text-sm"
        >
          {{ kObj.kw }}.
          <!-- (vol {{ kObj.vol }}) -->
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    nicheCluster: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
li.card {
  @apply flex flex-col content-start overflow-hidden;
  @apply bg-white rounded-lg shadow-lg border border-gray-100;

  .card-header {
    @apply bg-indigo-50 px-4 py-5 border-b border-gray-200 sm:px-6;

    h3 {
      @apply text-base leading-6 font-bold text-gray-900;
    }
    p {
      @apply mt-1 text-xs text-gray-500;
    }
  }

  .card-body {
    @apply px-4 py-5 sm:px-6 max-h-40 overflow-y-auto;
  }
}
</style>
