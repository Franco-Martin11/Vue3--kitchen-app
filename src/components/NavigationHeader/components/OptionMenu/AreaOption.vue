<template>
  <MenuOptions title-menu="Cuisines" :view-all="true">
    <template #menu-item>
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
                class="mr-2 min-w-[20px]"
              />
              {{ strArea }}
            </RouterLink>
          </MenuItem>
        </template>
      </div>
    </template>
  </MenuOptions>
</template>

<script setup lang="ts">
import MenuOptions from '@/components/MenuOptions.vue'
import { strAreaList } from '@/constants/strAreaList'
import { MenuItem } from '@headlessui/vue'
</script>
