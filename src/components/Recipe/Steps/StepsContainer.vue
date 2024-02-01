
<template>
    <div class="flex flex-col  p-8  flex-[1_1_375px] h-full w-full gap-4 items-start">
        <TitleHeading heading-text=" How to make it" />
        <StepByStep :index="1"
            description="Using a teaspoon, mix all the ingredientes together in a food containes or a medium sizen mixing bowl" />
        <StepByStep :index="2"
            description="Using a teaspoon, mix all the ingredientes together in a food containes or a medium sizen mixing bowl" />
        <StepByStep :index="3"
            description="Using a teaspoon, mix all the ingredientes together in a food containes or a medium sizen mixing bowl" />
        <StepByStep :index="4"
            description="Using a teaspoon, mix all the ingredientes together in a food containes or a medium sizen mixing bowl" />
        <StepByStep :index="5"
            description="Using a teaspoon, mix all the ingredientes together in a food containes or a medium sizen mixing bowl" />
    </div>
</template>

<script setup lang="ts">
import TitleHeading from '@/components/TitleHeading.vue';
import StepByStep from './StepByStep.vue';


</script>
