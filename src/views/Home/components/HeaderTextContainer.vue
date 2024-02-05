<template>
  <div
    class="flex flex-[1_0_375px] max-w-2xl px-4 py-8 mt-2 lg:mt-0 flex-col gap-4 justify-center items-center lg:items-start text-center lg:text-start"
  >
    <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl max-w-[800px]">
      Let´s Start Cooking With Popoular Recipes
    </h1>
    <p class="font-body text-xl lg:w-1/2">
      Want to learn cook but confused how to start? No need to worry again!
    </p>
    <div class="flex flex-row gap-4 font-body font-bold text-lg capitalize">
      <RouterLink class="hover:border-red-400 border-b-2 border-transparent" to="/"
        >Explore Menu</RouterLink
      >
      <RouterLink class="hover:border-red-400 border-b-2 border-transparent" to="/product"
        >All Recipes</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>
