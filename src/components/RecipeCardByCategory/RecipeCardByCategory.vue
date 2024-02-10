<template>
  <RouterLink class="hover:shadow-xl" :to="`/recipe/i=${idMeal}`">
    <div
      class="flex flex-col gap-4 bg-bg-color rounded-md shadow-md p-2 justify-center items-center"
    >
      <img :src="strMealThumb" class="w-40 h-40 rounded-md" :alt="'Image' + strMeal" />
      <h2 class="max-w-full break-words h-full min-h-[48px] text-center">{{ strMeal }}</h2>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { FilterMealByCategory } from '@/types/api.data.response'

defineProps<FilterMealByCategory>()
</script>
