<script setup>
const route = useRoute();
const { format } = useDateUtils();

// Get a random article with caching
const { data: allArticles } = await useAsyncData("all-articles", () =>
  queryCollection("content").all()
);

const randomArticle = computed(() => {
  if (!allArticles.value) return null;
  return allArticles.value
    .filter((article) => article.path !== route.path)
    .sort(() => Math.random() - 0.5)[0];
});

// Get current page with caching
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("content").path(route.path).first()
);

// Set up OpenGraph image
defineOgImageComponent("OgImage", {
  title: page.value?.title || "Josh King",
  description:
    page.value?.description ||
    "Partnering with founders to create products of the future.",
});
</script>

<template>
  <main class="max-w-none p-4 font-sans leading-snug">
    <!-- <ContentSearch class="mb-8" /> -->

    <ul class="flex flex-wrap gap-2 not-prose">
      <li v-for="tag in page.tags" :key="tag">
        <KDecrypt tag="span" class="text-xs text-blue-600">{{ tag }}</KDecrypt>
      </li>
    </ul>
    <article>
      <KDecrypt tag="h1" class="font-mono text-3xl mb-4">{{
        page.title
      }}</KDecrypt>
      <Transition name="fade-delay" appear>
        <ContentRenderer class="text-base" :value="page" />
      </Transition>
    </article>

    <div class="grid grid-cols-2 not-prose">
      <div class="">
        <p class="text-xs text-grey">Published</p>
        <p class="text-blue-500 tabular-nums">
          {{ format(page.published) }}
        </p>
      </div>
      <div class="">
        <p class="text-xs text-grey">Edited</p>
        <p class="text-blue-500 tabular-nums">
          {{ format(page.edited) }}
        </p>
      </div>
    </div>

    <!-- Random Article Block -->
    <div v-if="randomArticle" class="mt-12 border-t border-gray-200 pt-8">
      <p class="text-xs text-grey mb-2">You Might Also Like</p>
      <NuxtLink :to="randomArticle.path" class="group bg-blue-500">
        <KDecrypt
          tag="h2"
          class="font-mono text-xl group-hover:text-blue-500 transition-colors"
        >
          {{ randomArticle.title }}
        </KDecrypt>
        <p class="text-sm text-grey mt-1">{{ randomArticle.description }}</p>
      </NuxtLink>
    </div>
  </main>
</template>

<style>
.fade-delay-enter-active,
.fade-delay-leave-active {
  transition: opacity 0.5s ease-in-out;
  transition-delay: 0.5s;
}

.fade-delay-enter-from,
.fade-delay-leave-to {
  opacity: 0;
}
</style>
