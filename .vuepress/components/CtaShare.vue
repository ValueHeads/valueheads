<template>
  <ul class="grid grid-cols-4 gap-4 lg:grid-cols-8">
    <li v-for="site in sites" :key="site.question">
      <a
        @click="$emit('done')"
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
        @click="$emit('done')"
        class="flex justify-center items-center w-12 h-12 text-white bg-indigo-500 rounded-md  noopener hover:bg-yellow-600"
        title="Check out ValueHeads.org, Follow-the-Value Entrepreneurship Course. Free!"
      >
        <share-icon size="1.5x"></share-icon>
      </base-share-link>
    </li>
  </ul>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseShareLink from "./BaseShareLink.vue";
import { ShareIcon } from "@zhuowenli/vue-feather-icons";

const sites = [
  {
    id: "reddit",
    link: "https://reddit.com/submit?url=[post-url]&title=[post-title]",
    icon: FontAwesomeIcon,
    faIcon: ["fab", "reddit-alien"],
  },
  {
    id: "twitter",
    link: "https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]",
    icon: FontAwesomeIcon,
    faIcon: ["fab", "twitter"],
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]",
    icon: FontAwesomeIcon,
    faIcon: ["fab", "linkedin"],
  },
  {
    id: "facebook",
    link: "https://www.facebook.com/sharer.php?u=[post-url]",
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
};
</script>