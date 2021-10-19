<template>
  <div>
    <p class="mb-5 text-2xl font-black text-pink-600">
      Thank you! You are awesome!
    </p>
    <a
      @click.prevent="$emit('celebrate')"
      href="#"
      class="
        flex
        justify-center
        items-center
        px-6
        py-2
        w-full
        text-base
        font-medium
        text-white
        bg-indigo-600
        rounded-md
        border border-transparent
        shadow
        hover:bg-indigo-700
        md:py-3
        md:text-lg
        md:px-8
        md:max-w-xs
      "
    >
      Click to celebrate!
    </a>
  </div>
</template>