<script setup lang="ts">
const props = defineProps<{
  startIndex?: number;
}>();

const emit = defineEmits<{
  (e: "update:wordCount", val: number): void;
}>();

const { data } = await useAsyncData("notable-works", () =>
  queryCollection("notableWorks").first()
);

const projects = computed(() => {
  const list = data.value?.projects ?? [];
  return [...list].sort((a, b) => {
    const ao = a.order ?? Infinity;
    const bo = b.order ?? Infinity;
    if (ao !== bo) return ao - bo;
    return a.title.localeCompare(b.title);
  });
});

function countWords(s: string | undefined | null) {
  if (!s) return 0;
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const LABEL = "Works.";
const wLabel = countWords(LABEL);

const si = computed(() => props.startIndex ?? 0);

// Each project's word counts: title + role + description + period
const projectWordCounts = computed(() =>
  projects.value.map((p) =>
    countWords(p.title) +
    countWords(p.role) +
    countWords(p.description) +
    countWords(p.period)
  )
);

const totalWords = computed(
  () => wLabel + projectWordCounts.value.reduce((a, b) => a + b, 0)
);

watch(totalWords, (val) => emit("update:wordCount", val), { immediate: true });

function projectStart(idx: number) {
  let offset = 0;
  for (let i = 0; i < idx; i++) offset += projectWordCounts.value[i];
  return si.value + wLabel + offset;
}

function roleStart(idx: number) {
  return projectStart(idx) + countWords(projects.value[idx].title);
}

function descStart(idx: number) {
  return roleStart(idx) + countWords(projects.value[idx].role);
}

function periodStart(idx: number) {
  return descStart(idx) + countWords(projects.value[idx].description);
}
</script>

<template>
  <div class="px-4 py-2">
    <SdText text="Works." tag="p" class="text-sm text-grey mb-2" :start-index="si" />

    <div class="space-y-4">
      <div
        v-for="(project, idx) in projects"
        :key="project.title"
        class="space-y-1"
      >
        <SdText
          :text="project.title"
          tag="p"
          class="font-medium text-blue-500"
          :start-index="projectStart(idx)"
        />

        <div class="space-y-0.5">
          <SdText
            v-if="project.role"
            :text="project.role"
            tag="p"
            class="text-sm"
            :start-index="roleStart(idx)"
          />
          <SdText
            v-if="project.description"
            :text="project.description"
            tag="p"
            class="text-sm text-grey"
            :start-index="descStart(idx)"
          />
          <SdText
            v-if="project.period"
            :text="project.period"
            tag="p"
            class="text-grey text-xs tabular-nums"
            :start-index="periodStart(idx)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
