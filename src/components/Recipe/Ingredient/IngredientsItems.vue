<template>
  <div class="flex flex-row gap-2 items-center">
    <div class="p-1 rounded-full bg-color-accent">
      <ph-check class="text-white" :size="16" />
    </div>
    <div class="flex flex-row gap-2 text-md font-body">
      <span class="text-md font-body">{{ amountMeasure }}</span>
      <h4>{{ text }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface propsTypes {
  text: string
  amount: number
}
const props = defineProps<propsTypes>()
const amountMeasure = computed(() => `${props.amount}gr`)
</script>
