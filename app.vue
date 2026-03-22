<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div class="w-screen py-8 font-sans selection:bg-blue-500/50" style="-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;">
    <div class="container mx-auto max-w-screen-md">
      <KNavigation />
      <NuxtPage />
      <footer class="px-4 py-6">
        <p
          class="text-xs text-grey"
          data-sd-animate
          style="--sd-animation:sd-slideUp;--sd-duration:400ms;--sd-easing:ease;--sd-delay:3200ms"
        >
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
  @apply transition-opacity duration-500 ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

@keyframes sd-fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes sd-slideUp {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes sd-blurIn {
  from { opacity: 0; filter: blur(4px); }
  to   { opacity: 1; filter: blur(0); }
}

[data-sd-animate] {
  opacity: 0;
  animation: var(--sd-animation, sd-slideUp)
             var(--sd-duration, 150ms)
             var(--sd-easing, ease)
             both;
  animation-delay: calc(var(--sd-delay, 0ms) + var(--sd-base-delay, 0ms));
}

@media (prefers-reduced-motion: reduce) {
  [data-sd-animate] {
    opacity: 1;
    animation: none;
  }
}
</style>
