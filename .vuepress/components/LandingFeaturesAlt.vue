<template>
  <div class="overflow-hidden relative py-16 bg-white sm:py-20 lg:py-24">
    <div
      class="px-4 mx-auto max-w-md text-center  sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-4xl"
    >
      <div>
        <h2
          class="text-base font-semibold tracking-wider text-indigo-600 uppercase"
        >
          Must-learn skills and concepts
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900  sm:text-4xl"
        >
          A process that gives you
          <span class="text-indigo-400">SUPERPOWERS!</span>
        </p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          This course is <strong>jam-packed</strong> with free/cheap software
          and tricks to help you find awesome business ideas, test them and grow
          your business.
        </p>
      </div>
    </div>

    <div class="relative mt-20">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense xl:gap-40 lg:gap-20"
      >
        <div
          class="px-4 mx-auto max-w-xl  sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
        >
          <p
            class="text-2xl font-extrabold tracking-tight text-indigo-400 uppercase"
          >
            <SparklesIcon class="inline w-6 h-6" />
            Superpower #1
          </p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-gray-900">
            Become a ninja at spotting “Marketing gaps”.
          </h2>
          <p class="mt-8 text-lg text-gray-500">
            Every market has a gap, if you know where to look. That’s how you
            find the best business ideas!

            <br /><br />

            This course includes a step-by-step checklist to guide you through
            market research and help you spot marketing opportunities for your
            own ideas and business. Each step, we'll be walking you through how
            to do it using different methods and apps.
          </p>
          <div class="mt-6">
            <a
              href="#"
              class="inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow-sm  hover:bg-indigo-700"
            >
              Become a ValueHead
            </a>
          </div>
        </div>
        <div class="px-4 mt-12 sm:mt-16 lg:mt-0">
          <div class="lg:relative lg:h-full">
            <img
              class="w-full shadow-lg lg:transform lg:rotate-1"
              src="/images/illustration-spotting-marketing-gaps.png"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-24">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense xl:gap-40 lg:gap-20"
      >
        <div
          class="px-4 mx-auto max-w-xl  sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
        >
          <p
            class="text-2xl font-extrabold tracking-tight text-indigo-400 uppercase"
          >
            <SparklesIcon class="inline w-6 h-6" />
            Superpower #2
          </p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-gray-900">
            Choose the path of lower-risk by focusing on what’s important!
          </h2>
          <p class="mt-8 text-lg text-gray-500">
            Make sure customers are willing to buy your product EARLY! Test
            business ideas cheaply using no-code tools!

            <br /><br />

            Use your test results to attract a co-founder, if you need one.
            We’ll show you exactly how. Developers want to build products that
            will have an audience. Prove your product has a market interested in
            paying you, that usually convinces them to join your awesome
            business!
          </p>
          <div class="mt-6">
            <a
              href="#"
              class="inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow-sm  hover:bg-indigo-700"
            >
              Become a ValueHead
            </a>
          </div>
        </div>
        <div class="px-4 mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div class="lg:h-full">
            <img
              class="w-full shadow-xl lg:transform lg:-rotate-1"
              src="/images/illustration-great-business-idea.png"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-20"
      >
        <div
          class="px-4 mx-auto max-w-xl  sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
        >
          <p
            class="text-2xl font-extrabold tracking-tight text-indigo-400 uppercase"
          >
            <SparklesIcon class="inline w-6 h-6" />
            Superpower #3
          </p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-gray-900">
            Be a Bootstrapper. Build THE MACHINE!
          </h2>
          <p class="mt-8 text-lg text-gray-500">
            That’s the ValueHead’s path! It’s the smart way.
            <br /><br />
            We are value creators. We want to get paid for our innovative hard
            work! Doing it the smart way means it can grow even with less time
            spent working.
            <br /><br />
            We keep automating tasks until we end up with THE MACHINE!
          </p>
          <div class="mt-6">
            <a
              href="#"
              class="inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow-sm  hover:bg-indigo-700"
            >
              Become a ValueHead
            </a>
          </div>
        </div>
        <div class="px-4 mt-12 w-auto sm:mt-16 lg:mt-0">
          <div class="flex flex-col lg:h-full">
            <img
              class="p-5 w-auto rounded-sm border-2 border-gray-400 shadow-xl  lg:transform lg:rotate-2"
              src="/images/illustration-the-bootstrapped-business-machine.png"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InboxIcon, SparklesIcon } from "@heroicons/vue/outline";

export default {
  components: {
    InboxIcon,
    SparklesIcon,
  },
};
</script>