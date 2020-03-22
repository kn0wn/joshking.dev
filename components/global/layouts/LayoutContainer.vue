<template>
  <div class="dev-container">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style>
.dev-container {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
