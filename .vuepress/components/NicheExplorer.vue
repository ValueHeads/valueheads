<template>
  <div class="bg-indigo-500 pt-20">
    <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <NicheExplorerBreadcrumbs
        :selected-l1="selectedL1"
        :selected-l2="selectedL2"
        @clear:cat="clearCat($event.level)"
      />

      <div
        class="
          px-6
          pt-4
          flex
          items-center
          justify-center
          lg:justify-end
          bg-white
          w-full
        "
      >
        <div class="max-w-lg w-full lg:max-w-xs">
          <label for="search" class="sr-only">Filter results</label>
          <div class="relative">
            <div
              class="
                absolute
                inset-y-0
                left-0
                pl-3
                flex
                items-center
                pointer-events-none
              "
            >
              <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="search"
              name="search"
              class="
                block
                w-full
                pl-10
                pr-3
                py-2
                border border-gray-300
                rounded-md
                leading-5
                bg-white
                placeholder-gray-500
                focus:outline-none
                focus:placeholder-gray-400
                focus:ring-1
                focus:ring-indigo-500
                focus:border-indigo-500
                sm:text-sm
              "
              placeholder="Filter results below"
              type="search"
              v-model="fuseFilterStr"
            />
          </div>
        </div>
      </div>

      <!-- Level 1 Categories -->
      <ul v-if="!hasResults && !selectedL1" role="list" class="category-grid">
        <li v-for="catL1 in catsL1Filtered" :key="catL1">
          <button type="button" @click="selectedL1 = catL1" class="btn-cat">
            <span>{{ catL1 }}</span>
            <small>&nbsp;({{ getL1Count(catL1) }})</small>
          </button>
        </li>
      </ul>

      <!-- Level 2 Categories -->
      <ul
        v-else-if="!hasResults && !selectedL2"
        role="list"
        class="category-grid"
      >
        <li v-for="catL2 in catsL2Filtered" :key="catL2">
          <button type="button" @click="selectedL2 = catL2" class="btn-cat">
            <span>{{ catL2 }}</span>
            <small>&nbsp;({{ categoriesMeta[selectedL1][catL2].count }})</small>
          </button>
        </li>
      </ul>

      <!-- Cluster level with summary -->
      <div v-else class="bg-white">
        <ul class="category-grid">
          <li
            v-for="cluster in filteredTopicsSorted"
            :key="cluster.topic"
            class="card"
          >
            <!-- Card header -->
            <div class="card-header">
              <h3>{{ cluster.keywords[0]["kw"] }}</h3>

              <div class="flex justify-between">
                <p class="font-bold">
                  {{ cluster.search_volume_sum }} searches/m
                </p>
                <p>cpc {{ cluster.cpc_wavg }}</p>
                <p>kd {{ cluster.kd_wavg }}</p>
                <p>s {{ cluster.score }}</p>
                <p>
                  slope %
                  {{
                    Math.round(
                      (cluster.monthly_searches_slope /
                        cluster.monthly_searches_mean) *
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
                  v-for="cat in cluster.categories_scored.filter(
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
                  v-for="kObj in cluster.keywords"
                  :key="kObj.kw"
                  class="text-sm"
                >
                  {{ kObj.kw }}.
                  <!-- (vol {{ kObj.vol }}) -->
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import { SearchIcon } from "@heroicons/vue/solid";

import categoriesMeta from "../data/meta_categories.json";
import clusterData from "../data/niche_clusters.json";
// var debounce = require("debounce");

import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

const fuseOptions = {
  // includeScore: true,
  keys: ["categories_scored.label", "keywords.kw"],
  threshold: 0.05,
  // distance: 50,
  findAllMatches: true,
  ignoreLocation: true,
  includeScore: true,
};

export default {
  components: { SearchIcon, VueChartkick },
  data() {
    return {
      fuseFilterStr: "nurs",

      selectedL1: null,
      selectedL2: null,

      // selectedL1: "Occasions & Gifts",
      // selectedL2: "Gifts",

      // selectedL1: "Business & Industrial",
      // selectedL2: "Business Management",

      fuse: null,
      results: [],
      categoriesMeta,
    };
  },

  beforeMount() {
    if ((this.selectedL1 && this.selectedL2) || this.fuseFilterStr)
      this.initFuse();
  },

  mounted() {
    console.log(categoriesMeta);
  },

  computed: {
    catsL1Filtered() {
      return Object.keys(categoriesMeta);
    },
    catsL2Filtered() {
      if (!this.selectedL1) return [];
      return Object.keys(categoriesMeta[this.selectedL1]);
    },
    hasResults() {
      return this.filteredTopics.length > 0;
    },
    filteredTopicsSorted() {
      // calculate score
      var resScored = this.filteredTopics.map((r) => {
        const item = r.item;
        const {
          kd_wavg,
          monthly_searches_mean,
          monthly_searches_slope,
          cpc_wavg,
          search_volume_sum,
        } = item;

        const slopePerc =
          (monthly_searches_slope / monthly_searches_mean) * 100;
        // const search_value = cpc_wavg * search_volume_sum;

        // start with fuse's score (0-4 scale)
        const relevance_score = Math.floor(r.score * 5);
        // 0 if >= 80, 1 if >= 50, 2 if >= 50, and 5 if less than 30
        // var kd = kd_wavg >= 80 ? 0 : kd_wavg >= 60 ? 1 : kd_wavg >= 30 ? 2 : 3;

        // kd (0-4 scale)
        var kd = Math.floor((kd_wavg / 100) * 5);
        // 0 if between -3 and 3%, -1 if negative or 1 if positive
        var trend = 0;
        if (slopePerc < -7) trend = 0;
        if (slopePerc < -3) trend = 1;
        if (Math.abs(slopePerc) <= 3) trend = 2;
        if (slopePerc > 3) trend = 3;
        if (slopePerc > 7) trend = 4;

        var searchVol = 0;
        if (search_volume_sum < 500) searchVol = 0;
        if (search_volume_sum > 500) searchVol = 1;
        if (search_volume_sum > 1000) searchVol = 2;
        if (search_volume_sum > 2500) searchVol = 3;
        if (search_volume_sum > 5000) searchVol = 4;

        item["score"] = kd + trend + Math.ceil(searchVol / 2) + relevance_score;
        return item;
      });

      // sort desc by score
      resScored = resScored.sort((a, b) => b.score - a.score);

      console.log(resScored);

      return resScored;
    },

    filteredTopics() {
      const filter = { $and: [] };

      if (this.selectedL1) {
        var matchCats = [];
        // if l2 is selected, use it's 'categories_full' array for filtering
        if (this.selectedL2)
          matchCats =
            categoriesMeta[this.selectedL1][this.selectedL2].categories_full;
        // else if l2 is not selected, and fuseFilterStr is set, use l1 for filtering
        else if (this.fuseFilterStr) matchCats = [this.selectedL1];

        if (matchCats.length > 0 || !this.fuse) {
          const catFilter = { $or: [] };
          matchCats.forEach((c) => {
            catFilter.$or.push({ "categories_scored.label": c });
          });
          filter.$and.push(catFilter);
        }
      }

      if (this.fuseFilterStr)
        filter.$and.push({ "keywords.kw": this.fuseFilterStr });

      const result = filter.$and.length > 0 ? this.fuse.search(filter) : [];

      // console.log(filter, result);
      return result;
    },
  },

  methods: {
    clearCat(level) {
      if (level == "all") this.selectedL1 = null;
      if (level == 1 || level == "all") this.selectedL2 = null;
      this.fuseFilterStr = null;
    },
    getL1Count(l1Cat) {
      var l1Count = 0;
      for (const [l2Key, subCat] of Object.entries(categoriesMeta[l1Cat]))
        l1Count += subCat.count;

      return l1Count;
    },

    // Docs https://fusejs.io/examples.html
    initFuse() {
      this.fuse = new Fuse(clusterData, fuseOptions);

      console.log("Fuse init", clusterData.length);
    },

    setCatsByL2(catFullName) {
      this.selectedL1 = catFullName.split("/")[0];
      this.selectedL2 = catFullName.split("/")[1];
    },
  },

  watch: {
    selectedL2() {
      this.fuseFilterStr = null;
    },
  },
};
</script>

<style lang="scss" scoped>
ul.category-grid {
  @apply bg-white p-6;
  @apply grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-3;

  button.btn-cat {
    @apply py-6 px-4 block h-full w-full rounded-lg bg-gray-100 overflow-hidden;
    @apply focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500;
  }

  li.card {
    @apply flex flex-col content-start;
    @apply bg-white rounded-lg shadow-lg border border-gray-100;

    .card-header {
      @apply bg-indigo-50 px-4 py-5 border-b border-gray-200 sm:px-6;

      h3 {
        @apply text-lg leading-6 font-medium text-gray-900;
      }
      p {
        @apply mt-1 text-xs text-gray-500;
      }
    }

    .card-body {
      @apply px-4 py-5 sm:px-6 max-h-52 overflow-y-auto;
    }
  }
}
</style>
