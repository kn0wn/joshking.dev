<script setup lang="ts">
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
</script>

<template>
  <div class="px-4 py-2">
    <KDecrypt tag="p" classes="text-sm text-grey mb-2">Works.</KDecrypt>

    <div class="space-y-4">
      <div
        v-for="project in projects"
        :key="project.title"
        class="space-y-1"
      >
        <KLink v-if="project.href" :href="project.href">
          {{ project.title }}
        </KLink>
        <KDecrypt v-else tag="p" classes="font-medium">{{ project.title }}</KDecrypt>

        <div class="space-y-0.5">
          <KDecrypt v-if="project.role" tag="p" classes="text-sm">{{ project.role }}</KDecrypt>
          <KDecrypt v-if="project.description" tag="p" classes="text-sm text-grey">{{ project.description }}</KDecrypt>
          <KDecrypt v-if="project.period" classes="text-grey text-xs tabular-nums" tag="p">{{ project.period }}</KDecrypt>
        </div>
      </div>
    </div>
  </div>
</template>
