<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div class="w-screen py-8 font-mono selection:bg-blue-500/50">
    <div class="container mx-auto max-w-screen-md">
      <KNavigation />
      <NuxtPage />
      <SpeedInsights />
    </div>
  </div>
</template>

<style lang="postcss">
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-500 ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
