<script setup></script>

<template>
  <div class="w-screen py-8 font-mono selection:bg-blue-500/50">
    <div class="container mx-auto max-w-screen-md">
      <KNavigation />
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.page-enter-active,
.page-leave-active {
  @apply transition-opacity duration-300;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0 blur-sm;
}
</style>
