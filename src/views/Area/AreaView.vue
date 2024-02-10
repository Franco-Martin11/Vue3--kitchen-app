
<template>
  <LayoutContainer>
    <template #content>
      <div v-motion-fade class="flex flex-col md:gap-4 justify-center flex-1 my-8 px-4 md:my-2 h-full">
        <div class="flex flex-row gap-2 font-body text-md text-gray-900">
          <RouterLink to="/recipes"> Recipes </RouterLink>
          <span> > </span>
          <h5 class="capitalize">
            {{ route.params.categoryArea }}
          </h5>
        </div>
        <div class="grid min-h-[70vh] gap-4 items-center grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
          <template v-for="{ strMeal, strMealThumb, idMeal } of mealByArea" :key="idMeal">
            <RecipeCardByCategory :id-meal="idMeal" :str-meal="strMeal" :str-meal-thumb="strMealThumb" />
          </template>
        </div>
      </div>
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import RecipeCardByCategory from '@/components/RecipeCardByCategory/RecipeCardByCategory.vue';
import LayoutContainer from '@/layout/LayoutContainer.vue';
import $axios, { apiUrls } from '@/services/axios.api';
import type { FilterMealByCategory, FilterMealByCategoryResponse } from '@/types/api.data.response';
import type { AxiosResponse } from 'axios';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const mealByArea = ref<[] | FilterMealByCategory[]>([])
const isLoading = ref(true)
const isError = ref<null | any>(null)

const fetchData = async (id: string | number | string[]) => {
  try {
    const response: AxiosResponse<FilterMealByCategoryResponse> = await $axios.get(apiUrls.filterByArea(), { params: { a: id } })
    mealByArea.value = response.data.meals
    isLoading.value = false
  } catch (error) {
    console.error('Error al obtener datos:', error)
    isLoading.value = false
    isError.value = error
  }
}

onMounted(() => {
  fetchData(route.params.categoryArea)
})

watch(
  () => route.params.categoryArea,
  (newId: string | number | string[]) => {
    fetchData(newId)
  }
)

</script>