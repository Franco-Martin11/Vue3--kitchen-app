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
          v-for="{ strMealThumb, strMeal, idMeal, strArea, strYoutube } in meals"
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
            class="flex flex-col w-full"
          >
            <!-- <MenuOptions/> -->
            <HeadingTitle
              :str-meal="strMeal"
              :str-area="strArea"
              :str-meal-thumb="strMealThumb"
              :id-meal="idMeal"
              :str-youtube="strYoutube"
            />
            <!-- <IngredientContainer :meals="fillData" /> -->
          </article>
        </template>
      </template>
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from '@/layout/LayoutContainer.vue'
import { type AxiosResponse } from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import $axios, { apiUrls } from '@/services/axios.api'
import HeadingTitle from './Recipe/components/HeadingTitle.vue'
import type { Meal, MealsResponse } from '@/types/api.data.response'

const { params } = useRoute()

const meals = ref<[] | Meal[]>([])
const isLoading = ref(true)
const isError = ref<null | any>(null)
onMounted(async () => {
  try {
    const response: AxiosResponse<MealsResponse> = await $axios.get(apiUrls.lookupMealById(), {
      params: {
        i: params.idMeal
      }
    })
    meals.value = response.data.meals
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching data:', error)
    isLoading.value = false
    isError.value = error
  }
})
</script>
@/types/api.data.response
