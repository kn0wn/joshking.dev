<template>
  <div class="inline-block w-full">
    <div
      class="flex justify-between items-center bg-[#23272f] text-[#ffffff] text-sm px-4 py-2 rounded-t-md border-b border-[#2d323c]"
    >
      <span v-if="props.filename" class="font-bold">{{ props.filename }}</span>
      <span class="flex items-center gap-2">
        <span v-if="props.language" class="italic">{{ props.language }}</span>
        <button
          @click="copyCode"
          :aria-label="copied ? 'Copied!' : 'Copy code'"
          class="ml-2 px-2 py-1 rounded bg-[#23272f] hover:bg-blue-500/20 transition-colors border border-transparent hover:border-blue-500 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span v-if="!copied">Copy</span>
          <span v-else>Copied!</span>
        </button>
      </span>
    </div>
    <pre :class="($props.class || '') + ' mt-0 rounded-t-none'"><slot /></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps<{
  code: string;
  language: string | null;
  filename: string | null;
  highlights?: number[];
  meta?: string | null;
  class?: string | null;
}>();

const copied = ref(false);

function copyCode() {
  navigator.clipboard.writeText(props.code).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 1200);
  });
}
</script>

<style>
pre code .line {
  display: block;
}
</style>
