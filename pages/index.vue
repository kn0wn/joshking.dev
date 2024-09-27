<script setup lang="ts">
import WhoSection from "../components/sections/WhoSection.vue";
import WhereSection from "../components/sections/WhereSection.vue";
import MemoirSection from "../components/sections/MemoirSection.vue";

import { useTimeoutFn } from "@vueuse/core";

interface WorkItem {
  company: string;
  role: string;
  website: string;
  timeline: string;
}

interface ContactItem {
  name: string;
  url: string;
}

const work: WorkItem[] = [
  {
    company: "&above",
    role: "Technical Co-founder",
    website: "//andabove.com",
    timeline: "2019 - Present",
  },
  {
    company: "Google",
    role: "Internal product development",
    website: "//blog.google/products/marketingplatform/360/",
    timeline: "2019 - Present",
  },
];

const contact: ContactItem[] = [
  {
    name: "Github",
    url: "//github.com/kn0wn",
  },
  {
    name: "𝕏",
    url: "//x.com/josh_fyi",
  },
  {
    name: "LinkedIn",
    url: "//linkedin.com/in/josh-king-connect",
  },
];

const { data: allPosts } = await useAsyncData("posts", () =>
  queryContent().find()
);

const posts = allPosts.value?.filter((post) => post.draft === false) || [];

// Use ref for component visibility
const whoLoaded = ref(false);
const whereLoaded = ref(false);
const memoirLoaded = ref(false);

// Use useTimeoutFn for delayed loading
const loadWho = useTimeoutFn(() => {
  whoLoaded.value = true;
}, 300);

const loadWhere = useTimeoutFn(() => {
  whereLoaded.value = true;
}, 900);

const loadMemoir = useTimeoutFn(() => {
  memoirLoaded.value = true;
}, 1500);

onMounted(() => {
  loadWho.start();
  loadWhere.start();
  loadMemoir.start();
});
</script>

<template>
  <div>
    <div class="px-4 py-2 sm:grid sm:grid-cols-2">
      <Transition name="fade">
        <WhoSection v-if="whoLoaded" :contact="contact" />
      </Transition>

      <Transition name="fade">
        <WhereSection v-if="whereLoaded" :work="work" />
      </Transition>
    </div>

    <Transition name="fade">
      <MemoirSection v-if="memoirLoaded" :posts="posts" />
    </Transition>
  </div>
</template>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-500 ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
