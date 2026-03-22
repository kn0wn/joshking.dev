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

const LABEL = "Works.";
const wLabel = countWords(LABEL);

const si = computed(() => props.startIndex ?? 0);

const projectStarts = computed(() => {
  let cursor = si.value + wLabel;
  return projects.value.map((p) => {
    const titleStart = cursor;
    const roleStart = titleStart + countWords(p.title);
    const descStart = roleStart + countWords(p.role);
    const periodStart = descStart + countWords(p.description);
    cursor = periodStart + countWords(p.period);
    return {
      title: titleStart,
      role: roleStart,
      desc: descStart,
      period: periodStart,
    };
  });
});

const totalWords = computed(() => {
  const last = projectStarts.value.at(-1);
  const lastProject = projects.value.at(-1);
  if (!last || !lastProject) return wLabel;
  return last.period + countWords(lastProject.period) - si.value;
});

watch(totalWords, (val) => emit("update:wordCount", val), { immediate: true });
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
          :start-index="projectStarts[idx]!.title"
        />

        <div class="space-y-0.5">
          <SdText
            v-if="project.role"
            :text="project.role"
            tag="p"
            class="text-sm"
            :start-index="projectStarts[idx]!.role"
          />
          <SdText
            v-if="project.description"
            :text="project.description"
            tag="p"
            class="text-sm text-grey"
            :start-index="projectStarts[idx]!.desc"
          />
          <SdText
            v-if="project.period"
            :text="project.period"
            tag="p"
            class="text-grey text-xs tabular-nums"
            :start-index="projectStarts[idx]!.period"
          />
        </div>
      </div>
    </div>
  </div>
</template>
