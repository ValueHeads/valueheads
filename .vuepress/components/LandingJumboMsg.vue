<template>
  <div
    class="
      py-40
      text-[#462796]
      bg-indigo-500
      md:py-52
      pattern-zigzag-xl
      bg-fixed
    "
  >
    <div class="px-4 mx-auto max-w-7xl lg:px-8">
      <h2
        class="mt-4 text-4xl font-bold tracking-tight text-center text-white  sm:mt-5 sm:text-5xl lg:mt-6"
      >
        This is not just a course,
        <span class="sm:whitespace-nowrap"
          >this is a <span class="underline">movement.</span></span
        >

        <span class="block mt-5">
          We are
          <span class="text-yellow-500">open-sourcing Entrepreneurship!</span>
        </span>
      </h2>

      <div class="mx-auto mt-12 sm:mt-16 md:max-w-sm">
        <a
          href="#cta"
          v-scroll-to="'#cta'"
          class="flex justify-center items-center px-8 py-3 text-base font-bold text-indigo-800 bg-white rounded-md border border-transparent  hover:bg-yellow-500 hover:text-gray-900 md:py-4 md:text-lg md:px-10"
        >
          Join us!
        </a>
      </div>
    </div>
  </div>
</template>
