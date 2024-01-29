<template>
  <NavigationHeaderContainer />
  <section class="flex flex-col min-h-screen m-[0_auto] gap-4">
    <slot name="content"></slot>
  </section>
</template>

<script setup lang="ts">
import NavigationHeaderContainer from '@/components/NavigationHeader/NavigationHeaderContainer.vue'
</script>
