<template>
  <div class="dev-container hero is-fullheight">
    <div class="hero-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.dev-container {
  background-color: $screen-background;

  cursor: url('~assets/cursor.png'), auto;
}
</style>
