<template>
  <form
    @submit.prevent="onSubmitHandler"
    class="flex flex-row gap-2 md:gap-4 border bg-[#FAFAFA] py-1 px-2 rounded-full"
  >
    <button title="Search button" type="submit" class="p-1">
      <ph-magnifying-glass :size="20" class="text-[#515151] hover:text-[#222222]" />
    </button>
    <input
      v-model="form.searchInput"
      class="placeholder:italic placeholder:text-[#515151] block bg-transparent w-full focus:outline-none text-md lg:text-lg"
      type="text"
      placeholder="Search"
      name="search_recipe"
      id="search_recipe"
    />
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const form = reactive({ searchInput: '' })
const onSubmitHandler = () => {
  if (Number(form.searchInput)) {
    router.push({ name: 'recipeById', params: { idMeal: form.searchInput } })
  } else {
    router.push({ name: 'recipeByName', params: { idMeal: form.searchInput } })
  }
}
</script>
