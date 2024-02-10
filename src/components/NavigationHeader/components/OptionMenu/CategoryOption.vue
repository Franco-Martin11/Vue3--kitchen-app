<template>
  <template v-if="isLoading">
    <LoadingView />
  </template>
  <p v-else-if="isError">error : {{ JSON.stringify(isError.value) }}...</p>
  <template v-else>
    <MenuOptions title-menu="Meals">
      <template #menu-item>
        <div class="px-1 py-1">
          <template :key="strCategory" v-for="{ strCategory } in category">
            <MenuItem v-slot="{ active }">
            <RouterLink :to="`/category/c=${strCategory}`.toLowerCase()" :class="[
              active ? 'bg-color-accent text-white' : 'text-gray-900',
              'group flex w-full items-center rounded-md px-2 py-2 text-md font-body'
            ]">
              {{ strCategory }}
            </RouterLink>
            </MenuItem>
          </template>
        </div>
      </template>
    </MenuOptions>
  </template>
</template>

<script setup lang="ts">
import MenuOptions from '@/components/MenuOptions.vue'
import $axios, { apiUrls } from '@/services/axios.api'
import type { MealCategory, MealCategoriesResponse } from '@/types/api.data.response'
import LoadingView from '@/views/LoadingView.vue'
import { MenuItem } from '@headlessui/vue'
import type { AxiosResponse } from 'axios'
import { ref, onMounted } from 'vue'

const category = ref<[] | MealCategory[]>([])
const isLoading = ref(true)
const isError = ref<null | any>(null)

const fetchData = async () => {
  try {
    const response: AxiosResponse<MealCategoriesResponse> = await $axios.get(
      apiUrls.listAllCategories(), { params: { c: 'list' } }
    )
    category.value = response.data.meals
    isLoading.value = false
  } catch (error) {
    console.error('Error al obtener datos:', error)
    isLoading.value = false
    isError.value = error
  }
}

onMounted(() => {
  fetchData()
})
</script>