<template>
  <main class="flex items-center w-screen h-screen border-t-4 border-blue-600">
    <div class="container px-8 mx-auto md:px-16 lg:px-44">
      <div class="flex justify-between">
        <div class="lg:w-1/2">
          <h1 class="mb-8 font-mono text-6xl text-gray-800 dark:text-white">
            👋 Hello
          </h1>
          <p class="mb-8 text-lg leading-6 text-gray-900 dark:text-gray-300">
            Web developer based in London. Specialising in front-end development
            and serverless technologies. Building online experiences for clients
            such as Google and Tesla. Engineering Lead at
            <Link link="//rcco.uk">RCCO</Link>.
          </p>
          <Github />
          <ul class="flex">
            <li
              v-for="{ name, link } in links"
              :key="`link-${name}`"
              class="mr-6"
            >
              <Link :link="link">{{ name }}</Link>
            </li>
          </ul>
        </div>
        <div class="hidden w-1/3 grid-cols-3 grid-rows-3 gap-4 2xl:grid">
          <div class="w-full h-full bg-blue-600 rounded" />
          <div
            class="w-full h-full col-start-2 row-start-2 border-2 border-blue-600 rounded"
          />
          <div
            class="w-full h-full col-start-3 row-start-3 bg-blue-600 rounded"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Link from "./components/Link.vue";
import Github from "./components/Github.vue";

import { ref } from "vue";

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

// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
