<template>
  <div class="flex flex-row gap-2 items-start w-fit">
    <div class="d-grid justify-center items-center bg-slate-300 h-8 w-8 rounded-full font-bold">
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
