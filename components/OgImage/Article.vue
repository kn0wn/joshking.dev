<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: "title",
    description: "description",
  }
);
</script>

<template>
  <div
    class="h-full w-full flex items-start justify-start border-solid bg-[#ffffff] border-blue-500 border-[12px] rounded-3xl"
  >
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <div class="px-20 pt-20">
          <h1 class="text-4xl font-black text-left">{{ title }}</h1>
        </div>
        <div class="px-20 pb-10 flex flex-col">
          <div>
            <h4
              class="font-mono text-4xl text-blue-500 bg-blue-500/10 rounded-md px-4 py-2"
            >
              Product Interface Engineer
            </h4>
          </div>
          <p class="text-[1.5rem] font-black text-left font-">
            {{ description }}
          </p>
          <p class="text-[1.5rem] font-bold mb-0">joshking.dev</p>
        </div>
      </div>
    </div>
  </div>
</template>
