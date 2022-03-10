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
              sm:grid sm:grid-cols-12 sm:gap-6 sm:items-center
            "
          >
            <div class="truncate sm:col-span-6">
              <div class="flex">
                <h3 class="font-semibold text-gray-800 truncate">
                  {{ niche.keywords[0]["kw"] }}
                </h3>
              </div>
              <div class="mt-1 flex">
                <div class="flex items-center text-xs text-gray-500">
                  <!-- <HashtagIcon
                    class="flex-shrink-0 mr-1 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  /> -->
                  <p>
                    {{ niche.keywords.length }} profitable keywords analyzed
                  </p>
                </div>
              </div>
            </div>

            <!-- Volume -->
            <div class="mt-4 sm:mt-0 sm:col-span-2">
              <span>{{ niche.kd_wavg }}</span
              ><span class="text-gray-500 text-xs"
                >/100 keyword difficulty</span
              >
            </div>

            <!-- KD -->
            <div class="mt-4 sm:mt-0 sm:col-span-2">
              {{ new Intl.NumberFormat().format(niche.search_volume_sum) }}
              <span class="text-gray-500 text-xs">monthly searches</span>
              <span
                class="text-gray-500 text-xs hidden lg:inline whitespace-nowrap"
              >
                @ CPC ${{ niche.cpc_wavg }}
              </span>
            </div>

            <!-- Trend -->
            <div class="mt-4 sm:mt-0 text-right sm:col-span-2">
              trend %
              {{ Math.round(niche.slope_perc) }}
              <div>score {{ niche.score }}</div>
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
      <ul class="mb-2">
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
import { HashtagIcon, ChevronDownIcon } from "@heroicons/vue/solid";

export default {
  props: {
    niches: {
      type: Array,
    },
  },
  components: {
    HashtagIcon,
    ChevronDownIcon,
  },
};
</script>

<style lang="scss" scoped>
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
