<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="person in people" :key="person.name" class="px-4">
      <div
        class="px-6 py-10 w-full h-full text-white rounded-lg shadow  carousel__item xl:px-10 bg-olive-700"
      >
        <TeamPerson :person="person" class="text-center" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
// Docs https://ismail9k.github.io/vue3-carousel/getting-started.html#available-props
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

export default {
  props: ["people"],
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "start",
      wrapAround: true,
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1.95,
      },
      // 1024 and up
      1024: {
        itemsToShow: 2.95,
        itemsToScroll: 1,
      },
    },
  }),
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style lang="scss">
@import "vue3-carousel/dist/carousel.css";

button.carousel__pagination-button {
  @apply mx-1 w-3 h-1 rounded-sm cursor-pointer bg-white inline-block hover:bg-yellow-300;
}
button.carousel__next,
button.carousel__prev {
  @apply bg-white rounded-full w-8 h-8 text-center flex p-0 text-indigo text-2xl hover:bg-yellow-300;
}

button.carousel__pagination-button--active {
  @apply bg-yellow-500;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.95) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.95) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1);
}
</style>