<script setup lang="ts">
interface WorkItem {
  company: string;
  role: string;
  website: string;
  timeline: string;
}

const props = defineProps<{
  startIndex?: number;
}>();

const emit = defineEmits<{
  (e: "update:wordCount", val: number): void;
}>();

const work: WorkItem[] = [
  {
    company: "&above",
    role: "Technical Co-founder",
    website: "//andabove.com",
    timeline: "2023 - Present",
  },
  {
    company: "RCCO",
    role: "Chief Technology Officer",
    website: "//rcco.uk",
    timeline: "2019 - 2023",
  },
  {
    company: "Google",
    role: "Product Interface Engineer",
    website: "//www.thinkwithgoogle.com/",
    timeline: "2019",
  },
];

function countWords(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const LABEL = "Where.";
const wLabel = countWords(LABEL);

// Precompute word counts per item and cumulative offsets
const itemWordCounts = work.map((item) =>
  countWords(item.company) + countWords(item.role) + countWords(item.timeline)
);
const totalWords = wLabel + itemWordCounts.reduce((a, b) => a + b, 0);

watch(
  () => totalWords,
  (val) => emit("update:wordCount", val),
  { immediate: true }
);

const { delayMs } = useStreamDelay();

const si = computed(() => props.startIndex ?? 0);
const sLabel = computed(() => si.value + wLabel);

function itemStartIndex(idx: number) {
  let offset = 0;
  for (let i = 0; i < idx; i++) offset += itemWordCounts[i];
  return sLabel.value + offset;
}

function roleStart(idx: number) {
  return itemStartIndex(idx) + countWords(work[idx].company);
}

function timelineStart(idx: number) {
  return roleStart(idx) + countWords(work[idx].role);
}
</script>

<template>
  <div>
    <SdText text="Where." tag="p" class="text-sm text-grey mb-2" :start-index="si" />

    <div class="grid grid-cols-3 gap-4">
      <div v-for="(item, idx) in work" :key="item.company" class="space-y-1">
        <KLink :href="item.website" :icon-delay="delayMs(roleStart(idx))">
          <SdText :text="item.company" tag="span" :start-index="itemStartIndex(idx)" />
        </KLink>
        <div class="space-y-1">
          <SdText :text="item.role" tag="p" class="text-sm" :start-index="roleStart(idx)" />
          <SdText
            :text="item.timeline"
            tag="p"
            class="text-grey text-xs"
            :start-index="timelineStart(idx)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
