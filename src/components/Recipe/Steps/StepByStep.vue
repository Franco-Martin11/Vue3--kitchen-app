<template>
  <div class="flex flex-row gap-2 items-center w-fit">
    <div class="d-grid shrink-0 justify-center items-center bg-slate-300 h-6 w-6 rounded-full font-bold">
      <span>
        {{ props.index }}
      </span>
    </div>
    <p class="text-md font-body">{{ props.description }}</p>
  </div>
</template>

<script setup lang="ts">
interface propsData {
  index: number
  description: string
}
const props = defineProps<propsData>()
</script>
