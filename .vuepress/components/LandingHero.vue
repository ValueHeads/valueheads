<template>
  <div class="min-h-screen">
    <div class="overflow-hidden relative">
      <main>
        <div
          class="pt-28 bg-indigo-500  sm:pt-40 lg:pt-28 lg:pb-14 lg:overflow-hidden"
        >
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div
                class="px-4 mx-auto max-w-md  sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
              >
                <div class="lg:py-24">
                  <h1
                    class="mt-4 text-4xl font-extrabold tracking-tight text-white  sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                  >
                    This is not just a course, this is a
                    <span class="underline">movement.</span>

                    <span class="block">
                      We are
                      <span class="text-yellow-500"
                        >open-sourcing Entrepreneurship!</span
                      >
                    </span>

                    <!-- <span class="block">
                      Build a business and live your life the way you want.
                    </span> -->
                  </h1>
                  <p
                    class="mt-12 text-base text-gray-300  sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                  >
                    Everyone needs to know how to create wealth by
                    <span class="font-bold text-yellow-500"
                      >Following the VALUE!</span
                    >
                    ValueHeads is your community entrepreneurship course,
                    <strong>free and open-source</strong>. It's your
                    step-by-step manual to finding a great business idea that
                    WILL make you money.
                  </p>

                  <div class="mt-12 sm:mt-8 md:max-w-xs">
                    <a
                      href="#"
                      class="flex justify-center items-center px-8 py-3 text-base font-bold text-indigo-800 bg-white rounded-md border border-transparent  hover:bg-yellow-500 hover:text-gray-900 md:py-4 md:text-lg md:px-10"
                    >
                      Become a ValueHead! 😎
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div
                  class="px-4 mx-auto max-w-md  sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
                >
                  <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                  <img
                    class="w-full  lazyload lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    data-src="/images/lucid-illustration-rocket.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- More main page content here... -->
      </main>
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
};
</script>