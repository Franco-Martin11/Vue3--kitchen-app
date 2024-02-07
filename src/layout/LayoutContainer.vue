<template>
  <NavigationHeaderContainer />
  <section class="flex flex-col min-h-[80.5vh] m-[0_auto] gap-4">
    <slot name="content"></slot>
  </section>
  <footer
    class="flex p-4 min-h-[48px] items-center justify-between flex-row gap-2 w-full bg-color-accent"
  >
    <RouterLink to="/" class="cursor-pointer">
      <h1 class="font-heading text-xl md:text-2xl text-white">KitchenPal</h1>
    </RouterLink>
  </footer>
</template>

<script setup lang="ts">
import NavigationHeaderContainer from '@/components/NavigationHeader/NavigationHeaderContainer.vue'
</script>
