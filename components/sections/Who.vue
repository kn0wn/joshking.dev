<script setup lang="ts">
interface ContactItem {
  name: string;
  url: string;
  icon: string;
}

const props = defineProps<{
  startIndex?: number;
}>();

const emit = defineEmits<{
  (e: "update:wordCount", val: number): void;
}>();

const { linkedin, github } = useRuntimeConfig().public;

const contact: ContactItem[] = [
  { name: "GitHub", url: github, icon: "simple-icons:github" },
  { name: "LinkedIn", url: linkedin, icon: "simple-icons:linkedin" },
];

function countWords(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const LABEL = "Who.";
const HEADLINE = "Technical architect.";
const BODY =
  "Based in London, United Kingdom.";

const wLabel = countWords(LABEL);
const wHeadline = countWords(HEADLINE);
const wBody = countWords(BODY);
const wContacts = contact.length; // one word each

const totalWords = wLabel + wHeadline + wBody + wContacts;

watch(
  () => totalWords,
  (val) => emit("update:wordCount", val),
  { immediate: true }
);

const { delayMs } = useStreamDelay();

const si = computed(() => props.startIndex ?? 0);
const s1 = computed(() => si.value + wLabel);
const s2 = computed(() => s1.value + wHeadline);
const s3 = computed(() => s2.value + wBody);

function iconAnimateStyle(wordIndex: number) {
  const delay = delayMs(wordIndex);
  return `--sd-animation:sd-slideUp;--sd-duration:150ms;--sd-easing:ease;--sd-delay:${delay}ms`;
}
</script>

<template>
  <div class="mb-4 sm:mb-0">
    <SdText text="Who." tag="p" class="text-sm text-grey mb-2" :start-index="si" />
    <div class="grid grid-cols-2 gap-x-2 gap-y-2">
      <div class="space-y-2 min-w-0">
        <SdText
          :text="HEADLINE"
          tag="h1"
          class="text-blue-500"
          :start-index="s1"
        />
        <SdText :text="BODY" tag="p" :start-index="s2" />
      </div>
      <div
        class="flex flex-wrap gap-x-2 gap-y-2 items-end sm:items-start justify-start text-right sm:text-left"
      >
        <KLink
          v-for="(item, idx) in contact"
          :key="item.name"
          :href="item.url"
          :show-external-icon="false"
        >
          <span
            data-sd-animate
            class="inline-flex shrink-0"
            :style="iconAnimateStyle(s3 + idx)"
          >
            <Icon
              :name="item.icon"
              class="h-4 w-4"
              aria-hidden="true"
            />
          </span>
          <!-- <SdText :text="item.name" tag="span" :start-index="s3 + idx" /> -->
        </KLink>
      </div>
    </div>
  </div>
</template>
