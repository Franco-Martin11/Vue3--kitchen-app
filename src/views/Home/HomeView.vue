<template>
  <LayoutContainer>
    <template #content>
      <div v-motion-fade class="flex flex-wrap md:gap-4 justify-center flex-1 my-8 md:my-2 h-full">
        <HeaderTextContainer />
        <HeaderFigureContainer />
      </div>
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from '@/layout/LayoutContainer.vue'
import HeaderFigureContainer from './components/HeaderFigureContainer.vue'
import HeaderTextContainer from './components/HeaderTextContainer.vue'
</script>
