<script setup></script>

<template>
  <main class="prose max-w-none p-4 font-sans">
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

<style scoped></style>
