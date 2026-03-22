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

const LABEL = "Who.";
const HEADLINE = "Technical architect.";
const BODY = "Based in London, United Kingdom.";

const wLabel = countWords(LABEL);
const wHeadline = countWords(HEADLINE);
const wBody = countWords(BODY);
const wContacts = contact.length; // one word each

const stream = useStreamCursor(() => props.startIndex ?? 0);
const labelStart = stream.next(wLabel);
const headlineStart = stream.next(wHeadline);
const bodyStart = stream.next(wBody);
const contactsStart = stream.next(wContacts);

watch(stream.total, (val) => emit("update:wordCount", val), {
  immediate: true,
});

const { delayMs } = useStreamDelay();

function iconAnimateStyle(idx: number) {
  return sdStyle({ delay: delayMs(contactsStart.value + idx) });
}
</script>

<template>
  <div class="mb-4 sm:mb-0">
    <SdText
      text="Who."
      tag="p"
      class="text-sm text-grey mb-2"
      :start-index="labelStart"
    />
    <div class="grid grid-cols-2 gap-x-2 gap-y-2">
      <div class="space-y-2 min-w-0">
        <SdText
          :text="HEADLINE"
          tag="h1"
          class="text-blue-500"
          :start-index="headlineStart"
        />
        <SdText :text="BODY" tag="p" :start-index="bodyStart" />
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
            :style="iconAnimateStyle(idx)"
          >
            <Icon
              :name="item.icon"
              class="h-4 w-4"
              aria-hidden="true"
            />
          </span>
        </KLink>
      </div>
    </div>
  </div>
</template>
