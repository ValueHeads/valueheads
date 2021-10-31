<template>
  <div
    class="overflow-hidden relative pt-28 bg-gradient-to-b from-indigo-500 to-indigo-900  sm:pt-40 lg:py-32"
  >
    <div class="relative z-20 mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          class="px-4 mx-auto max-w-xl  lg:col-span-7 sm:max-w-3xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
        >
          <div class="lg:py-10">
            <!-- <client-only>
              <VueWriter
                :array="[
                  'Leave the 9-5 job!',
                  'Live the life you want!',
                  'Put in 5-10 hours a week to…',
                ]"
                :eraseSpeed="35"
                :typeSpeed="75"
                :delay="4000"
                :start="6000"
                class="mx-auto -mb-4 max-w-xl text-2xl font-light placeholder-opacity-95 text-white whitespace-nowrap lg:mx-0 sm:text-5xl"
              />
            </client-only> -->

            <h1
              class="mt-4 text-4xl font-extrabold tracking-tight text-white  sm:mt-5 sm:text-6xl lg:mt-6"
            >
              <span class="block mt-0">
                Build your own business with our
                <span class="text-yellow-500"
                  >forever FREE step-by-step course!</span
                >
              </span>

              <!-- <span class="block">
                      Build a business and live your life the way you want.
                    </span> -->
            </h1>
            <p
              class="mt-12 text-lg text-indigo-100  sm:mt-8 sm:text-xl lg:text-lg xl:text-xl"
            >
              You've never seen
              <strong class="text-white">an entrepreneurship course</strong>
              like this! It's your manual to finding a great business idea that
              <strong class="text-white whitespace-nowrap"
                >WILL make you money</strong
              >. We do it by following the value.
            </p>

            <div
              class="mx-auto mt-12 w-max lg:mx-0 sm:mt-8 md:max-w-sm md:w-auto"
            >
              <button
                v-scroll-to="'#cta'"
                class="flex justify-center items-center px-8 py-3 text-base font-bold bg-white rounded-md border border-transparent  text-olive-800 hover:bg-yellow-500 hover:text-olive-900 md:py-4 md:text-lg md:px-10"
              >
                Make ValueHeads a reality! 😎
              </button>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:col-span-5">
          <div
            class="px-4 mx-auto max-w-md  sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
          >
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <inline-svg
              class="w-full h-auto  lazyload lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/images/lucid-illustration-rocket.svg"
              width="828"
              height="1021"
              aria-label="Rocket to success"
            ></inline-svg>
          </div>
        </div>
      </div>
    </div>
    <stars class="overflow-hidden absolute top-0 z-10 w-full h-full"></stars>
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
};
</script>