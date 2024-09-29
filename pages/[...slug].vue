<script setup>
const router = useRoute();
const currentArticle = await queryContent(`${router.params.slug}`).findOne();
const { formatDate } = useFormatDate();

definePageMeta({
  title: `${currentArticle?.title} | joshking.dev`,
});

defineOgImageComponent("Article", {
  title: currentArticle.title,
  description: "Partnering with founders to create products of the future.",
});
</script>

<template>
  <main class="prose max-w-none p-4 font-sans">
    <ContentDoc v-slot="{ doc }">
      <article>
        <KDecrypt tag="h1">{{ doc.title }}</KDecrypt>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
    <div class="grid grid-cols-2 not-prose">
      <div class="">
        <p class="text-xs text-grey">Published</p>
        <p class="text-blue-500 tabular-nums">
          {{ formatDate(currentArticle.published) }}
        </p>
      </div>
      <div class="">
        <p class="text-xs text-grey">Edited</p>
        <p class="text-blue-500 tabular-nums">
          {{ formatDate(currentArticle.edited) }}
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
