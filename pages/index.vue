<script setup lang="ts">
// Define types for work and contact items
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
  {
    company: "Keakie",
    role: "Front-end motion development",
    website: "//keakie.com",
    timeline: "",
  },
  {
    company: "Nozzle",
    role: "Full-stack development",
    website: "//nozzle.ai",
    timeline: "",
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
];

const { data: posts } = await useAsyncData("posts", () =>
  queryContent().find()
);
</script>

<template>
  <div>
    <div class="px-4 py-2 sm:grid sm:grid-cols-2">
      <div class="mb-4 sm:mb-0">
        <KDecrypt tag="p" classes="text-sm text-grey mb-2">Who.</KDecrypt>
        <div class="space-y-2">
          <div>
            <KDecrypt tag="h1" classes="text-blue-500">
              Product interface engineer.
            </KDecrypt>
            <KDecrypt tag="p">
              Based in London, United Kingdom. Partnering with founders to
              create products of the future.
            </KDecrypt>
          </div>

          <div class="flex gap-x-2">
            <KLink v-for="item in contact" :key="item.name" :href="item.url">
              {{ item.name }}
            </KLink>
          </div>
        </div>
      </div>

      <div>
        <KDecrypt tag="p" classes="text-sm text-grey mb-2">Where.</KDecrypt>

        <div class="space-y-4">
          <div v-for="item in work" :key="item.company" class="space-y-1">
            <KLink :href="item.website">
              {{ item.company }}
            </KLink>
            <div class="space-y-1">
              <KDecrypt tag="p" classes="text-sm">{{ item.role }}</KDecrypt>

              <KDecrypt classes="text-grey text-xs" tag="p">{{
                item.timeline
              }}</KDecrypt>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="posts && posts.length > 0" class="col-span-2 px-4 py-2">
      <KDecrypt tag="p" classes="text-sm text-grey mb-2">Memoir.</KDecrypt>
      <div class="space-y-2">
        <NuxtLink
          v-for="blog in posts"
          :key="blog._path"
          :to="blog._path"
          class="rounded-sm bg-grey/10 px-1 hover:bg-blue-500/10 hover:text-blue-500 transition-colors inline-flex w-full"
        >
          <p>{{ blog.title }}</p>
        </NuxtLink>
      </div>
    </div>

    <div class="my-2 px-4">
      <p class="text-xs text-grey">
        Built with <a href="//nuxt.com" class="text-blue-500">Nuxt</a>,
        <a href="//vuejs.org" class="text-blue-500">Vue</a> &
        <a
          href="//berkeleygraphics.com/typefaces/berkeley-mono/"
          class="text-blue-500"
          >BerkeleyMono</a
        >.
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
