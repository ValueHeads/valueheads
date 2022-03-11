<template>
  <ul
    class="
      bg-white
      shadow
      overflow-hidden
      sm:rounded-md
      divide-y divide-gray-300
      border border-gray-300
    "
  >
    <li v-for="niche in niches" :key="niche.topic">
      <a href="#" class="block hover:bg-gray-50 sm:rounded-md leading-tight">
        <div class="px-4 py-4 flex items-center sm:px-6">
          <div
            class="
              min-w-0
              flex-1
              space-y-2
              sm:grid sm:grid-cols-12 sm:gap-x-6 sm:gap-y-1 sm:items-center
            "
          >
            <!-- <div class="sm:col-span-6">
              <span v-if="niche.is_best" class="badge badge-good"> Best </span>
            </div>
            <div class="sm:col-span-2">
              <span v-if="niche.kd_wavg <= 40" class="badge badge-good">
                Easy KD
              </span>
            </div>
            <div class="sm:col-span-2">
              <span
                v-if="niche.search_volume_sum < 500"
                class="badge badge badge-bad"
              >
                Low Monthly Searches
              </span>
            </div>
            <div class="sm:col-span-2 sm:text-right">
              <span v-if="niche.slope_perc > 3" class="badge badge badge-good">
                Trending Up
              </span>
            </div> -->

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

                  <p>
                    {{ niche.keywords.length }} profitable keywords analyzed
                  </p>

                  <!-- <ul class="mt-1">
                    <li
                      v-for="cat in niche.categories_scored.filter(
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
                          bg-indigo-100
                          text-indigo-700
                        "
                        @click="setCatsByL2(cat.label)"
                      >
                        {{ cat.label.split("/")[1] }}
                      </button>
                      &nbsp;
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>

            <!-- KD -->
            <div class="mt-4 sm:mt-0 sm:col-span-2">
              <span
                :class="{
                  'text-green-600 font-semibold': niche.kd_wavg <= 40,
                  'text-red-500': niche.kd_wavg >= 70,
                }"
                >{{ niche.kd_wavg }}</span
              ><span class="text-gray-500 text-xs"
                >/100 keyword difficulty</span
              >
            </div>

            <!-- Vol -->
            <div class="mt-4 sm:mt-0 sm:col-span-2">
              <span :class="{ 'text-red-600': niche.search_volume_sum < 500 }">
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
                class="text-red-600 inline-flex items-end"
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
    </li>
  </ul>
  <!-- <li class="card">
    <div
      class="card-header"
      :class="{ '!bg-yellow-200': niche.is_best }"
    >
      <h3>{{ niche.keywords[0]["kw"] }}</h3>

      <div class="flex justify-between">
        <p class="font-bold">{{ niche.search_volume_sum }} searches/m</p>
        <p>cpc {{ niche.cpc_wavg }}</p>
        <p>kd {{ niche.kd_wavg }}</p>
        <p>s {{ niche.score }}</p>
        <p>
          slope %
          {{
            Math.round(
              (niche.monthly_searches_slope /
                niche.monthly_searches_mean) *
                100,
              2
            )
          }}
        </p>
      </div>
    </div>

    <div class="card-body">
      

      <ul>
        <li
          v-for="kObj in niche.keywords"
          :key="kObj.kw"
          class="text-sm"
        >
          {{ kObj.kw }}.
        </li>
      </ul>
    </div>
  </li> -->
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
    niches: {
      type: Array,
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
// li.card {
//   @apply flex flex-col content-start overflow-hidden;
//   @apply bg-white rounded-lg shadow-lg border border-gray-100;

//   .card-header {
//     @apply bg-indigo-50 px-4 py-5 border-b border-gray-200 sm:px-6;

//     h3 {
//       @apply text-base leading-6 font-bold text-gray-900;
//     }
//     p {
//       @apply mt-1 text-xs text-gray-500;
//     }
//   }

//   .card-body {
//     @apply px-4 py-5 sm:px-6 max-h-40 overflow-y-auto;
//   }
// }

// button.btn-cat {
//   @apply py-6 px-4 block h-full w-full rounded-lg bg-gray-100 overflow-hidden;
//   @apply focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500;
// }
</style>
