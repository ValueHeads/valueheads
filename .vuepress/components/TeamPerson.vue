<template>
  <li>
    <div class="space-y-6 xl:space-y-8">
      <img
        class="mx-auto w-40 h-40 rounded-full lazyload xl:w-56 xl:h-56"
        :data-src="person.imageUrl"
        :alt="person.name + '. ' + person.role"
        width="400"
        height="400"
      />
      <div class="space-y-2">
        <div class="space-y-1 text-lg font-medium leading-6">
          <h3 class="text-white">{{ person.name }}</h3>
          <p class="font-bold leading-tight text-yellow-500">
            {{ person.role }}
          </p>
        </div>

        <ul role="list" class="flex justify-center space-x-5">
          <li
            v-for="site in sites"
            :key="site.name"
            v-show="person[site.name + 'Url']"
          >
            <a
              :href="person[site.name + 'Url']"
              class="text-gray-400 hover:text-gray-300"
              target="_blank"
              rel="noopener nofollow"
            >
              <span class="sr-only">{{ site.name }}</span>
              <FontAwesomeIcon :icon="site.faIcon" class="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>

      <div v-if="person.desc" class="text-gray-300">
        {{ person.desc }}
      </div>

      <div v-if="person.quote" class="text-gray-300">
        <span class="text-2xl leading-none text-indigo-300">&ldquo;</span>
        {{ person.quote }}
        <span class="text-2xl leading-none text-indigo-300">&rdquo;</span>
      </div>
    </div>
  </li>
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