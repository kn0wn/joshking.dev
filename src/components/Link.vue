<template>
  <a target="_blank" :href="props.link" class="link">
    <slot />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="arrow"
    >
      <path
        fill-rule="evenodd"
        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

// expects props options
const props = defineProps({
  link: String,
});
</script>

<style lang="postcss">
.link {
  @apply relative;

  &:after {
    content: "";
    z-index: -1;
    top: 100%;
    left: -0.1em;
    right: -0.1em;
    width: 25%;
    bottom: -10%;

    @apply absolute transition-all bg-blue-600;
  }

  &:hover {
    &:after {
      width: 110%;
    }

    & .arrow {
      transform: translateX(12px) rotate(45deg) translateY(-6px);
    }
  }

  & .arrow {
    @apply absolute top-0 right-0 w-3 h-3 transition-all delay-150;
    transform: translateX(12px) rotate(45deg);
  }
}
</style>
