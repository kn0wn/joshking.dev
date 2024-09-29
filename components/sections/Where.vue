<script setup lang="ts">
interface WorkItem {
  company: string;
  role: string;
  website: string;
  timeline: string;
}

const work: WorkItem[] = [
  {
    company: "&above",
    role: "Technical Co-founder",
    website: "//andabove.com",
    timeline: "2023 - Present",
  },
  {
    company: "RCCO",
    role: "CTO",
    website: "//rcco.uk",
    timeline: "2019 - 2023",
  },
  {
    company: "Google",
    role: "Internal product development (Contractor)",
    website: "//www.thinkwithgoogle.com/",
    timeline: "2019 - Present",
  },
];
</script>

<template>
  <div>
    <KDecrypt tag="p" classes="text-sm text-grey mb-2">Where.</KDecrypt>

    <div class="space-y-4">
      <div v-for="item in work" :key="item.company" class="space-y-1">
        <KLink :href="item.website">
          {{ item.company }}
        </KLink>
        <div class="space-y-1">
          <KDecrypt tag="p" classes="text-sm">{{ item.role }}</KDecrypt>

          <KDecrypt classes="text-grey text-xs" tag="p">{{
            item.timeline
          }}</KDecrypt>
        </div>
      </div>
    </div>
  </div>
</template>
