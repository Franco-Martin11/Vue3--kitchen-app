<template>
  <LayoutContainer>
    <template #content>
      <div
        v-motion-fade
        class="flex flex-wrap md:gap-4 justify-center flex-1 px-4 my-8 md:my-2 h-full"
      >
        <h2>Category Meal</h2>
        <template v-for="{ strMeal, strMealThumb, idMeal } of mealByCategory" :key="idMeal">
          <RecipeCardByCategory
            :id-meal="idMeal"
            :str-meal="strMeal"
            :str-meal-thumb="strMealThumb"
          />
        </template>
      </div>
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import RecipeCardByCategory from '@/components/RecipeCardByCategory/RecipeCardByCategory.vue'
import LayoutContainer from '@/layout/LayoutContainer.vue'
import $axios, { apiUrls } from '@/services/axios.api'
import type { FilterMealByCategory, FilterMealByCategoryResponse } from '@/types/api.data.response'
import type { AxiosResponse } from 'axios'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const mealByCategory = ref<[] | FilterMealByCategory[]>([])
const isLoading = ref(true)
const isError = ref<null | any>(null)

const fetchData = async (id: string | number | string[]) => {
  try {
    const response: AxiosResponse<FilterMealByCategoryResponse> = await $axios.get(
      apiUrls.filterByCategory(),
      { params: { c: id } }
    )
    mealByCategory.value = response.data.meals
    isLoading.value = false
  } catch (error) {
    console.error('Error al obtener datos:', error)
    isLoading.value = false
    isError.value = error
  }
}

onMounted(() => {
  fetchData(route.params.categoryMeal)
})

watch(
  () => route.params.categoryMeal,
  (newId: string | number | string[]) => {
    fetchData(newId)
  }
)
</script>
