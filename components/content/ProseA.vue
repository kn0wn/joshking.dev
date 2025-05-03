<template>
  <KLink :href="props.href">
    <slot />
  </KLink>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: "",
  },
});
</script>
