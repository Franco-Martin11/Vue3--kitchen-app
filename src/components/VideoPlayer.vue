<template>
  <div class="max-w-[560px] min-w-[335px] min-h-[315px] p-1 my-4 w-full mx-auto flex">
    <div class="flex justify-center w-full mx-auto">
      <YoutubeVue3 ref="youtube" :videoid="idVideoUrl" :autoplay="0" :width="480" :height="320" :loop="0" :controls="1"  />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Meal } from '@/types/apiData'
import { computed } from 'vue'
import { YoutubeVue3 } from 'youtube-vue3'
const props = defineProps<Pick<Meal, 'strYoutube'>>()
const idVideoUrl = computed(() => props.strYoutube.split(/[v=]+/)[1])
</script>
