<template>
  <div>
    <ul class="grid grid-cols-4 gap-4 lg:grid-cols-8">
      <li v-for="site in sites" :key="site.id">
        <a
          @click="clickedShare(site.id)"
          :href="site.link"
          target="_blank"
          class="flex justify-center items-center w-12 h-12 text-white bg-indigo-500 rounded-md  noopener hover:bg-yellow-600"
        >
          <component
            :is="site.icon"
            :icon="site.faIcon"
            class="w-6 h-6"
            aria-hidden="true"
          />
        </a>
      </li>
      <li>
        <base-share-link
          @click="clickedShare('native_share_button')"
          class="flex justify-center items-center w-12 h-12 text-white bg-indigo-500 rounded-md  noopener hover:bg-indigo-800"
          title="Check out ValueHeads.org, Follow-the-Value Entrepreneurship Course. Free!"
        >
          <share-icon size="1.5x"></share-icon>
        </base-share-link>
      </li>
    </ul>

    <button
      @click.prevent="clickedShare('skipped')"
      class="inline-block mt-5 text-base font-medium text-indigo-700  hover:underline hover:text-indigo-500"
    >
      I posted already! 😎
    </button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseShareLink from "./BaseShareLink.vue";
import { ShareIcon } from "@zhuowenli/vue-feather-icons";

const postURL = encodeURIComponent("https://valueheads.org/");
const postTitle = encodeURIComponent(
  "Let's open-source entrepreneurship! Check out ValueHeads.org"
);

const sites = [
  {
    id: "reddit",
    link: `https://reddit.com/submit?url=${postURL}&title=${postTitle}`,
    icon: FontAwesomeIcon,
    faIcon: ["fab", "reddit-alien"],
  },
  {
    id: "twitter",
    link: `https://twitter.com/share?url=${postURL}&text=${postTitle}&hashtags=entrepreneurship,course,awesomeness`,
    icon: FontAwesomeIcon,
    faIcon: ["fab", "twitter"],
  },
  {
    id: "linkedin",
    link: `https://www.linkedin.com/shareArticle?url=${postURL}&title=${postTitle}`,
    icon: FontAwesomeIcon,
    faIcon: ["fab", "linkedin"],
  },
  {
    id: "facebook",
    link: `https://www.facebook.com/sharer.php?u=${postURL}`,
    icon: FontAwesomeIcon,
    faIcon: ["fab", "facebook"],
  },
  {
    id: "instagram",
    link: "https://instagram.com/",
    icon: FontAwesomeIcon,
    faIcon: ["fab", "instagram"],
  },
  {
    id: "tiktok",
    link: "https://tiktok.com",
    icon: FontAwesomeIcon,
    faIcon: ["fab", "tiktok"],
  },
];

export default {
  setup() {
    return {
      sites,
      BaseShareLink,
    };
  },
  components: { ShareIcon },
  methods: {
    clickedShare(clickedId) {
      this.$emit("done");
      window.gtag("event", "prelaunch_cta_step3", { clickedId });
    },
  },
};
</script>