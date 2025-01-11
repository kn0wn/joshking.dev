<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div
    class="relative h-full w-full flex items-start justify-start border-solid bg-[#ffffff] border-blue-500 border-[12px] rounded-3xl"
  >
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <div class="p-20 flex flex-col">
          <div>
            <h1
              class="text-6xl text-blue-500 bg-blue-500/10 rounded-md px-4 py-2"
            >
              Product Interface Engineer
            </h1>
          </div>
          <p class="text-4xl font-black text-left">
            Partnering with founders to create products of the future
          </p>
        </div>

        <p class="text-2xl pb-10 px-20 font-bold mb-0">joshking.dev</p>
      </div>
    </div>
  </div>
</template>
