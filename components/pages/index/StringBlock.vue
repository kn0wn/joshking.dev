<template>
  <div class="">
    <console-string v-for="i in MAX_INDEX" :key="i" :current="i + 1" :content-string="i === 6 ? 'About' : ''" />
  </div>
</template>

<script>
import ConsoleString from './modules/ModuleConsoleString'

export default {
  components: {
    ConsoleString
  },
  props: {
    content: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    MAX_INDEX: 34
  }),
  computed: {
    // getRandomIndex() {
    //   return this.MAX_INDEX()
    // },
    displayedContent() {
      return this.content
    }
  },
  methods: {
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}
</script>

<style></style>
