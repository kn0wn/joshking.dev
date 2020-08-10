<template>
  <article class="md:grid grid-rows-3 grid-cols-3 gap-20">
    <hello-world />
    <content-section />
  </article>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import ContentSection from '../components/Content.vue'

import { onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ContentSection,
  },
  setup() {
    onMounted(async () => {
      const response = await fetch(
        'https://v1.nocodeapi.com/kn0wn/ow/PFEGhtJiKKpSDKjf/byCityName?q=London',
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const json = await response.json()
      console.log('Success:', JSON.stringify(json))
    })
  },
}
</script>
