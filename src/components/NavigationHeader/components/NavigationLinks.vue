<template>
  <nav class="hidden md:flex flex-1 justify-center flex-row gap-6 items-center font-body font-bold text-md text-white">
    <a href="/" target="_blank"> Recipes</a>
    <a href="/" target="_blank">Blog</a>
    <a href="/" target="_blank">Product</a>
    <a href="/" target="_blank">About</a>
  </nav>
  <MenuOptions />
  <SearchBar />
  <MenuDrawer />
</template>

<script setup lang="ts">
import MenuDrawer from '@/components/MenuDrawer.vue'
import MenuOptions from '@/components/MenuOptions.vue';
import SearchBar from '@/components/SearchBar.vue'
</script>

<style scoped></style>
