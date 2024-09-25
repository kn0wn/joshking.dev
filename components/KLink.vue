<script setup lang="ts">
interface Props {
  href: string;
  external?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  external: true,
});

const linkClass = computed(() => [
  "inline-flex items-center gap-x-1 rounded-sm px-1.5 transition-colors",
  "bg-blue-500/10 text-blue-500 hover:bg-blue-500/25 hover:text-blue-800",
]);
</script>

<template>
  <NuxtLink
    :to="props.href"
    :target="props.external ? '_blank' : undefined"
    :rel="props.external ? 'noopener noreferrer' : undefined"
    :class="linkClass"
  >
    <slot />
    <svg
      v-if="props.external"
      xmlns="http://www.w3.org/2000/svg"
      class="aspect-square h-4 w-4"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5 17.59 15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59Z"
      />
    </svg>
  </NuxtLink>
</template>

<script lang="ts">
// This script block is for declaring any additional TypeScript code if needed
</script>
