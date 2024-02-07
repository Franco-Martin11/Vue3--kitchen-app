
<template>
    <button :class="[
        active ? 'bg-color-accent text-white' : 'text-gray-900',
        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
    ]">
        <!-- <MoveIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> -->
        <img :src="urlFlagPrefix" :alt="`flag of ${props.strArea.strArea} `" srcset="">
        {{ props.strArea.strArea }}
    </button>
</template>

<script setup lang="ts">
import type { strArea } from '@/constants/strAreaList';
import { computed } from 'vue';
const props = defineProps<{ active: any, strArea: strArea }>()
const urlFlagPrefix = computed(() => `https://flagcdn.com/w20/${props.strArea.strISO}.webp`)
</script>
