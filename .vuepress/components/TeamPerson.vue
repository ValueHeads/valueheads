<template>
  <div>
    <div class="space-y-6 xl:space-y-8">
      <img
        class="block mx-auto w-40 h-40 rounded-full lazyload xl:w-56 xl:h-56"
        :data-src="person.imageUrl"
        :alt="person.name + '. ' + person.role"
        width="400"
        height="400"
      />

      <div class="text-base font-medium leading-6">
        <h3 class="text-lg text-white">{{ person.name }}</h3>
        <p class="leading-tight text-yellow-500">
          {{ person.role }}
        </p>
        <p
          v-if="person.fromTo"
          class="mt-4 text-sm leading-tight text-gray-200"
        >
          {{ person.fromTo }}
        </p>
        <social-icons-bar class="mt-4" :person="person" />
      </div>

      <hr v-if="person.fromTo" class="mx-auto w-1/2" />

      <div v-if="person.desc" class="text-gray-300">
        {{ person.desc }}
      </div>

      <div v-if="person.quote" class="text-gray-300">
        <span class="text-2xl leading-none text-indigo-300">&ldquo;</span>
        {{ person.quote }}
        <span class="text-2xl leading-none text-indigo-300">&rdquo;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["person"],
};
</script>