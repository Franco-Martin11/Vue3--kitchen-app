<template>
  <div class="flex flex-col gap-0 text-center lg:text-start">
    <h5 class="font-body text-md text-bg-color">{{ props.heading }}</h5>
    <span class="font-body font-bold text-sm text-white">{{ props.info }}</span>
  </div>
</template>

<script setup lang="ts">
interface propsTypes {
  info: string
  heading: string
}
const props = defineProps<propsTypes>()
</script>
