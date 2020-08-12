<template>
  <div class="col-span-2 row-span-3 grid md:grid-cols-2 gap-4 mt-4 md:mt-0">
    <github />
    <bitcoin />
    <weather />
    <books />
  </div>
</template>

<script>
import { ref } from 'vue'

import Weather from './blocks/Weather.vue'
import Github from './blocks/Github.vue'
import Bitcoin from './blocks/Bitcoin.vue'
import Books from './blocks/Books.vue'

export default {
  name: 'Content',
  components: {
    Weather,
    Github,
    Bitcoin,
    Books,
  },
}
</script>

<style></style>
