<template>
  <aside class="my-4">
    <h3 class="text-lg font-display mb-2 tracking-wide">Latest Posts</h3>
    <ul>
      <a
        v-for="blog in data"
        :key="blog.slug"
        class="block bg-opacity-25 bg-gray-900 p-4 my-2 rounded transition-transform duration-500 ease-in-out transform hover:scale-105"
        :href="blog.url"
        target="_blank"
      >
        {{ blog.title }}
      </a>
    </ul>
  </aside>
</template>

<script>
import useFetch from '../use/useFetch'

export default {
  setup() {
    const { data, loading } = useFetch(
      'https://dev.to/api/articles?username=kn0wn',
      []
    )

    return {
      data,
      loading,
    }
  },
}
</script>

<style></style>
