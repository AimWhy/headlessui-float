<template>
  <Block title="Menu (Dropdown) with High-Order Component" title-class="text-indigo-400">
    <Menu>
      <HighOrderFloat placement="bottom-end">
        <MenuButton class="flex justify-center items-center px-5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-500 text-sm rounded-md">
          Options
        </MenuButton>

        <MenuItems class="w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden focus:outline-none">
          <MenuItem v-slot="{ active }">
            <button type="button" class="block w-full px-4 py-1.5 text-left text-sm" :class="{ 'bg-indigo-500 text-white': active }">
              Account settings
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button type="button" class="block w-full px-4 py-1.5 text-left text-sm" :class="{ 'bg-indigo-500 text-white': active }">
              Documentation
            </button>
          </MenuItem>
          <MenuItem disabled>
            <span class="block w-full px-4 py-1.5 text-left text-sm opacity-50 cursor-default">
              Invite a friend (coming soon!)
            </span>
          </MenuItem>
        </MenuItems>
      </HighOrderFloat>
    </Menu>
  </Block>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import HighOrderFloat from '@/components/HighOrderFloat.vue'
import Block from '@/components/Block.vue'
</script>
