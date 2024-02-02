
<template>
    <div class="flex flex-col  py-8  flex-[1_1_375px] w-full gap-4 items-start">
        <TitleHeading :heading-text="titleHeading" />
        <slot name="section-container"></slot>
    </div>
</template>

<script setup lang="ts">
import TitleHeading from '@/components/TitleHeading.vue';
defineProps<{ titleHeading: string }>()

</script>
