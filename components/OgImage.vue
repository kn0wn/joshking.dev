<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-between p-8 bg-gradient-to-br from-blue-500 to-blue-700"
  >
    <div class="flex-1 flex flex-col justify-center">
      <h1 class="text-4xl font-bold text-white mb-4">{{ title }}</h1>
      <p class="text-xl text-blue-100">{{ description }}</p>
    </div>
    <div class="flex items-center justify-between">
      <div class="text-white">
        <p class="text-sm">joshking.dev</p>
      </div>
      <div class="text-white text-sm">
        <p>Partnering with founders to create products of the future</p>
      </div>
    </div>
  </div>
</template>
