<template>
  <div class="dev-posts">
    <ul>
      <li v-for="(post, i) in posts" :key="i" class="level">
        <div class="level-left">
          <a class="title level-item has-text-white is-uppercase">
            {{ post }}
          </a>
        </div>
        <div class="level-item">
          <hr />
        </div>
        <div class="level-right">
          <p class="title level-item has-text-white">21.03.2020</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    posts: ['Recreating my personal website', 'details and summary', 'hello world']
  })
}
</script>

<style lang="scss">
.dev-posts {
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;

  ul {
    width: 100%;

    li {
      hr {
        width: 100%;
        height: $global-stroke;
        margin: 0 0.4em;
      }
    }
  }
}
</style>
