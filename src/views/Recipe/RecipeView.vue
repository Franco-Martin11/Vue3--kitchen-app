<template>
  <LayoutContainer>
    <template #content>
      <!-- <HeadingDescription /> -->

      <p v-if="isLoading">Loading...</p>
      <p v-else-if="isError">error : {{ JSON.stringify(isError.value) }}...</p>
      <p v-else-if="!meals">No se encontro la receta</p>
      <template v-else>
        <template :key="idMeal" v-for="{ strMealThumb, strMeal, idMeal, strArea, strInstructions, strYoutube } in meals">
          <article v-motion :initial="{
            opacity: 0,
            y: 115
          }" :enter="{
  opacity: 1,
  y: 0,
  transition: {
    type: 'spring',
    stiffness: '50',
    delay: 100
  }
}" class="flex flex-col w-full flex-1">
            <HeadingTitle :str-meal="strMeal" :str-area="strArea" :str-meal-thumb="strMealThumb" :id-meal="idMeal"
              :str-youtube="strYoutube" />
            <div class="flex flex-col w-full min-h-96 bg-slate-100">
              <RecipeContainer :str-instructions="strInstructions" :str-ingredients="ingredientsFiltered" />
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
import { type AxiosResponse } from 'axios'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeadingTitle from './components/HeadingTitle.vue'
import $axios, { apiUrls } from '@/services/axios.api'
import RecipeContainer from '@/components/Recipe/RecipeContainer.vue'

const route = useRoute()

const meals = ref<[] | Meal[]>([])
const isLoading = ref(true)
const isError = ref<null | any>(null)
const ingredientsFiltered = computed(() => meals.value.filter((element) => element))

const fetchData = async (id: string | number | string[]) => {
  try {
    const response: AxiosResponse<MealsResponse> = await $axios.get(apiUrls.searchMealByName(), { params: { s: id } });
    meals.value = response.data.meals;
    isLoading.value = false;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    isLoading.value = false;
    isError.value = error;
  }
};

onMounted(() => {
  fetchData(route.params.idMeal);
});

watch(() => route.params.idMeal, (newId: string | number | string[]) => {
  fetchData(newId);
});
</script>
