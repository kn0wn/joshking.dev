<template>
  <main class="flex items-center w-screen h-screen border-t-4 border-blue-600">
    <div class="container px-16 mx-auto lg:px-44">
      <div class="flex items-center">
        <div class="lg:w-1/2">
          <h1 class="mb-8 font-mono text-6xl text-gray-800">
            👋 Hello, <br />
            <span class="text-5xl">My name is Josh King</span>
          </h1>
          <p class="mb-8 text-lg leading-6 text-gray-900">
            Web developer based in London. Specialising in
            <a target="_blank" href="//nuxtjs.org" class="underlined">
              Nuxt.js
            </a>
            and serverless technologies. Building online experiences for clients
            such as Google and Tesla. Engineering Lead at
            <a target="_blank" href="//rcco.uk" class="underlined">RCCO</a>.
          </p>
          <ul class="flex">
            <li
              v-for="{ name, link } in links"
              :key="`link-${name}`"
              class="mr-6"
            >
              <a :href="link" target="_blank" class="relative">
                {{ name }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="link"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
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

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="postcss">
.link {
  @apply absolute top-0 right-0 w-3 h-3;
  transform: translateX(12px) rotate(45deg);
}

.underlined {
  @apply transition-all bg-bottom bg-no-repeat px-1 cursor-pointer;
  background-image: linear-gradient(
    theme("colors.blue.500"),
    theme("colors.blue.500")
  );

  background-size: auto 10%;

  &:hover {
    background-size: auto 100%;
    @apply text-white rounded-sm;
  }
}
</style>
