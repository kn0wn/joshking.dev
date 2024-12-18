<script setup lang="ts">
interface ContactItem {
  name: string;
  url: string;
}

const contact: ContactItem[] = [
  {
    name: "GitHub",
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
</script>

<template>
  <div class="mb-4 sm:mb-0">
    <KDecrypt tag="p" classes="text-sm text-grey mb-2">Who.</KDecrypt>
    <div class="flex flex-col space-y-2 justify-between h-full">
      <div class="space-y-2">
        <div>
          <KDecrypt tag="h1" classes="text-blue-500">
            Product interface engineer.
          </KDecrypt>
          <KDecrypt tag="p">
            Based in London, United Kingdom. Partnering with founders to create
            products of the future.
          </KDecrypt>
        </div>

        <div class="flex gap-x-2">
          <KLink v-for="item in contact" :key="item.name" :href="item.url">
            {{ item.name }}
          </KLink>
        </div>
      </div>
    </div>
  </div>
</template>
