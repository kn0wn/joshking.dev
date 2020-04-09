<template>
  <header class="dev-navigation">
    <div class="container">
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <h5 class="dev-nav-item has-text-white">.dev</h5>
          </div>
        </div>
        <div class="level-right is-hidden-mobile">
          <nuxt-link to="/" class="dev-nav-item has-text-white level-item is-uppercase">
            projects
          </nuxt-link>
          <nuxt-link to="/" class="dev-nav-item has-text-white level-item is-uppercase">
            posts
          </nuxt-link>
          <nuxt-link to="/" class="dev-nav-item has-text-white level-item is-uppercase">
            contact
          </nuxt-link>
        </div>
        <div class="level-right is-hidden-tablet">
          <p class="dev-nav-item has-text-white level-item is-uppercase">
            +
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.dev-navigation {
  position: fixed;
  top: 2em;
  width: 100%;
  // margin: 0 auto;

  .dev-nav-item {
    font-size: 30px;
  }
}
</style>
