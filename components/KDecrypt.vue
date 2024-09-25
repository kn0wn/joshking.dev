<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

interface Props {
  tag?: keyof HTMLElementTagNameMap;
  classes?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "p",
  classes: "",
});

const slot = ref<HTMLElement | null>(null);
const textToEncrypt = ref("");
const encryptedText = ref("");

const CHAR_CODE_START = 32;
const CHAR_CODE_RANGE = 94;
const MAX_DELAY = 1000;

const getRandomChar = (): string => {
  return String.fromCharCode(
    Math.floor(Math.random() * CHAR_CODE_RANGE) + CHAR_CODE_START
  );
};

const decryptText = (): void => {
  encryptedText.value = textToEncrypt.value
    .split("")
    .map((char) => (char === " " ? " " : getRandomChar()))
    .join("");

  textToEncrypt.value.split("").forEach((char, index) => {
    if (char === " ") return;
    setTimeout(() => {
      encryptedText.value =
        encryptedText.value.substring(0, index) +
        char +
        encryptedText.value.substring(index + 1);
    }, Math.random() * MAX_DELAY);
  });
};

onMounted(() => {
  if (!slot.value) return;
  textToEncrypt.value = slot.value.textContent?.trim() ?? "";
  decryptText();
});

const componentClasses = computed(() => {
  return `transition-opacity duration-300 ${
    encryptedText.value ? "opacity-100" : "opacity-0"
  } ${props.classes}`;
});
</script>

<template>
  <component :is="props.tag" ref="slot" :class="componentClasses">
    <template v-if="encryptedText">
      {{ encryptedText }}
    </template>
    <slot v-else />
  </component>
</template>
