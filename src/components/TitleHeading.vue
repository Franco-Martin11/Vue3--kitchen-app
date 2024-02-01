
<template>
    <h1 class="font-heading text-black text-2xl">
        {{ headingText }}
    </h1>
</template>

<script setup lang="ts">
defineProps<{ headingText: string }>()
</script>
