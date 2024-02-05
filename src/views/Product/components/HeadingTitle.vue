<template>
  <div
    class="flex px-4 py-8 flex-col gap-4 w-full bg-color-accent h-fit relative border-t border-bg-color"
  >
    <p class="font-body text-md text-bg-gray">Recipes > Turkey burger with seet potatos fries</p>
    <div class="flex flex-1 flex-col md:flex-row gap-4 items-center">
      <picture class="w-60 sm:w-80">
        <img src="/turkeyBurger.jpeg" class="aspect-square m-[0_auto]" />
      </picture>

      <div class="flex flex-col gap-4">
        <h2
          class="text-center lg:text-start font-heading text-4xl sm:text-5xl lg:text-6xl text-white max-w-[800px]"
        >
          Turkey burger with seet potatos fries
        </h2>

        <div
          class="flex flex-row flex-wrap gap-4 lg:gap-2 wrap items-center justify-center lg:justify-normal"
        >
          <div
            class="flex flex-row gap-2 lg:gap-6 flex-[1_0_325px] justify-center lg:justify-normal w-full"
          >
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BagdeInstruction from '@/components/BagdeInstruction.vue'
</script>
