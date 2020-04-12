<template>
  <section class="hero is-fullheight has-background-black dev-default">
    <div class="hero-head">
      <slot name="head" />
    </div>
    <div class="hero-body">
      <slot />
    </div>
    <div class="hero-foot">
      <slot name="footer" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.dev-default {
  scroll-snap-align: start;
  border: 2rem solid $danger;
}
</style>
