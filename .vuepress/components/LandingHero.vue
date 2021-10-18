<template>
  <div
    class="pt-28 bg-indigo-500  sm:pt-40 lg:p-0 lg:min-h-screen h-screen-ios min-h-screen-ios lg:flex lg:items-center"
  >
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          class="px-4 mx-auto max-w-md  lg:col-span-7 sm:max-w-3xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
        >
          <div class="lg:py-10">
            <h1
              class="mt-4 text-4xl font-extrabold tracking-tight text-white  sm:mt-5 sm:text-6xl lg:mt-6"
            >
              <span class="font-light text-indigo-50 sm:text-5xl"
                >Leave the 9-5 job!</span
              >

              <span class="block mt-0">
                Build your own business with our
                <span class="text-yellow-500">FREE step-by-step course!</span>
              </span>

              <!-- <span class="block">
                      Build a business and live your life the way you want.
                    </span> -->
            </h1>
            <p
              class="mt-12 text-lg text-indigo-100  sm:mt-8 sm:text-xl lg:text-lg xl:text-xl"
            >
              You've never seen a
              <strong class="text-white">free entrepreneurship course</strong>
              like this! It's your step-by-step manual to finding a great
              business idea that
              <strong class="text-white whitespace-nowrap"
                >WILL make you money</strong
              >.
            </p>

            <div class="mx-auto mt-12 lg:mx-0 sm:mt-8 md:max-w-xs">
              <a
                href="#"
                class="flex justify-center items-center px-8 py-3 text-base font-bold bg-white rounded-md border border-transparent  text-olive-800 hover:bg-yellow-500 hover:text-olive-900 md:py-4 md:text-lg md:px-10"
              >
                Become a ValueHead! 😎
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:col-span-5">
          <div
            class="px-4 mx-auto max-w-md  sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
          >
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img
              class="w-full h-auto  lazyload lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              data-src="/images/lucid-illustration-rocket.svg"
              alt=""
              width="828"
              height="1021"
            />
          </div>
        </div>
      </div>
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