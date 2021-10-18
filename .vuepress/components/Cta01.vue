<template>
  <div class="px-4 py-24 bg-yellow-500 md:py-32 lg:py-32 sm:px-6 lg:px-8">
    <div class="pb-16 mx-auto max-w-4xl text-center sm:pb-20">
      <h2 class="block text-4xl font-black text-olive-900 sm:text-5xl">
        We need your love!
      </h2>

      <p class="block mt-4 text-2xl text-yellow-900 sm:text-3xl">
        Get Week 1's draft and our full course plan, today.
      </p>

      <p class="mt-5 text-lg leading-6 text-olive-600 sm:text-xl">
        Do you want this? We are looking for validation from 100 supporters,
        before we invest the next 4,000 hours of work needed to bring you the
        FULL FREE OPEN course.
      </p>
    </div>

    <div class="mx-auto max-w-xl lg:max-w-6xl">
      <h2 class="sr-only">A better way to send money.</h2>
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        <div v-for="feature in features" :key="feature.name">
          <dt>
            <div
              class="flex justify-center items-center w-12 h-12 text-white bg-indigo-500 rounded-md"
            >
              <component
                :is="feature.icon"
                class="w-6 h-6"
                aria-hidden="true"
              />
            </div>
            <p class="mt-5 text-lg font-medium leading-6 text-gray-900">
              {{ feature.name }}
            </p>
          </dt>
          <dd class="mt-2 text-base text-yellow-800">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>

    <div class="mx-auto max-w-4xl text-center">
      <!-- <a
        href="#"
        class="inline-flex justify-center items-center px-6 py-4 mt-8 text-lg font-bold text-white bg-indigo-500 rounded-md border border-transparent lg:px-12 lg:py-5 hover:bg-indigo-800"
      >
        Be one of our first 100 supporters!
      </a> -->
      <form
        action="#"
        class="box-content mx-auto mt-12  sm:max-w-xl sm:w-full sm:grid sm:grid-cols-2 sm:gap-14"
      >
        <div class="min-w-0">
          <label for="hero-email" class="sr-only">Email address</label>
          <input
            id="hero-email"
            type="email"
            class="box-content block px-5 py-3 w-full text-base placeholder-gray-500 text-gray-900 rounded-md border border-gray-300 shadow-sm  focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            class="block px-5 py-3 w-full text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
          >
            Notify me
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/vue/outline";

const features = [
  {
    name: "Step 1: Take a screenshot",
    description:
      "Take a screenshot of the quote or section you liked the most. On this page.",
    icon: GlobeAltIcon,
  },
  {
    name: "Step 2: Post on social media",
    description:
      "Post anywhere on social media with the hashtag #valueheads and mention www.valueheads.org to show your support.",
    icon: ScaleIcon,
  },
  {
    name: "Step 3: Reply to my email",
    description:
      "Reply to my email with your post, and I'll send you Week 1's draft and the full course plan (packed with useful tips)",
    icon: LightningBoltIcon,
  },
];

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>