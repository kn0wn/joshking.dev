<template>
  <div class="col-span-2 row-span-3 grid grid-rows-3 gap-4 mt-4 md:mt-0">
    <github />
    <spotify />
    <weather />
  </div>
</template>

<script>
import { ref } from 'vue'

import Weather from './blocks/Weather.vue'
import Github from './blocks/Github.vue'
import Spotify from './blocks/Spotify.vue'

export default {
  name: 'Content',
  components: {
    Weather,
    Github,
    Spotify,
  },
}
</script>

<style></style>
