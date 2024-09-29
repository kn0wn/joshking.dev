<script setup lang="ts">
// Use ref for reactive data
const now = ref(new Date());

// Computed properties for time
const hours = computed(() => now.value.getHours());
const minutes = computed(() => now.value.getMinutes());
const seconds = computed(() => now.value.getSeconds());

// Time formatting
const padNumber = (num: number): string => num.toString().padStart(2, "0");
const time = computed(
  () =>
    `${padNumber(hours.value)}:${padNumber(minutes.value)}:${padNumber(
      seconds.value
    )}`
);

// Setup timer
onMounted(() => {
  const interval = setInterval(() => {
    now.value = new Date();
  }, 1000);

  // Cleanup on component unmount
  onUnmounted(() => clearInterval(interval));
});
</script>

<template>
  <div class="grid grid-cols-2 px-4 py-2">
    <div class="flex items-center">
      <div class="flex items-center gap-x-2">
        <span class="relative flex h-3 w-3">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-sm bg-blue-500/75"
          />
          <span class="relative inline-flex h-3 w-3 rounded-sm bg-blue-500" />
        </span>
        <p class="text-xl">josh king</p>
        <div v-if="!$route.path.match(/^\/$/)">
          <KLink href="/" :external="false">Home</KLink>
        </div>
      </div>
    </div>
    <ClientOnly>
      <div class="flex items-center justify-between">
        <p class="text-xl tabular-nums">{{ time }}</p>
      </div>
    </ClientOnly>
  </div>
</template>
