<template>
  <main class="flex items-center w-screen h-screen border-t-4 border-blue-600">
    <div class="container px-8 mx-auto md:px-16 lg:px-44">
      <div class="flex justify-between">
        <div class="lg:w-1/2 transition">
          <h1 class="mb-8 font-mono text-6xl text-gray-800 dark:text-white">
            🤖
          </h1>

          <transition name="fade">
            <p
              v-show="stage >= 500"
              class="mb-8 text-lg leading-6 text-gray-900 dark:text-gray-100"
            >
              Web developer based in London. Specialising in front-end
              development and serverless technologies. Building online
              experiences for clients such as Google and Tesla. Chief Technology
              Officer at
              <Link link="//rcco.uk">RCCO</Link>.
            </p>
          </transition>
          <transition name="fade">
            <div v-show="stage >= 1000">
              <Github />
            </div>
          </transition>
          <!-- <router-link
            class="mb-8 items-center border border-blue-600 inline-flex p-2 rounded group"
            to="/snippets"
          >
            <p class="text-white mr-2">Snippets</p>
            <div
              class="rounded-full transition-transform group-hover:(transform -translate-y-1) bg-blue-600 px-2 text-xs text-white"
            >
              New
            </div>
          </router-link> -->
          <transition name="fade">
            <ul v-show="stage >= 1500" class="flex">
              <li
                v-for="{ name, link } in links"
                :key="`link-${name}`"
                class="mr-6"
              >
                <Link :link="link">{{ name }}</Link>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Link from "~/components/Link.vue";
import Github from "~/components/Github.vue";

import { ref, onMounted } from "vue";

const links = ref([
  {
    name: "Github",
    link: "https://github.com/kn0wn",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/kn0wndev",
  },
]);

const stage = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (stage.value >= 1500) clearInterval(interval);

    stage.value += 500;
  }, 500);
});

// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="postcss">
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-500;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 transform translate-y-5;
}
</style>
