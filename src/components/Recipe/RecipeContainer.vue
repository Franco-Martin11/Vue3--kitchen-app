<template>
  <div class="flex flex-row gap-4 h-fit w-full flex-wrap-reverse">
    <StepsContainer :str-instructions="strInstructions" />
    <IngredientContainer />
  </div>
</template>

<script setup lang="ts">
import type { Meal } from '@/types/api.data.response'
import IngredientContainer from './Ingredient/IngredientContainer.vue'
import StepsContainer from './Steps/StepsContainer.vue'
defineProps<Pick<Meal, 'strInstructions'>>()
</script>
