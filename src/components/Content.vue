<template>
  <div class="col-span-2 row-span-3 flex flex-wrap items-center justify-center">
    <weather />
    <github />
  </div>
</template>

<script>
import { ref } from 'vue'

import Weather from './blocks/Weather.vue'
import Github from './blocks/Github.vue'

export default {
  name: 'Content',
  components: {
    Weather,
    Github,
  },
}
</script>

<style></style>
