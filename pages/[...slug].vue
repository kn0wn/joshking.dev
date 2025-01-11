<script setup>
const router = useRoute();
const currentArticle = await queryContent(`${router.params.slug}`).findOne();
const { format } = useDateUtils();

defineOgImageComponent("Article", {
  title: currentArticle.title,
  description: "Partnering with founders to create products of the future.",
});
</script>

<template>
  <main class="prose max-w-none p-4 font-sans leading-snug">
    <ContentDoc v-slot="{ doc }">
      <article>
        <KDecrypt tag="h1" class="font-mono">{{ doc.title }}</KDecrypt>
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
  </main>
</template>

<style scoped></style>
