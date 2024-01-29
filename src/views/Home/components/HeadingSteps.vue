<template>
  <div class="flex flex-col gap-4 justify-start items-start">
    <h1 class="text-black font-heading text-2xl">How to make it</h1>
    <div class="flex flex-col gap-4 items-start w-full lg:w-3/4">
      <StepByStep
        :index="1"
        description="Using a teaspoon, mix all the ingredientes together in a food containes or a medium sizen mixing bowl"
      />
      <StepByStep
        :index="2"
        description="Using a teaspoon, mix all the ingredientes together in a food containes or a medium sizen mixing bowl"
      />
      <StepByStep
        :index="3"
        description="Using a teaspoon, mix all the ingredientes together in a food containes or a medium sizen mixing bowl"
      />
      <StepByStep
        :index="4"
        description="Using a teaspoon, mix all the ingredientes together in a food containes or a medium sizen mixing bowl"
      />
      <StepByStep
        :index="5"
        description="Using a teaspoon, mix all the ingredientes together in a food containes or a medium sizen mixing bowl"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import StepByStep from './StepByStep.vue'
</script>
