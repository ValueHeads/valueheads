<template>
  <a href="#" class="block hover:bg-gray-50 leading-tight">
    <div class="px-4 py-4 flex items-center sm:px-6">
      <div
        class="
          min-w-0
          flex-1
          space-y-2
          sm:space-y-0
          sm:grid
          sm:grid-cols-12
          sm:gap-x-6
          sm:gap-y-1
          sm:items-center
        "
      >
        <div class="truncate sm:col-span-6 pb-2 sm:pb-0">
          <div class="flex">
            <h3 class="font-semibold text-gray-800 truncate">
              {{ niche.keywords[0]["kw"] }}
            </h3>
            <span
              v-if="niche.is_best"
              class="ml-2 badge badge-good inline-flex items-start"
            >
              Best
              <StarIcon class="h-3 w-3 ml-1" />
            </span>
          </div>
          <div class="mt-1 flex">
            <div class="flex flex-col items-start text-xs text-gray-500">
              <!-- <HashtagIcon
                    class="flex-shrink-0 mr-1 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  /> -->

              <p>{{ niche.keywords.length }} profitable keywords analyzed</p>
            </div>
          </div>
        </div>

        <!-- KD -->
        <div class="mt-4 sm:mt-0 sm:col-span-2">
          <span
            :class="{
              'text-green-500 font-semibold': niche.kd_wavg <= 50,
              'text-red-400': niche.kd_wavg >= 70,
            }"
            >{{ niche.kd_wavg }}</span
          ><span class="text-gray-500 text-xs"
            >/100 <br class="hidden sm:block" />keyword difficulty</span
          >
        </div>

        <!-- Vol -->
        <div class="mt-4 sm:mt-0 sm:col-span-2">
          <span :class="{ 'text-red-400': niche.search_volume_sum < 500 }">
            {{ new Intl.NumberFormat().format(niche.search_volume_sum) }}
          </span>

          <span class="text-gray-500 text-xs"> monthly searches</span>
          <span
            class="text-gray-500 text-xs hidden lg:inline whitespace-nowrap"
          >
            @ CPC ${{ niche.cpc_wavg }}
          </span>
        </div>

        <!-- Trend -->
        <div class="mt-4 sm:mt-0 sm:text-right sm:col-span-2">
          <span
            v-if="niche.slope_perc >= 3"
            class="text-green-500 inline-flex items-end font-semibold"
          >
            <span> {{ "+" + Math.round(niche.slope_perc) + "%" }} </span>
            <TrendingUpIcon class="ml-1 h-5 w-5" />
          </span>

          <span
            v-else-if="niche.slope_perc <= -3"
            class="text-red-400 inline-flex items-end"
          >
            <span> {{ Math.round(niche.slope_perc) + "%" }} </span>
            <TrendingDownIcon class="ml-1 h-5 w-5" />
          </span>

          <span v-else> Flat &mdash; </span>

          <span class="sm:block text-gray-500 text-xs"> search trend</span>
        </div>
      </div>
      <div class="ml-5 flex-shrink-0">
        <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
    </div>
  </a>
</template>

<script>
import {
  TrendingUpIcon,
  TrendingDownIcon,
  ChevronDownIcon,
  StarIcon,
} from "@heroicons/vue/solid";

export default {
  props: {
    niche: {
      type: Object,
    },
  },
  components: {
    TrendingUpIcon,
    TrendingDownIcon,
    ChevronDownIcon,
    StarIcon,
  },
};
</script>

<style lang="scss" scoped>
.badge {
  @apply inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold;

  &.badge-good {
    @apply bg-yellow-200 text-yellow-800;
  }
  &.badge-bad {
    @apply bg-red-100 text-red-800;
  }
}
</style>
