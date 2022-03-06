<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="bg-white border-b border-indigo-400 flex" aria-label="Breadcrumb">
    <ol
      role="list"
      class="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8"
    >
      <li class="flex">
        <div class="flex items-center min-h-[2.8em]">
          <button
            type="button"
            @click="$emit('clear:cat', { level: 'all' })"
            class="text-indigo-300 hover:text-indigo-500"
          >
            <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
            <span class="sr-only">Niche Explorer Home</span>
          </button>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name" class="flex">
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-6 h-full text-indigo-300"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <button
            type="button"
            @click="$emit('clear:cat', { level: page.level })"
            class="
              ml-4
              text-sm
              font-medium
              text-indigo-300
              hover:text-indigo-500
            "
            :aria-current="page.current ? 'page' : undefined"
          >
            {{ page.name }}
          </button>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
import { HomeIcon } from "@heroicons/vue/solid";

export default {
  props: {
    selectedL1: {
      type: String,
    },
    selectedL2: {
      type: String,
    },
  },
  components: {
    HomeIcon,
  },
  computed: {
    pages() {
      var pages = [];

      if (this.selectedL1)
        pages.push({
          name: this.selectedL1,
          level: 1,
          current: !this.selectedL2,
        });

      if (this.selectedL1 && this.selectedL2)
        pages.push({ name: this.selectedL2, level: 2, current: true });

      return pages;
    },
  },
};
</script>
