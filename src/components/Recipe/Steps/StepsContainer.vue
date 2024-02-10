<template>
  <div class="flex flex-col p-4 md:p-8 flex-[1_1_375px] w-full gap-4 items-start">
    <TitleHeading heading-text=" How to make it" />

    <template :key="index" v-for="(description, index) in Instructions">
      <StepByStep :index="index" :description="description" />
    </template>
  </div>
</template>

<script setup lang="ts">
import TitleHeading from '@/components/TitleHeading.vue'
import StepByStep from './StepByStep.vue'
import { computed } from 'vue'
import type { Meal } from '@/types/api.data.response'
const props = defineProps<Pick<Meal, 'strInstructions'>>()

const Instructions = computed((): string[] => {
  return (
    props.strInstructions
      .split(/[\r\n.]+/) // Divide por '\r\n' o '.'
      // Filtra elementos no vacíos
      .filter((element) => element.trim() !== '')
      //Se agrega un punto al final de cada string
      .map((element) => element + '.')
  )
})
</script>
@/types/api.data.response
