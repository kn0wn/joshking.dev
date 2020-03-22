<template>
  <layout-container>
    <introduction />
    <projects />
    <posts />
  </layout-container>
</template>

<script>
import Introduction from '~/components/pages/index/Introduction'
import Projects from '~/components/pages/index/Projects'
import Posts from '~/components/pages/index/Posts'

export default {
  components: {
    Introduction,
    Projects,
    Posts
  }
}
</script>

<style></style>
