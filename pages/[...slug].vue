<script setup>
const route = useRoute();
const { format } = useDateUtils();

const { data: allArticles } = await useAsyncData("all-articles", () =>
  queryCollection("content").all()
);

const randomArticle = computed(() => {
  if (!allArticles.value) return null;
  return allArticles.value
    .filter((article) => article.path !== route.path)
    .sort(() => Math.random() - 0.5)[0];
});

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("content").path(route.path).first()
);

defineOgImageComponent("OgImage", {
  title: page.value?.title || "Josh King",
  description:
    page.value?.description ||
    "Partnering with founders to create products of the future.",
});

function countWords(s) {
  if (!s) return 0;
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const tagWordCount = computed(() => (page.value?.tags?.length ?? 0));
const titleStart = computed(() => tagWordCount.value);
</script>

<template>
  <main class="max-w-none p-4 font-sans leading-snug">
    <ul class="flex flex-wrap gap-2 not-prose">
      <li v-for="(tag, idx) in page.tags" :key="tag">
        <SdText :text="tag" tag="span" class="text-xs text-blue-600" :start-index="idx" />
      </li>
    </ul>
    <article>
      <SdText
        v-if="page.title"
        :text="page.title"
        tag="h1"
        class="font-sans text-3xl mb-4"
        style="text-wrap: balance;"
        :start-index="titleStart"
      />
      <ContentRenderer class="text-base" :value="page" />
    </article>

    <div class="grid grid-cols-2 not-prose">
      <div>
        <p class="text-xs text-grey">Published</p>
        <p class="text-blue-500 tabular-nums">{{ format(page.published) }}</p>
      </div>
      <div>
        <p class="text-xs text-grey">Edited</p>
        <p class="text-blue-500 tabular-nums">{{ format(page.edited) }}</p>
      </div>
    </div>

    <div v-if="randomArticle" class="mt-12 border-t border-gray-200 pt-8">
      <p class="text-xs text-grey mb-2">You Might Also Like</p>
      <NuxtLink :to="randomArticle.path" class="group">
        <SdText
          v-if="randomArticle.title"
          :text="randomArticle.title"
          tag="h2"
          class="font-sans text-xl group-hover:text-blue-500 transition-colors"
        />
        <p class="text-sm text-grey mt-1">{{ randomArticle.description }}</p>
      </NuxtLink>
    </div>
  </main>
</template>
