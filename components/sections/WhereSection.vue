<script setup lang="ts">
interface WorkItem {
  company: string;
  role: string;
  website: string;
  timeline: string;
}

defineProps<{
  work: WorkItem[];
}>();
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
