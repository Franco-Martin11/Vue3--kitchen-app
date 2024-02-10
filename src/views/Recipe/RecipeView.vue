<template>
  <LayoutContainer>
    <template #content>
      <template v-if="isLoading">
        <LoadingView />
      </template>
      <p v-else-if="isError">error : {{ JSON.stringify(isError.value) }}...</p>
      <p v-else-if="!meals">No se encontro la receta</p>
      <template v-else>
        <template
          :key="idMeal"
          v-for="{ strMealThumb, strMeal, idMeal, strArea, strInstructions, strYoutube } in meals"
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
              :str-youtube="strYoutube"
            />
            <div class="flex flex-col w-full min-h-96 bg-slate-100">
              <RecipeContainer
                :str-instructions="strInstructions"
                :str-ingredients="ingredientsFiltered"
              />
            </div>
          </article>
        </template>
      </template>
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from '@/layout/LayoutContainer.vue'
import { type AxiosResponse } from 'axios'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeadingTitle from './components/HeadingTitle.vue'
import $axios from '@/services/axios.api'
import RecipeContainer from '@/components/Recipe/RecipeContainer.vue'
import { apiURLEndpoint } from '@/utils/api.utils'
import LoadingView from '../LoadingView.vue'
import type { Meal, MealsResponse } from '@/types/api.data.response'

const route = useRoute()

const meals = ref<[] | Meal[]>([])
const isLoading = ref(true)
const isError = ref<null | any>(null)
const ingredientsFiltered = computed(() => meals.value.filter((element) => element))

const fetchData = async (id: string | number | string[]) => {
  try {
    const { url, params } = apiURLEndpoint(id)
    console.log({ url, params })
    console.log(apiURLEndpoint(id))
    const response: AxiosResponse<MealsResponse> = await $axios.get(url, { params })
    meals.value = response.data.meals
    isLoading.value = false
  } catch (error) {
    console.error('Error al obtener datos:', error)
    isLoading.value = false
    isError.value = error
  }
}

onMounted(() => {
  fetchData(route.params.idMeal)
})

watch(
  () => route.params.idMeal,
  (newId: string | number | string[]) => {
    fetchData(newId)
  }
)
</script>