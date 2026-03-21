<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div class="w-screen py-8 font-sans selection:bg-blue-500/50" style="-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;">
    <div class="container mx-auto max-w-screen-md">
      <KNavigation />
      <NuxtPage />
      <footer class="px-4 py-6">
        <p class="text-xs text-grey">
          Built with
          <a target="_blank" href="//nuxt.com" class="text-blue-500">Nuxt</a>.
          Font <a target="_blank" href="//vercel.com/font" class="text-blue-500">Geist</a>.
          Deployed on <a target="_blank" href="//vercel.com" class="text-blue-500">Vercel</a>.
        </p>
      </footer>
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
