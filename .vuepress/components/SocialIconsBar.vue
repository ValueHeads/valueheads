<template>
  <div class="inline-block">
    <ul role="list" class="flex">
      <li
        v-for="site in sites"
        :key="site.name"
        v-show="person[site.name + 'Url']"
        class="mr-2 last:mr-0"
      >
        <a
          :href="person[site.name + 'Url']"
          class="inline-block text-white opacity-50 hover:opacity-70"
          target="_blank"
          rel="noopener"
        >
          <span class="sr-only">{{ person.name }} on {{ site.name }}</span>
          <FontAwesomeIcon :icon="site.faIcon" class="w-5 h-5" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const sites = [
  { name: "linkedin", faIcon: ["fab", "linkedin"] },
  { name: "twitter", faIcon: ["fab", "twitter"] },
  { name: "website", faIcon: ["fas", "globe"] },
  { name: "reddit", faIcon: ["fab", "reddit-alien"] },
  { name: "instagram", faIcon: ["fab", "instagram"] },
  { name: "github", faIcon: ["fab", "github"] },
];

export default {
  setup() {
    return { sites };
  },
  props: ["person"],
  components: { FontAwesomeIcon },
};
</script>