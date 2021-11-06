<template>
  <footer class="bg-olive-900">
    <div
      class="overflow-hidden px-4 pt-12 pb-4 mx-auto max-w-3xl sm:px-6 lg:px-8"
    >
      <nav
        class="flex flex-wrap justify-center -mx-5 -my-2"
        aria-label="Footer"
      >
        <div v-for="item in navigation.main" :key="item.name" class="px-5 py-2">
          <a
            :href="item.href"
            v-scroll-to="item.href"
            class="text-base text-gray-300 hover:text-white"
          >
            {{ item.name }}
          </a>
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          :href="item.href"
          target="_blank"
          class="text-gray-200 hover:text-white noopener"
        >
          <span class="sr-only">{{ item.name }}</span>
          <FontAwesomeIcon
            :icon="item.faIcon"
            class="w-6 h-6"
            aria-hidden="true"
          />
        </a>
      </div>
      <p class="mt-8 text-sm text-center text-gray-100">
        ValueHeads.org Not-for-profit &mdash; Free and open-source for all ❤️
      </p>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const navigation = {
  main: [
    { name: "Get Superpowers", href: "#entrepreneurship-superpowers" },
    { name: "Support Us", href: "#cta" },
    { name: "Team", href: "#team" },
    {
      name: "Ultimate Entrepreneurship Course",
      href: "#entrepreneurship-course",
    },
    { name: "Value Entrepreneurship", href: "#value-entrepreneurship" },
    { name: "About ValueHeads", href: "#about" },
  ],
  social: [
    {
      name: "Reddit",
      href: "https://www.reddit.com/r/ValueHeads",
      faIcon: ["fab", "reddit-alien"],
    },
    {
      name: "Twitter",
      href: "https://twitter.com/valueheads",
      faIcon: ["fab", "twitter"],
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/valueheads/",
      faIcon: ["fab", "linkedin"],
    },
    // {
    //   name: "GitHub",
    //   href: "https://github.com/ValueHeads/",
    //   faIcon: ["fab", "github"],
    // },
    // {
    //   name: "Instagram",
    //   href: "https://www.instagram.com/value_heads/",
    //   faIcon: ["fab", "instagram"],
    // },
  ],
};

export default {
  setup() {
    return {
      navigation,
    };
  },
  components: { FontAwesomeIcon },
};
</script>