<template>
  <div class="px-4 py-32 bg-yellow-500 md:py-32 lg:py-40 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-left">
      <h2
        class="
          block
          text-4xl
          font-light
          text-center text-indigo-500
          uppercase
          lg:text-[2.8rem]
        "
      >
        All we need is <span class="underline">your love!</span>
      </h2>

      <p
        class="block mt-12 text-2xl font-black text-center text-yellow-900  lg:text-5xl"
      >
        We need 500 supporters&hellip;
        <strong class="text-7xl text-indigo-500">477</strong> to go.
      </p>

      <p class="mt-2 mb-12 text-xl text-center text-yellow-800 sm:text-2xl">
        That's our signal to build the FULL course.
      </p>

      <div class="mt-16 bg-yellow-300 rounded-xl">
        <ol role="list" class="px-6 py-12 max-w-2xl md:p-12">
          <li
            v-for="(step, stepIdx) in steps"
            :key="step.name"
            :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']"
          >
            <template v-if="step.status === 'complete'">
              <div
                v-if="stepIdx !== steps.length - 1"
                class="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-indigo-600"
                aria-hidden="true"
              />
              <span class="flex relative items-start group">
                <span class="flex items-center h-9">
                  <span
                    class="flex relative z-10 justify-center items-center w-8 h-8 bg-indigo-600 rounded-full  group-hover:bg-indigo-800"
                  >
                    <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" />
                  </span>
                </span>
                <span class="flex flex-col ml-4 min-w-0">
                  <span class="text-sm font-semibold tracking-wide uppercase">{{
                    step.name
                  }}</span>
                  <span class="text-base text-olive-500">{{
                    step.description
                  }}</span>
                  <component :is="step.component" class="mt-5" />
                </span>
              </span>
            </template>
            <template
              v-else-if="step.status === 'current'"
              condition="step.status === 'current'"
            >
              <div
                v-if="stepIdx !== steps.length - 1"
                class="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-gray-300"
                aria-hidden="true"
              />
              <span class="flex relative items-start group" aria-current="step">
                <span class="flex items-center h-9" aria-hidden="true">
                  <span
                    class="flex relative z-10 justify-center items-center w-8 h-8 bg-white rounded-full border-2 border-indigo-600"
                  >
                    <span class="w-2.5 h-2.5 bg-indigo-600 rounded-full" />
                  </span>
                </span>
                <span class="flex flex-col ml-4 min-w-0">
                  <span
                    class="text-sm font-semibold tracking-wide text-indigo-600 uppercase"
                    >{{ step.name }}</span
                  >
                  <span class="text-base text-olive-500">{{
                    step.description
                  }}</span>
                  <component :is="step.component" class="mt-5" />
                </span>
              </span>
            </template>
            <template v-else>
              <div
                v-if="stepIdx !== steps.length - 1"
                class="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-gray-300"
                aria-hidden="true"
              />
              <span class="flex relative items-start group">
                <span class="flex items-center h-9" aria-hidden="true">
                  <span
                    class="flex relative z-10 justify-center items-center w-8 h-8 bg-white rounded-full border-2 border-gray-300  group-hover:border-gray-400"
                  >
                    <span
                      class="w-2.5 h-2.5 bg-transparent rounded-full  group-hover:bg-gray-300"
                    />
                  </span>
                </span>
                <span class="flex flex-col ml-4 min-w-0">
                  <span
                    class="text-sm font-semibold tracking-wide uppercase  text-olive-500"
                    >{{ step.name }}</span
                  >
                  <span class="text-base text-olive-500">{{
                    step.description
                  }}</span>
                  <component :is="step.component" class="mt-5" />
                </span>
              </span>
            </template>
          </li>
        </ol>
      </div>

      <p class="mt-16 text-base leading-6 text-olive-500 sm:text-lg">
        Help us bring ValueHeads to life. We are looking for validation from 500
        supporters, before we invest the next 4,000 hours of work needed to
        bring you this
        <strong>full free open entrepreneurship course</strong>.
      </p>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "@heroicons/vue/solid";
import CtaForm from "./CtaForm";

const steps = [
  {
    name: "Support us. Start by joining ValueHeads",
    description: "Get an instant email with our road map.",
    status: "current", // complete
    component: CtaForm,
  },
  {
    name: "Help us tell the world about ValueHeads",
    description: "The bigger our community, the more powerful we all become!",
    status: "upcoming",
  },
  {
    name: "Update the counter",
    description: "Reply to our email with the link to your post",
    status: "upcoming",
  },
];

export default {
  components: {
    CheckIcon,
  },
  setup() {
    return {
      steps,
    };
  },
};
</script>