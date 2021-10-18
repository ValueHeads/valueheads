<template>
  <form
    action="#"
    class="box-content mx-auto mt-5  sm:max-w-xl sm:w-full sm:grid sm:grid-cols-2 sm:gap-4"
  >
    <div class="min-w-0">
      <label for="hero-email" class="sr-only">Email address</label>
      <input
        id="hero-email"
        type="email"
        class="box-border block px-5 py-3 w-full text-base placeholder-gray-500 text-gray-900 rounded-md border border-indigo-300 shadow-sm  focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="Enter your email"
      />
    </div>
    <div class="mt-4 sm:mt-0 sm:ml-3">
      <button
        type="submit"
        class="block px-5 py-3 w-full text-base font-medium text-white bg-indigo-500 rounded-md border border-transparent shadow  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
      >
        Join ValueHeads
      </button>
    </div>
  </form>
</template>