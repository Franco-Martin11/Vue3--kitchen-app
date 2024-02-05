<template>
  <div class="flex flex-col gap-4 flex-wrap">
    <IngredientsItems :amount="122" text="turkey mince" />
    <IngredientsItems :amount="122" text="turkey mince" />
    <IngredientsItems :amount="122" text="turkey mince" />
    <IngredientsItems :amount="122" text="turkey mince" />
    <IngredientsItems :amount="122" text="turkey mince" />
    <IngredientsItems :amount="122" text="turkey mince" />
  </div>
</template>

<script setup lang="ts">
import IngredientsItems from './IngredientsItems.vue'
</script>
