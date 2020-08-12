<template>
  <content-block :loading="loading" name="Recently read">
    <figure class="h-24 mb-2">
      <img class="h-24" :src="data.books[0].book.image_url" />
    </figure>

    <p>{{ data.books[0].book.title }}</p>
    <p>{{ data.books[0].book.average_rating }}</p>
  </content-block>
</template>

<script>
import ContentBlock from '../modules/ContentBlock.vue'

import useFetch from '../../use/useFetch.js'

export default {
  components: {
    ContentBlock,
  },
  setup() {
    const { data, loading } = useFetch(
      'https://v1.nocodeapi.com/kn0wn/gr/lPuKufVeGzUSeCUl/myBooks?uid=119807043',
      {}
    )

    return {
      data,
      loading,
    }
  },
}
</script>

<style></style>
