<script setup lang="ts">
import { useTimeoutFn } from "@vueuse/core";

// Use ref for component visibility
const whoLoaded = ref(false);
const whereLoaded = ref(false);
const memoirLoaded = ref(false);

// Use useTimeoutFn for delayed loading
const loadWho = useTimeoutFn(() => {
  whoLoaded.value = true;
}, 300);

const loadWhere = useTimeoutFn(() => {
  whereLoaded.value = true;
}, 900);

const loadMemoir = useTimeoutFn(() => {
  memoirLoaded.value = true;
}, 1500);

onMounted(() => {
  loadWho.start();
  loadWhere.start();
  loadMemoir.start();
});

defineOgImageComponent("Default", {
  title: "joshking.dev",
  description: "Partnering with founders to create products of the future.",
});
</script>

<template>
  <div>
    <div class="px-4 py-2 sm:grid sm:grid-cols-2">
      <Transition name="fade">
        <SectionsWho v-if="whoLoaded" />
      </Transition>

      <Transition name="fade">
        <SectionsWhere v-if="whereLoaded" />
      </Transition>
    </div>

    <Transition name="fade">
      <SectionsMemoir v-if="memoirLoaded" />
    </Transition>
  </div>
</template>

<style lang="postcss" scoped></style>
