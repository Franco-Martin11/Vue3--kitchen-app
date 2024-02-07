<!-- 
<template>
    <form :v-model="form.searchInput" action="" @submit.prevent="onSubmitHander"
        class="flex flex-row gap-2 md:gap-4 border bg-[#FAFAFA] lg:px-4 lg:py-2 py-1 px-2 rounded-full ">
        <button title="Search button" type="submit" class="p-1">
            <ph-magnifying-glass :size="20" class="text-[#515151] hover:text-[#222222]" />
        </button>
        <input
            class="placeholder:italic placeholder:text-[#515151] block bg-transparent w-full focus:outline-none text-md lg:text-lg"
            :value="form.searchInput" @input="$emit('update:searchInput', $event.target.value)" type="text"
            placeholder="Search" name="search_recipe" id="">
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({ searchInput: '' })
const onSubmitHander = () => console.log(form)
</script> -->
<template>
    <form @submit.prevent="onSubmitHandler"
        class="flex flex-row gap-2 md:gap-4 border bg-[#FAFAFA] lg:px-4 lg:py-2 py-1 px-2 rounded-full ">
        <button title="Search button" type="submit" class="p-1">
            <ph-magnifying-glass :size="20" class="text-[#515151] hover:text-[#222222]" />
        </button>
        <input v-model="form.searchInput"
            class="placeholder:italic placeholder:text-[#515151] block bg-transparent w-full focus:outline-none text-md lg:text-lg"
            type="text" placeholder="Search" name="search_recipe" id="search_recipe">
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const form = reactive({ searchInput: '' })
const onSubmitHandler = () => router.push(`/recipe/s=${form.searchInput}`)
</script>
