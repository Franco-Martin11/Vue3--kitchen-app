<template>
  <div
    class="flex px-4 py-8 flex-row gap-4 w-full bg-color-accent h-fit relative border-t border-bg-color"
  >
    <div class="flex flex-1 flex-col gap-4">
      <p class="font-body text-md text-bg-gray">Recipes > Turkey burger with seet potatos fries</p>
      <h2 class="font-heading text-6xl text-white max-w-[800px]">
        Turkey burger with seet potatos fries
      </h2>

      <div class="flex flex-row gap-2 wrap items-center">
        <div class="flex flex-row gap-6 w-full">
          <BagdeInstruction :heading="'Total Time'" :info="'30m'" />
          <BagdeInstruction :heading="'Prep Time'" :info="'30m'" />
          <BagdeInstruction :heading="'Chill Time'" :info="'30m'" />
          <BagdeInstruction :heading="'Cook Time'" :info="'30m'" />
        </div>
        <div class="flex flex-col">
          <p class="font-body text-md text-bg-color">Total Reviews</p>
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

    <picture class="flex-1">
      <img src="/HeaderIMage.jpg" class="h-96 w-96 absolute top-0 right-4" />
    </picture>
  </div>
</template>

<script setup lang="ts">
import BagdeInstruction from '@/components/BagdeInstruction.vue'
</script>
