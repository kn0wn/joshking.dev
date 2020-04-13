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

<style>
.dev-container {
  background-color: black;
  /* background-image: url('~assets/background.png'); */
  background-position: center;
  cursor: url('~assets/cursor.png'), auto;
}
</style>
