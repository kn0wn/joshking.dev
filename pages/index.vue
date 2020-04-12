<template>
  <layout-container>
    <console />
    <mobile-console />
  </layout-container>
</template>

<script>
import Console from '~/components/pages/index/Console'
import MobileConsole from '~/components/pages/index/MobileConsole'

export default {
  components: {
    Console,
    MobileConsole
  }
}
</script>

<style></style>
