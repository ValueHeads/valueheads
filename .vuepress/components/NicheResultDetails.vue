<template>
  <div>
    <div class="px-4 py-4 sm:px-6 sm:grid sm:grid-cols-3 sm:gap-5">
      <div class="sm:col-span-2">
        <ul class="mt-1">
          <li
            v-for="cat in niche.categories_scored.filter((c) => c.score > 0.15)"
            :key="cat.label"
            class="inline-block mb-2 text-[0.65rem]"
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
        </ul>

        <ul>
          <li v-for="kObj in niche.keywords" :key="kObj.kw" class="text-sm">
            {{ kObj.kw }}.
          </li>
        </ul>
      </div>

      <div class="">
        <h3></h3>
        <niche-trend-chart :niche="niche" class="max-h-36" />
      </div>
    </div>
  </div>
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
