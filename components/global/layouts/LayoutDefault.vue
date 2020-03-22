<template>
  <section class="hero is-fullheight has-background-black">
    <div class="hero-head">
      <slot name="head"></slot>
    </div>
    <div class="hero-body">
      <slot></slot>
    </div>
    <div class="hero-foot">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
