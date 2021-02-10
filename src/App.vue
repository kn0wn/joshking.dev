<template>
  <main class="flex items-center w-screen h-screen border-t-4 border-blue-600">
    <div class="container px-8 mx-auto md:px-16 lg:px-44">
      <div class="flex items-center">
        <div class="lg:w-1/2">
          <h1 class="mb-8 font-mono text-6xl text-gray-800">👋 Hello</h1>
          <p class="mb-8 text-lg leading-6 text-gray-900">
            Web developer based in London. Specialising in front-end development
            and serverless technologies. Building online experiences for clients
            such as Google and Tesla. Engineering Lead at
            <Link link="//rcco.uk">RCCO</Link>
          </p>
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
      </div>
    </div>
  </main>
</template>

<script setup>
import Link from "./components/Link.vue";

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
