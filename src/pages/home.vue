<template>
  <article class="min-h-screen flex items-center justify-center p-4">
    <div class="container">
      <div class="md:grid grid-rows-3 grid-cols-3 gap-20">
        <hello-world />
        <content-section />
      </div>
    </div>
  </article>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import ContentSection from '../components/Content.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ContentSection,
  },
}
</script>
