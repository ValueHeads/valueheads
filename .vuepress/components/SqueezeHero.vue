<template>
  <div
    class="overflow-hidden relative py-28 bg-gradient-to-b from-indigo-500 to-indigo-900  print:min-h-screen sm:py-40 lg:pt-44 lg:pb-24"
  >
    <div class="px-4 mx-auto max-w-7xl lg:px-8 sm:px-6">
      <div class="relative z-[2] lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          class="mx-auto max-w-xl  lg:mx-0 lg:col-span-8 sm:max-w-3xl sm:text-center lg:text-left"
        >
          <div class="block h-9 sm:h-14">
            <client-only>
              <VueWriter
                :array="['Leave the 9-5 job!', 'Live the life you want!']"
                :eraseSpeed="35"
                :typeSpeed="75"
                :delay="4000"
                :start="3500"
                class="mx-auto -mb-4 max-w-xl text-2xl font-light placeholder-opacity-95 text-white whitespace-nowrap  lg:mx-0 sm:text-5xl"
              />
            </client-only>
          </div>

          <h1
            class="text-4xl font-extrabold tracking-tight text-white  sm:text-6xl"
          >
            <!-- Default -->
            <span class="block mt-0">
              Start an online business from home with our
              <span class="text-yellow-500">forever FREE course!</span>
              <!-- <span class="block mt-3 text-xl font-normal sm:text-3xl"
                >(DIY from home, if that's your style)</span
              > -->
            </span>
          </h1>
          <p
            class="mt-12 text-lg text-indigo-100  description sm:mt-10 sm:text-xl lg:text-lg xl:text-xl"
          >
            <!-- Never seen before entrepreneurship course! -->
            It's your
            <strong>low-risk &amp; low-cost</strong>
            steps to finding a great business idea that
            <strong class="whitespace-nowrap">WILL make you money</strong>.
          </p>
        </div>

        <div class="relative lg:col-span-4">
          <!-- Illustration borrowed from Lucid Illustrations: https://lucid.pixsellz.io/ -->
          <img
            svg-inline
            class="hidden mx-auto h-auto  lg:mr-0 md:w-40 md:mt-16 md:block lg:w-72 lg:transform lg:transform-gpu lg:-translate-y-16"
            src="@/public/images/lucid-illustration-rocket.svg"
            width="828"
            height="1021"
            alt="Rocket to success"
          />
        </div>
      </div>

      <div
        class="
          mt-10
          px-4
          py-12
          sm:mt-16
          md:mt-10
          lg:mt-0
          relative
          z-[2]
          w-full
          text-center
          bg-indigo-400 bg-opacity-80
          rounded-xl
          md:p-16
          border-4 border-yellow
        "
      >
        <p class="mb-6 text-xl font-bold leading-snug text-white">
          Download
          <span class="text-yellow"
            >ValueHeads Checklist #1 (of 3): Finding a Business Idea</span
          >
        </p>
        <button
          v-scroll-to="'#cta'"
          class="flex justify-center items-center px-8 py-3 mx-auto w-full text-base font-bold bg-white rounded-md border border-transparent  md:max-w-md text-olive-800 hover:bg-yellow-300 hover:text-olive-900 md:py-4 md:text-lg md:px-10"
        >
          Download the Checklist 😎
        </button>
      </div>

      <stars class="overflow-hidden absolute top-0 z-[1] w-full h-full"></stars>
    </div>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { ChevronRightIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ChevronRightIcon,
    MenuIcon,
    XIcon,
  },
  mounted() {
    console.log("$route.path", this.$route.path);
  },
};
</script>

<style lang="scss" scoped>
.description strong {
  @apply text-white;
}
</style>