<script setup lang="ts">
import { useTimeoutFn } from "@vueuse/core";

const whoLoaded = ref(false);
const whereLoaded = ref(false);
const notableLoaded = ref(false);

const loadWho = useTimeoutFn(() => {
  whoLoaded.value = true;
}, 300);

const loadWhere = useTimeoutFn(() => {
  whereLoaded.value = true;
}, 900);

const loadNotable = useTimeoutFn(() => {
  notableLoaded.value = true;
}, 1500);

onMounted(() => {
  loadWho.start();
  loadWhere.start();
  loadNotable.start();
});

definePageMeta({
  title: "joshking.dev",
});

defineOgImageComponent("Default", {
  title: "joshking.dev",
  description: "Partnering with founders to create products of the future.",
});
</script>

<template>
  <div>
    <div class="px-4 py-2 grid grid-cols-1 gap-4">
      <Transition name="fade">
        <SectionsWho v-if="whoLoaded" />
      </Transition>

      <Transition name="fade">
        <SectionsWhere v-if="whereLoaded" />
      </Transition>
    </div>

    <Transition name="fade">
      <SectionsNotableWorks v-if="notableLoaded" />
    </Transition>
  </div>
</template>

<style lang="postcss" scoped></style>
