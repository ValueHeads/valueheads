<template>
  <div class="bg-white">
    <div class="px-4 pb-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
      <div v-else>
        <h2 class="mt-6 font-semibold text-lg mb-2">Niches</h2>
        <niche-cards :niches="filteredTopicsSorted.slice(0, limit)" />

        <intersect @enter="loadMoreResults">
          <div>
            <button type="button">Load more</button>
          </div>
        </intersect>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import { SearchIcon } from "@heroicons/vue/solid";

import categoriesMeta from "@/data/meta_categories.json";
import clusterData from "@/data/niche_clusters.json";
// var debounce = require("debounce");

// import VueChartkick from "vue-chartkick";
// import "chartkick/chart.js";

import Intersect from "vue-intersect";

const PER_PAGE = 10;

const fuseOptions = {
  // includeScore: true,
  keys: ["categories_scored.label", "keywords.kw"],
  threshold: 0.05,
  distance: 100,
  findAllMatches: true,
  // ignoreLocation: true,
  includeScore: true,
};

export default {
  components: { SearchIcon, Intersect },
  data() {
    return {
      fuseFilterStr: null,
      // fuseFilterStr: "nurs",

      // selectedL1: null,
      // selectedL2: null,

      // selectedL1: "Occasions & Gifts",
      // selectedL2: "Gifts",

      selectedL1: "Jobs & Education",
      selectedL2: "Jobs & Careers",

      fuse: null,
      results: [],
      limit: PER_PAGE,
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

        // kd (0-4 scale)
        var kd = Math.floor(((100 - kd_wavg) / 100) * 5);
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
        if (search_volume_sum > 5000) searchVol = 2;

        item["slope_perc"] = slopePerc;
        item["score"] = Math.round((kd + trend + searchVol) * 10) / 10; //+ relevance_score;

        item["is_best"] = false;
        if (kd_wavg < 60 && slopePerc > 3 && search_volume_sum > 500)
          item["is_best"] = true;

        return item;
      });

      // resScored = resScored.filter((v) => v.is_best === true);

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
    loadMoreResults() {
      console.log("visible");
      this.limit += PER_PAGE;
    },
    resetLimit() {
      this.limit = PER_PAGE;
    },
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
    selectedL1() {
      this.resetLimit();
    },
    selectedL2() {
      this.fuseFilterStr = null;
      this.resetLimit();
    },
    fuseFilterStr() {
      this.resetLimit();
    },
  },
};
</script>

<style lang="scss" scoped>
ul.category-grid {
  @apply bg-white p-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-3;
}
</style>
