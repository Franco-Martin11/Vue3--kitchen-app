<template>
  <nav
    class="hidden lg:flex flex-1 justify-center flex-row gap-6 items-center font-body text-md text-white min-h-[48px] h-full"
  >
    <RouterLink to="/"> Recipes</RouterLink>
    <RouterLink to="/">Blog</RouterLink>
    <RouterLink to="/">Product</RouterLink>
    <CategoryOption />
    <AreaOption />
    <a href="/" target="_blank">About</a>
  </nav>
  <SearchBar />

  <div class="lg:hidden">
    <MenuDrawer>
      <template #menuOptions>
        <div class="flex flex-col w-full gap-4">
          <CategoryOption />
          <AreaOption />
        </div>
      </template>
    </MenuDrawer>
  </div>
</template>

<script setup lang="ts">
import MenuDrawer from '@/components/MenuDrawer.vue'
import SearchBar from '@/components/SearchBar.vue'
import CategoryOption from './OptionMenu/CategoryOption.vue'
import AreaOption from './OptionMenu/AreaOption.vue'
import { RouterLink } from 'vue-router'
</script>
