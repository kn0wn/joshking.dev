<script setup lang="ts">
import { STREAM_DELAY_KEY, type StreamDelayConfig } from "~/composables/useStreamDelay";

const whoWordCount = ref(0);
const whereWordCount = ref(0);

const whereStart = computed(() => whoWordCount.value);
const notableStart = computed(() => whoWordCount.value + whereWordCount.value);

const streamDelay = computed<StreamDelayConfig>(() => ({
  worksStartIndex: notableStart.value,
  baseStagger: 40,
  worksStagger: 22,
}));

provide(STREAM_DELAY_KEY, streamDelay);

definePageMeta({
  title: "joshking.dev",
});

defineOgImageComponent("Default", {
  title: "joshking.dev",
  description: "Partnering with founders to create products of the future.",
});
</script>

<template>
  <div style="--sd-base-delay: 120ms">
    <div class="px-4 py-2 grid grid-cols-1 gap-4">
      <SectionsWho
        :start-index="0"
        @update:word-count="whoWordCount = $event"
      />
      <SectionsWhere
        :start-index="whereStart"
        @update:word-count="whereWordCount = $event"
      />
    </div>

    <SectionsNotableWorks
      :start-index="notableStart"
    />
  </div>
</template>

<style lang="postcss" scoped></style>
