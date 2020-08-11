<template>
  <content-block :loading="loading" name="What I'm listening to">
    <figure class="w-24 h-24 mb-2">
      <img class="w-24 h-24" :src="data.items[0].track.album.images[0].url" />
    </figure>

    <p>{{ data.items[0].track.name }}</p>
    <p>{{ data.items[0].track.album.name }}</p>
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
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      {},
      {
        Authorization:
          'Bearer BQDxA1Af9hjNsqNXB5sUSl5R_HdndrRMMr7YWH3J9zZIXJ4_oNtOGZnWYYUJ3YepCA0OAc47FYM_rMAy6Hz2jXhJ7bK1nRL2HDZatnxQ-L3tpEmmy6MkVzhAADkNDMPTsuaSnfq4Iu4ySbmQByEPceSd',
      }
    )

    return {
      data,
      loading,
    }
  },
}
</script>

<style></style>
