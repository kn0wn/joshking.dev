<script setup lang="ts">
const WHITESPACE_RE = /\s/;
const WHITESPACE_ONLY_RE = /^\s+$/;

interface Props {
  text: string;
  tag?: string;
  startIndex?: number;
  animation?: string;
  duration?: number;
  easing?: string;
  stagger?: number;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "span",
  startIndex: 0,
  animation: "slideUp",
  duration: 150,
  easing: "ease",
  stagger: 40,
});

const { delayMs } = useStreamDelay();

const wordCount = defineModel<number>("wordCount");

interface Token {
  text: string;
  isWord: boolean;
  index: number;
}

const tokens = computed((): Token[] => {
  const parts: string[] = [];
  let current = "";
  let inWhitespace = false;

  for (const char of props.text) {
    const isWs = WHITESPACE_RE.test(char);
    if (isWs !== inWhitespace && current) {
      parts.push(current);
      current = "";
    }
    current += char;
    inWhitespace = isWs;
  }
  if (current) parts.push(current);

  let wordIdx = props.startIndex;
  return parts.map((part) => {
    const isWord = !WHITESPACE_ONLY_RE.test(part);
    const token: Token = { text: part, isWord, index: isWord ? wordIdx : 0 };
    if (isWord) wordIdx++;
    return token;
  });
});

const totalWords = computed(() => tokens.value.filter((t) => t.isWord).length);

watch(
  totalWords,
  (val) => {
    if (wordCount.value !== undefined) wordCount.value = val;
  },
  { immediate: true }
);

function spanStyle(index: number): string {
  const delay = delayMs(index, props.stagger);
  return sdStyle({
    animation: props.animation,
    duration: props.duration,
    easing: props.easing,
    ...(delay > 0 ? { delay } : {}),
  });
}
</script>

<template>
  <component :is="tag">
    <template v-for="(token, i) in tokens" :key="i">
      <span v-if="token.isWord" data-sd-animate :style="spanStyle(token.index)">{{ token.text }}</span>
      <template v-else>{{ token.text }}</template>
    </template>
  </component>
</template>
