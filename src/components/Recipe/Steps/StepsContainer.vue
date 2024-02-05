<template>
  <div class="flex flex-col p-4 md:p-0 md:py-8 flex-[1_1_375px] w-full gap-4 items-start">
    <TitleHeading heading-text=" How to make it" />

    <template :key="index" v-for="{ description, index } in DataStep">
      <StepByStep :index="index" :description="description" />
    </template>
  </div>
</template>

<script setup lang="ts">
import TitleHeading from '@/components/TitleHeading.vue'
import StepByStep from './StepByStep.vue'
import { Steps as DataStep } from '@/constants/Steps'
</script>
