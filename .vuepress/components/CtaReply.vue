<template>
  <div>
    <a
      @click.prevent="$emit('done')"
      href="#"
      class="flex justify-center items-center px-6 py-2 w-full text-base font-medium text-white bg-indigo-500 rounded-md border border-transparent shadow  hover:bg-indigo-800 md:py-3 md:text-lg md:px-8 md:max-w-xs"
    >
      I replied 😎
    </a>
  </div>
</template>