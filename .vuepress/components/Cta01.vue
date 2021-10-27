<template>
  <div
    id="cta"
    class="
      px-4
      py-24
      text-[#FAC814]
      bg-yellow-500
      md:py-32
      sm:px-6
      lg:px-8
      pattern-zigzag-xl
    "
  >
    <confetti v-if="isCelebrating" />
    <div class="mx-auto max-w-5xl text-left">
      <h2
        class="
          block
          text-4xl
          font-light
          text-center text-indigo-500
          uppercase
          lg:text-[3rem]
        "
      >
        All we need is your
        <span class="inline-block cssanimation heartbeatSlow">love!</span>
      </h2>

      <p
        class="block mt-12 text-2xl font-black text-center text-yellow-900  lg:text-5xl"
      >
        <span class="whitespace-nowrap">
          <strong class="text-4xl text-indigo-500 lg:text-7xl">
            {{ 500 - supporterCount }}
          </strong>
          supporters left to go</span
        >
      </p>

      <p
        class="mx-auto mt-12 mb-12 max-w-2xl text-xl text-center text-yellow-800  sm:text-xl"
      >
        <strong>Our goal is 500 supporters.</strong> That's how we know you want
        this before we put in the next 4,000 hours of work needed to bring you
        the FULL <strong>free ValueHeads entrepreneurship course</strong>.
      </p>

      <confetti v-if="isCelebrating" />

      <div
        class="px-6 py-12 mx-auto mt-16 max-w-2xl bg-yellow-300 rounded-xl  md:p-12"
      >
        <h3 class="mb-6 text-2xl font-bold text-olive-700">
          Help us get to 500 supporters 👇🏿
        </h3>
        <ol role="list">
          <li
            v-for="(step, stepIdx) in steps"
            :key="step.name"
            :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']"
          >
            <template v-if="stepStatus(step.stepNo) === 'complete'">
              <div
                v-if="stepIdx !== steps.length - 1"
                class="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-indigo-600"
                aria-hidden="true"
              />
              <span class="flex relative items-center group">
                <span class="flex items-center h-5">
                  <span
                    class="flex relative z-10 justify-center items-center w-8 h-8 bg-indigo-600 rounded-full  group-hover:bg-indigo-800"
                  >
                    <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" />
                  </span>
                </span>
                <span class="flex flex-col ml-4 min-w-0 text-yellow-700">
                  <span class="text-sm font-semibold tracking-wide uppercase"
                    >{{ step.stepNo }}. {{ step.name }}</span
                  >
                  <!-- <span class="text-base text-olive-400">{{
                    step.description
                  }}</span> -->
                </span>
              </span>
            </template>
            <template
              v-else-if="stepStatus(step.stepNo) === 'current'"
              condition="step.status === 'current'"
            >
              <div
                v-if="stepIdx !== steps.length - 1"
                class="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full  bg-olive-100"
                aria-hidden="true"
              />
              <span class="flex relative items-start group" aria-current="step">
                <span class="flex items-center h-8" aria-hidden="true">
                  <span
                    class="flex relative z-10 justify-center items-center w-8 h-8 bg-white rounded-full border-2 border-indigo-600"
                  >
                    <span class="w-2.5 h-2.5 bg-indigo-600 rounded-full" />
                  </span>
                </span>
                <span class="flex flex-col ml-4 min-w-0">
                  <span
                    class="text-sm font-semibold tracking-wide text-indigo-600 uppercase"
                    >{{ step.stepNo }}. {{ step.name }}</span
                  >
                  <span class="mt-2 text-base text-olive-600">{{
                    step.description
                  }}</span>
                  <component
                    :is="step.component"
                    @done="nextStep()"
                    class="mt-5"
                  />
                </span>
              </span>
            </template>
            <template v-else>
              <div
                v-if="stepIdx !== steps.length - 1"
                class="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full  bg-olive-100"
                aria-hidden="true"
              />
              <span class="flex relative items-center group">
                <span class="flex items-center h-5" aria-hidden="true">
                  <span
                    class="flex relative z-10 justify-center items-center w-8 h-8 bg-white rounded-full border-2  border-olive-100 group-hover:border-olive-300"
                  >
                    <span
                      class="w-2.5 h-2.5 bg-transparent rounded-full  group-hover:bg-olive-100"
                    />
                  </span>
                </span>
                <span class="flex flex-col ml-4 min-w-0">
                  <span
                    class="text-sm font-semibold tracking-wide uppercase  text-olive-400"
                    >{{ step.stepNo }}. {{ step.name }}</span
                  >
                  <!-- <span class="text-base text-olive-400">{{
                    step.description
                  }}</span> -->
                </span>
              </span>
            </template>
          </li>
        </ol>

        <confetti v-if="isCelebrating" />

        <cta-thank-you
          v-if="currStep > 3"
          @celebrate="celebrate()"
          class="flex flex-col justify-center items-center pt-12 mx-auto text-center"
        />
      </div>

      <div
        class="mx-auto mt-8 text-sm text-center text-pink-600 uppercase"
        v-if="currStep <= 3"
      >
        Hint: There is a surprise waiting for you after step 3 🤯
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "@heroicons/vue/solid";
import CtaForm from "./CtaForm";
import CtaShare from "./CtaShare";
import CtaReply from "./CtaReply";

const steps = [
  {
    name: "Support us. Join ValueHeads",
    description:
      "Get an instant email with our road map and get updates as we develop the course.",
    stepNo: 1,
    component: CtaForm,
  },
  {
    name: "Help us tell the world about ValueHeads",
    description: "Post about us publicly anywhere on the internet.",
    stepNo: 2,
    component: CtaShare,
  },
  {
    name: "Email us to update the counter! 🤗",
    description:
      "Yay! Please reply to my email with the link to your awesome post. ",
    stepNo: 3,
    component: CtaReply,
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
  data() {
    return {
      currStep: 1,
      isCelebrating: false,
      supporterCount: 12,
    };
  },
  methods: {
    stepStatus(stepNumber) {
      return this.currStep == stepNumber
        ? "current"
        : this.currStep < stepNumber
        ? "upcoming"
        : "complete";
    },
    nextStep() {
      this.currStep++;
      // if (this.currStep > 3) this.celebrate();
    },
    celebrate() {
      this.isCelebrating = true;
      setTimeout(() => {
        this.isCelebrating = false;
      }, 5000);
    },
  },
};
</script>