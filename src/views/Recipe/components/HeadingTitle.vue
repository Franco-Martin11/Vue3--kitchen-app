<template>
  <section
    class="flex flex-1 h-full px-2 lg:px-4 py-4 lg:py-8 flex-col gap-2 md:gap-4 w-full bg-color-accent relative border-y border-bg-color"
  >
    <div class="flex flex-row gap-2 font-body text-md text-bg-gray">
      <RouterLink to="/recipes"> Recipes </RouterLink>
      <span> > </span>
      <RouterLink :to="`/category/a=${strArea}`.toLowerCase()">
        {{ strArea }}
      </RouterLink>
    </div>

    <div
      class="grid gap-4 items-center md:grid-rows-none grid-cols-[repeat(auto-fit,minmax(350px,1fr))]"
    >
      <article class="flex flex-1">
        <VideoPlayer v-if="strYoutube" :str-youtube="strYoutube" />
        <figure class="w-full" v-else>
          <img
            :src="strMealThumb"
            :alt="strMeal"
            loading="lazy"
            class="aspect-square m-[0_auto] min-w-[314px] min-h-[314px] max-w-md"
          />
        </figure>
      </article>

      <article class="flex flex-col gap-4">
        <h2
          class="text-center lg:text-start font-heading text-4xl sm:text-5xl lg:text-6xl text-white max-w-[800px]"
        >
          {{ strMeal }}
        </h2>

        <div
          class="flex flex-row flex-wrap gap-4 lg:gap-2 wrap items-center justify-center lg:justify-normal"
        >
          <div class="flex flex-row gap-2 lg:gap-6 justify-center lg:justify-normal w-full">
            <BagdeInstruction :heading="'Total Time'" :info="'30m'" />
            <BagdeInstruction :heading="'Prep Time'" :info="'30m'" />
            <BagdeInstruction :heading="'Chill Time'" :info="'30m'" />
            <BagdeInstruction :heading="'Cook Time'" :info="'30m'" />
          </div>
          <div class="flex flex-col">
            <p class="font-body text-md text-bg-color text-center lg:text-start">Total Reviews</p>
            <div class="flex flex-row gap-4 font-heading text-xl text-yellow-500">
              <p>★</p>
              <p>★</p>
              <p>★</p>
              <p>☆</p>
              <p>☆</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import BagdeInstruction from '@/components/BagdeInstruction.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import type { Meal } from '@/types/api.data.response';
import { RouterLink } from 'vue-router'
defineProps<Pick<Meal, 'strMeal' | 'strMealThumb' | 'idMeal' | 'strArea' | 'strYoutube'>>()
</script>
@/types/api.data.response