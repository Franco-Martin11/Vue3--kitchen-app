<template>
  <LayoutContainer>
    <template #content>
      <!-- <HeadingDescription /> -->

      <p v-if="isLoading">Loading...</p>
      <p v-else-if="isError">error : {{ JSON.stringify(isError.value) }}...</p>
      <p v-else-if="!meals">No se encontro la receta</p>
      <template v-else>
        <template
          :key="idMeal"
          v-for="{ strMealThumb, strMeal, idMeal, strArea, strInstructions } in meals"
        >
          <article
            v-motion
            :initial="{
              opacity: 0,
              y: 115
            }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '50',
                delay: 100
              }
            }"
            class="flex flex-col w-full flex-1"
          >
            <HeadingTitle
              :str-meal="strMeal"
              :str-area="strArea"
              :str-meal-thumb="strMealThumb"
              :id-meal="idMeal"
            />
            <div class="flex flex-col w-full min-h-96 bg-slate-100">
              <StepsContainer :str-instructions="strInstructions" />
            </div>
          </article>
        </template>
      </template>
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from '@/layout/LayoutContainer.vue'
import type { Meal, MealsResponse } from '@/types/apiData'
import axios, { type AxiosResponse } from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import HeadingTitle from './components/HeadingTitle.vue'
import StepsContainer from '@/components/Recipe/Steps/StepsContainer.vue'

const { params } = useRoute()

const meals = ref<[] | Meal[]>([])
const isLoading = ref(true)
const isError = ref<null | any>(null)
onMounted(async () => {
  try {
    const response: AxiosResponse<MealsResponse> = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/lookup.php',
      {
        params: {
          i: params.idMeal
        }
      }
    )
    meals.value = response.data.meals
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching data:', error)
    isLoading.value = false
    isError.value = error
  }
})
</script>
