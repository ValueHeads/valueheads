<template>
  <div class="bg-olive-800">
    <div
      class="px-4 py-16 mx-auto max-w-4xl  sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold tracking-tight text-white">
        The Values of ValueHeads &mdash; Our guiding principles
      </h2>
      <p class="mt-4 max-w-3xl text-lg text-white opacity-70">
        We believe that anyone (from anywhere) on this planet is able to create
        VALUE and move UPWARDS! All you need is to have an appetite for learning
        and access to the internet. ValueHeads is our initiative for Global
        Upward Social Mobility.
      </p>
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-12 mt-12  sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
      >
        <div v-for="feature in features" :key="feature.name">
          <div>
            <span
              class="flex justify-center items-center w-12 h-12 rounded-md  bg-yellow"
            >
              <component
                :is="feature.icon"
                class="w-6 h-6 text-olive-700"
                aria-hidden="true"
              />
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">
              {{ feature.name }}
            </h3>
            <p class="mt-2 text-base text-white opacity-70">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  GlobeIcon,
  UsersIcon,
  LightBulbIcon,
  HeartIcon,
} from "@heroicons/vue/solid";

const features = [
  {
    name: "Open Source & Free - ALWAYS!",
    description:
      "An always up-to-date Entrepreneurship Course can be a challenge. That's why open-sourcing this course is the only way we can keep it current with the contributions of our ValueHeads learners and community. ValueHeads needs you!",
    icon: GlobeIcon,
  },
  {
    name: "No Reinventing the Wheel",
    description:
      "If there is already a great video, article or podcast, we are using it in the course. We are not going to try to recreate all the know-how around entrepreneurship. We’re going to leverage existing content by awesome creators from around the internet.",
    icon: LightBulbIcon,
  },
  {
    name: "ValueHeads is Not-for-profit",
    description:
      "We do not sell you anything! We find value in the community of entrepreneurs itself. We as a collective are VALUABLE as F#$#! ",
    icon: HeartIcon,
  },
  {
    name: "Supportive Community",
    description:
      "A space we can discuss ideas and learn, with no judgement. Like-minded individuals collaborating. That’s how the best ideas are born!",
    icon: UsersIcon,
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