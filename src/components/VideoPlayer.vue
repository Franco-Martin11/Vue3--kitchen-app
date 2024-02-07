<template>
  <div class="max-w-[560px] min-h-[315px] p-1 my-4 w-full mx-auto">
    <div class="hidden sm:flex justify-center w-full mx-auto">
      <YoutubeVue3
        ref="youtube"
        :videoid="idVideoUrl"
        :width="480"
        :height="320"
        :loop="1"
        :controls="1"
      />
    </div>
    <div class="sm:hidden flex justify-center w-full mx-auto">
      <YoutubeVue3
        ref="youtube"
        :videoid="idVideoUrl"
        :width="375"
        :height="320"
        :loop="1"
        :controls="1"
      />
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
