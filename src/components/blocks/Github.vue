<template>
  <content-block :loading="loading">
    {{ stars }}
    {{ popular }}
  </content-block>
</template>

<script>
import ContentBlock from '../modules/ContentBlock.vue'

import { computed, onMounted, watch } from 'vue'

import useFetch from '../../use/useFetch.js'

export default {
  components: {
    ContentBlock,
  },
  setup() {
    const { data: github, loading } = useFetch(
      'https://v1.nocodeapi.com/kn0wn/github/hIBkUOtwxvxDjBZc/repos?username=kn0wn&visibility=public',
      []
    )

    const stars = computed(() =>
      github.value.reduce((acc, curr) => acc + curr.stargazers_count, 0)
    )

    const popular = computed(() => {
      const sorted = github.value.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      )

      return sorted[0]
    })

    return {
      github,
      loading,
      stars,
      popular,
    }
  },
}
</script>

<style></style>
