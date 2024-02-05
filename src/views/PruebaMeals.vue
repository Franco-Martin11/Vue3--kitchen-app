<template>
  <div class="">
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="isError">error : {{ JSON.stringify(isError.value) }}...</p>
    <p v-else-if="!meals">No se encontro la receta</p>
    <template v-else>
      <p>{{ JSON.stringify(meals) }}</p>
      <template :key="idMeal" v-for="{ strMealThumb, strMeal, idMeal } in meals">
        <h1>{{ strMeal }}</h1>
        <img :src="strMealThumb" :alt="strMeal" />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Meal, MealsResponse } from '@/types/apiData'
import axios, { type AxiosResponse } from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

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
