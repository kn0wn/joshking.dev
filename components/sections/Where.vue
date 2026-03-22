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

const LABEL = "Where.";
const wLabel = countWords(LABEL);

const stream = useStreamCursor(() => props.startIndex ?? 0);
const labelStart = stream.next(wLabel);

const itemRefs = work.map((item) => ({
  ...item,
  companyStart: stream.next(countWords(item.company)),
  roleStart: stream.next(countWords(item.role)),
  timelineStart: stream.next(countWords(item.timeline)),
}));

const items = computed(() =>
  itemRefs.map((item) => ({
    company: item.company,
    role: item.role,
    website: item.website,
    timeline: item.timeline,
    companyStart: item.companyStart.value,
    roleStart: item.roleStart.value,
    timelineStart: item.timelineStart.value,
  }))
);

watch(stream.total, (val) => emit("update:wordCount", val), {
  immediate: true,
});

const { delayMs } = useStreamDelay();
</script>

<template>
  <div>
    <SdText
      text="Where."
      tag="p"
      class="text-sm text-grey mb-2"
      :start-index="labelStart"
    />

    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in items" :key="item.company" class="space-y-1">
        <KLink :href="item.website" :icon-delay="delayMs(item.roleStart)">
          <SdText
            :text="item.company"
            tag="span"
            :start-index="item.companyStart"
          />
        </KLink>
        <div class="space-y-1">
          <SdText
            :text="item.role"
            tag="p"
            class="text-sm"
            :start-index="item.roleStart"
          />
          <SdText
            :text="item.timeline"
            tag="p"
            class="text-grey text-xs"
            :start-index="item.timelineStart"
          />
        </div>
      </div>
    </div>
  </div>
</template>
