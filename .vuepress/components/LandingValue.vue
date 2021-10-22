<template>
  <div class="overflow-hidden text-[#482B91] bg-indigo-500 pattern-grid-xl">
    <div
      class="relative px-4 py-12 mx-auto max-w-7xl  lg:pt-16 lg:pb-24 sm:px-6 lg:px-8"
    >
      <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
      <img
        class="absolute right-0 left-0 -bottom-52 mx-auto max-w-md opacity-60  lg:mx-0 lg:bottom-0 lg:right-auto lg:left-10 lg:w-3/12"
        src="/images/lucid-illustration-love.svg"
        width="729"
        height="854"
        alt="Lucid Illustration of Value and Love"
      />

      <div
        class="
          relative
          p-8
          bg-[#5634AD] bg-opacity-50
          rounded-xl
          lg:p-16
          lg:grid lg:grid-cols-5
          lg:gap-x-8
        "
      >
        <div class="lg:col-span-2">
          <h2
            class="pr-10 text-4xl font-extrabold tracking-tight text-white  sm:text-5xl"
          >
            What makes a great&mldr;
          </h2>
        </div>
        <dl
          class="mt-10 space-y-10  sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-3"
        >
          <div
            v-for="valueStrategy in valueStrategies"
            :key="valueStrategy.question"
            class="flex flex-row"
          >
            <div>
              <div
                class="flex justify-center items-center w-12 h-12 text-gray-200 bg-indigo-300 rounded-md"
              >
                <component
                  :is="valueStrategy.icon"
                  :icon="valueStrategy.faIcon"
                  class="w-6 h-6"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div class="ml-5">
              <dt
                class="text-xl font-bold leading-6 text-gray-100"
                v-html="valueStrategy.question"
              ></dt>
              <dd
                class="mt-1 text-base text-white"
                v-html="valueStrategy.description"
              ></dd>
            </div>
          </div>
        </dl>
      </div>

      <div
        class="py-52  lg:mt-10 lg:pb-0 lg:pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
      >
        <div
          class="text-xl font-medium text-center text-indigo-50  lg:text-left lg:col-start-6 lg:col-end-13"
        >
          <h3 class="inline-block border-b-2 border-yellow-500">
            <span class="text-3xl font-bold">It's always about</span>
            <span
              class="block text-8xl font-black uppercase  lg:inline-block lg:pl-8 text-yellow"
              >value</span
            >
          </h3>

          <!-- <span class="block lg:hidden">
            We follow it all the way to success!
          </span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LightBulbIcon } from "@heroicons/vue/outline";
import { TwitterIcon } from "@zhuowenli/vue-feather-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const valueStrategies = [
  {
    question: "<span class='sr-only'>What makes a great</span> Business idea?",
    description:
      "<strong class='text-yellow'>Value Proposition</strong> that compels customers to pay you for it. ",
    icon: LightBulbIcon,
  },
  {
    question:
      "<span class='sr-only'>What makes a great</span> Instagram or Twitter Strategy?",
    description:
      "<strong class='text-yellow'>Value-packed posts</strong> that get them to like, comment and save.",
    icon: TwitterIcon,
  },
  {
    question:
      "<span class='sr-only'>What makes a great</span> Google Search Strategy?",
    description:
      "<strong class='text-yellow'>Value-filled articles</strong> can keep you on Google’s first page for years to come.",
    icon: FontAwesomeIcon,
    faIcon: ["fab", "google"],
  },
];

export default {
  setup() {
    return {
      valueStrategies,
    };
  },
};
</script>