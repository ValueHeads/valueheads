<template>
  <div
    class="overflow-hidden relative pt-28 bg-gradient-to-b from-indigo-500 to-indigo-900  sm:pt-40 lg:py-32"
  >
    <div class="relative z-[2] mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          class="px-4 mx-auto max-w-xl  lg:col-span-8 sm:max-w-3xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
        >
          <div class="lg:py-10">
            <div class="block h-9 sm:h-14">
              <client-only>
                <VueWriter
                  :array="[
                    'Leave the 9-5 job!',
                    'Live the life you want!',
                    'Put in 5-10 hours a week to…',
                  ]"
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
              <!-- Variation A -->
              <span
                v-if="$route.path.startsWith('/va')"
                class="block mt-0 leading-[1.1]"
              >
                Step-by-step course on
                <span class="text-yellow-500">
                  how to become a successful entrepreneur
                </span>
              </span>

              <!-- Default -->
              <span v-else class="block mt-0">
                Build your own business with our
                <span class="text-yellow-500"
                  >forever FREE step-by-step course!</span
                >
              </span>
            </h1>
            <p
              class="mt-12 text-lg text-indigo-100  sm:mt-10 sm:text-xl lg:text-lg xl:text-xl"
            >
              You've never seen
              <strong class="text-white">an entrepreneurship course</strong>
              like this! It's your manual to finding a great business idea that
              <strong class="text-white whitespace-nowrap"
                >WILL make you money</strong
              >. We do it by following the value.
            </p>

            <div
              class="mx-auto mt-12 w-full  lg:mx-0 sm:mt-16 md:max-w-md md:w-auto"
            >
              <button
                v-scroll-to="'#cta'"
                class="flex justify-center items-center px-8 py-3 w-full text-base font-bold bg-white rounded-md border border-transparent  text-olive-800 hover:bg-yellow-300 hover:text-olive-900 md:py-4 md:text-lg md:px-10"
              >
                Make it happen! 😎
              </button>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:col-span-4">
          <div
            class="px-4 mx-auto max-w-md  sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
          >
            <!-- Illustration borrowed from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img
              svg-inline
              class="w-full h-auto"
              src="@/public/images/lucid-illustration-rocket.svg"
              width="828"
              height="1021"
              alt="Rocket to success"
            />
          </div>
        </div>
      </div>
    </div>
    <stars class="overflow-hidden absolute top-0 z-[1] w-full h-full"></stars>
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