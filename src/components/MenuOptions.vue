<template>
  <div class="z-30 w-56 text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-black/10 px-4 py-2 text-md font-medium text-white hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Cuisines
          <ph-caret-down
            :size="20"
            class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <template :key="strISO" v-for="{ strISO, strArea } in strAreaList.slice(0, 10)">
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="`/category/a=${strArea}`.toLowerCase()"
                  :class="[
                    active ? 'bg-color-accent text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-md font-body'
                  ]"
                >
                  <img
                    :src="`https://flagcdn.com/w20/${strISO.toLowerCase()}.webp`"
                    :alt="`flag of ${strArea} `"
                    srcset=""
                    class="mr-2"
                  />
                  {{ strArea }}
                </RouterLink>
              </MenuItem>
            </template>
          </div>
          <hr />
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-color-accent text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 pl-10 text-md font-body'
              ]"
            >
              View All
            </button>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { strAreaList } from '@/constants/strAreaList'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { RouterLink } from 'vue-router'
</script>
