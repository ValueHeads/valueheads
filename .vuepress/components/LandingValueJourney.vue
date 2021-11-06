<template>
  <div id="value-entrepreneurship" class="py-16 bg-white sm:py-20 lg:py-24">
    <div class="px-4 mx-auto max-w-md text-center sm:px-6 sm:max-w-3xl lg:px-8">
      <div>
        <h2
          class="text-base font-semibold tracking-wider text-indigo-600 uppercase"
        >
          VALUE Entrepreneurship &ndash; Not aimless passions!
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900  sm:text-4xl"
        >
          <span class="text-indigo-400">&ldquo;Following the VALUE&rdquo;</span>
          is YOUR path to independence from the 9-5
        </p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Value is what guides us ValueHeads. We keep trying to
          <strong>"give value"</strong> until customers pay us. From there we
          grow. If you iterate quickly through this loop, you are guaranteed to
          make money!
        </p>
      </div>
      <div
        class="overflow-y-hidden relative mx-auto mt-12 max-w-xl"
        :class="[!isShowFull ? 'max-h-[36rem]' : '']"
        @click="isShowFull = true"
      >
        <div
          class="flex absolute bottom-0 justify-center items-end w-full h-44 bg-gradient-to-t from-white via-white to-transparent"
          v-if="!isShowFull"
        >
          <button
            @click="isShowFull = true"
            class="inline-flex px-4 py-2 text-base font-medium bg-gray-100 rounded-md border border-indigo-300 shadow-sm  text-olive-800 hover:bg-white"
          >
            See full infographic
          </button>
        </div>
        <img
          class="mx-auto w-auto h-auto lazyload"
          data-src="/images/illustration-value-entrepreneurship-journey.gif"
          alt="The Value Entrepreneurship Journey Infographic - ValueHeads."
          width="1314"
          height="5502"
        />
        <div class="mx-auto mt-12 sm:mt-16 md:max-w-md">
          <a
            href="#cta"
            v-scroll-to="'#cta'"
            class="flex justify-center items-center px-8 py-3 text-base font-bold text-white rounded-md border border-transparent  bg-indigo hover:bg-yellow-500 hover:text-gray-900 md:py-4 md:text-lg md:px-10"
          >
            Support ValueHeads 👍
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowFull: false,
    };
  },
};
</script>