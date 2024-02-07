<template>
  <header
    class="flex p-4 min-h-[48px] items-center justify-between flex-row gap-2 sm:gap-4 w-full bg-color-accent"
  >
    <RouterLink to="/" class="cursor-pointer">
      <h1 class="font-heading text-xl md:text-2xl text-white">KitchenPal</h1>
    </RouterLink>
    <NavigationLinks />
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavigationLinks from './components/NavigationLinks.vue'
</script>

<style scoped></style>
