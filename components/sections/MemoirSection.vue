<script setup lang="ts">
defineProps<{
  posts: any[];
}>();

function formatDate(date: string) {
  return new Date(date).toISOString().split("T")[0];
}
</script>

<template>
  <div class="px-4 py-2 space-y-2">
    <KDecrypt tag="p" classes="text-sm text-grey">Memoir.</KDecrypt>
    <div class="space-y-2">
      <NuxtLink
        v-for="blog in posts"
        :key="blog._path"
        :to="blog._path"
        class="rounded-sm items-center space-x-2 bg-grey/10 px-1 hover:bg-blue-500/10 hover:text-blue-500 transition-colors inline-flex w-full group"
      >
        <p class="text-xs text-blue-500 shrink-0">
          {{ formatDate(blog.published) }}
        </p>
        <KDecrypt tag="p">{{ blog.title }}</KDecrypt>

        <div class="flex items-center flex-grow justify-end">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="aspect-square h-4 w-4"
          >
            <path
              d="M3.09753 11.003H18.074L13.4142 6.34315L14.8284 4.92893L21.8995 12L14.8284 19.0711L13.4142 17.6569L18.074 12.997H3.09753V11.003Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </NuxtLink>
    </div>

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
</template>
