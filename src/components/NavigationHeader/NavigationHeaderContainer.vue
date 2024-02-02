<template>
  <header class="flex p-2 md:p-4 min-h-[48px] items-center flex-row gap-2 w-full bg-color-accent">
    <h1 class="font-heading text-xl md:text-2xl text-white">KitchenPal</h1>
    <NavigationLinks />
  </header>
</template>

<script setup lang="ts">
import NavigationLinks from './components/NavigationLinks.vue'
</script>

<style scoped></style>
