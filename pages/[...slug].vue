<script setup>
const router = useRoute();
const currentArticle = await queryContent(`${router.params.slug}`).findOne();
const { format } = useDateUtils();

// Get a random article
const allArticles = await queryContent().find();
const randomArticle = allArticles
  .filter((article) => article._path !== currentArticle._path)
  .sort(() => Math.random() - 0.5)[0];

defineOgImageComponent("Article", {
  title: currentArticle.title,
  description: "Partnering with founders to create products of the future.",
});
</script>

<template>
  <main class="max-w-none p-4 font-sans leading-snug">
    <ContentDoc v-slot="{ doc }">
      <ul class="flex flex-wrap gap-2 not-prose">
        <li v-for="tag in doc.tags" :key="tag">
          <KDecrypt tag="span" class="text-xs text-blue-600">{{
            tag
          }}</KDecrypt>
        </li>
      </ul>
      <article>
        <KDecrypt tag="h1" class="font-mono text-3xl mb-4">{{
          doc.title
        }}</KDecrypt>
        <ContentRenderer class="text-base" :value="doc" />
      </article>
    </ContentDoc>
    <div class="grid grid-cols-2 not-prose">
      <div class="">
        <p class="text-xs text-grey">Published</p>
        <p class="text-blue-500 tabular-nums">
          {{ format(currentArticle.published) }}
        </p>
      </div>
      <div class="">
        <p class="text-xs text-grey">Edited</p>
        <p class="text-blue-500 tabular-nums">
          {{ format(currentArticle.edited) }}
        </p>
      </div>
    </div>

    <!-- Random Article Block -->
    <div v-if="randomArticle" class="mt-12 border-t border-gray-200 pt-8">
      <p class="text-xs text-grey mb-2">You Might Also Like</p>
      <NuxtLink :to="randomArticle._path" class="group">
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

<style scoped></style>
