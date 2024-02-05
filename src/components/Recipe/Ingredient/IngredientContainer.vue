<template>
  <div class="flex flex-col flex-[1_1_375px] gap-4 w-full p-4 md:p-8 bg-[#F0ECEB]">
    <TitleHeading heading-text="Ingredients" />
    <IngredientCard />
  </div>
</template>

<script setup lang="ts">
import TitleHeading from '@/components/TitleHeading.vue'
import IngredientCard from './IngredientCard.vue'
</script>
