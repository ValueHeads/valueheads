<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-16 bg-white sm:py-20">
    <div class="px-4 mx-auto max-w-xl sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="sm:text-center">
        <h2
          class="text-base font-semibold tracking-wider text-indigo-600 uppercase"
        >
          Step-by-step Value-Entrepreneurship Course
        </h2>
        <p
          class="mt-2 text-2xl font-extrabold tracking-tight text-gray-800  sm:text-3xl"
        >
          Be the entrepreneur you know you are!
        </p>
      </div>

      <dl class="mt-14 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        <div v-for="feature in features" :key="feature.name">
          <dt>
            <div
              class="flex justify-center items-center w-12 h-12 text-yellow-300 bg-indigo-500 rounded-md"
            >
              <component
                :is="feature.icon"
                class="w-7 h-7"
                aria-hidden="true"
              />
            </div>
            <p class="mt-5 text-lg font-medium leading-6 text-gray-900">
              {{ feature.name }}
            </p>
          </dt>
          <dd class="mt-2 text-base text-gray-500">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { SparklesIcon, LightBulbIcon, HeartIcon } from "@heroicons/vue/outline";

const features = [
  {
    name: "Be free! Answer to no boss. ",
    description:
      "Be independent of a boss, a loan, or an investor. We have the answer: You CAN bootstrap your own online business.",
    icon: SparklesIcon,
  },
  {
    name: "Control Life. Don’t let life control you.",
    description:
      "The path of least risk, “Following-the-VALUE” is your way there. Owning your small business can let you do ANYTHING you want in life - if done right. ",
    icon: HeartIcon,
  },
  {
    name: "Create Awesome $#!+",
    description:
      "You know you can do awesome stuff. You can build amazing products. We know that, too. That’s us, too. Be a Doer with Value Entrepreneurship! ",
    icon: LightBulbIcon,
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