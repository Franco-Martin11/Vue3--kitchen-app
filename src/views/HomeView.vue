<template>
  <section class="min-h-screen m-[0_auto] bg-color-accent flex flex-col gap-4">
    <NavigationHeaderContainer />
    <article class="mt-4 flex flex-col gap-8 w-full">
      <div class="flex px-4 flex-row gap-4 w-full h-fit relative">

        <div class="flex flex-1 flex-col gap-4">
          <p class="font-body text-md text-bg-gray">Recipes > Turkey burger with seet potatos fries</p>
          <h2 class="font-heading text-6xl text-white max-w-[800px]">Turkey burger with seet potatos fries</h2>

          <div class="flex flex-row gap-2 wrap items-center">

            <div class="flex flex-row gap-6 w-full">
              <BagdeInstruction :heading="'Total Time'" :info="'30m'" />
              <BagdeInstruction :heading="'Prep Time'" :info="'30m'" />
              <BagdeInstruction :heading="'Chill Time'" :info="'30m'" />
              <BagdeInstruction :heading="'Cook Time'" :info="'30m'" />
            </div>
            <div class="flex flex-col">
              <p class="font-body text-md text-bg-color">Total Reviews</p>
              <div class="flex flex-row gap-4 font-heading text-xl text-yellow-500">
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p>☆</p>
                <p>☆</p>
              </div>
            </div>
          </div>
        </div>

        <picture class="flex-1">
          <img src="/HeaderIMage.jpg" class="h-96 w-96 absolute top-0 right-4" />
        </picture>

      </div>
      <div class="w-full h-72 bg-bg-color"></div>
      <!-- <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
        <div class="space-y-2">
          <RadioGroupOption as="template" v-for="plan in plans" :key="plan.name" :value="plan"
            v-slot="{ active, checked }">
            <div :class="[
              active ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300' : '',
              checked ? 'bg-sky-500/75 text-white ' : 'bg-white '
            ]" class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none">
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel as="p" :class="checked ? 'text-white' : 'text-gray-900'"
                      class="font-medium font-display">
                      {{ plan.name }}
                    </RadioGroupLabel>
                    <RadioGroupDescription as="span" :class="checked ? 'text-sky-100' : 'text-gray-500'"
                      class="inline font-body">
                      <span> {{ plan.ram }}/{{ plan.cpus }}</span>
                      <span aria-hidden="true"> &middot; </span>
                      <span>{{ plan.disk }}</span>
                    </RadioGroupDescription>
                  </div>
                </div>
                <div v-show="checked" class="shrink-0 text-white">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                    <path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup> -->
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption
} from '@headlessui/vue'
import NavigationHeaderContainer from '@/components/NavigationHeader/NavigationHeaderContainer.vue';
import BagdeInstruction from '@/components/BagdeInstruction.vue';

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk'
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk'
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk'
  }
]

const selected = ref(plans[0])
</script>
