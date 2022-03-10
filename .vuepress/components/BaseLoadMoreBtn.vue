<template>
  <div ref="target">
    <button
      type="button"
      :disabled="isLoading"
      @click="!isLoading ? funcToRun() : null"
      class="
        inline-flex
        items-center
        px-4
        py-2
        border border-transparent
        shadow-sm
        text-sm
        font-medium
        rounded-md
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
    >
      {{ !isLoading ? "Load more" : "Loading..." }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";

export default {
  setup() {
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);

    return {
      target,
      targetIsVisible,
    };
  },

  props: {
    isLoading: {
      type: Boolean,
    },
    funcToRun: {
      type: Function,
    },
  },

  watch: {
    targetIsVisible(val) {
      console.log("targetIsVisible changed", val);
      this.funcToRun();
    },
  },
};
</script>
