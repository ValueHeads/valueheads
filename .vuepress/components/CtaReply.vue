<template>
  <div>
    <a
      @click.prevent="$emit('done')"
      href="#"
      class="flex justify-center items-center px-6 py-2 w-full text-base font-medium text-gray-900 bg-white rounded-md border border-transparent shadow  hover:bg-indigo-700 md:py-3 hover:text-white md:text-lg md:px-8 hover:no-underline md:max-w-xs"
    >
      I replied 😎
    </a>
  </div>
</template>