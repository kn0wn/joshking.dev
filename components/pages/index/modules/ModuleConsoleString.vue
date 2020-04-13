<template>
  <p class="dev-console-string">
    <span class="hex">
      <span v-for="i in genHex.length" :key="i" class="letter">
        {{ genHex[i - 1] }}
      </span>
    </span>

    <span :class="{ 'has-content': hasContent }" @mouseover="test(current)">
      <span v-for="i in createString.length" :key="i" class="letter">
        {{ createString[i - 1] }}
      </span> </span
    ><span v-for="i in contentPadding.length" :key="i" class="letter">
      {{ contentPadding[i - 1] }}
    </span>
    <br v-if="(current + 1) % 2" />
  </p>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      required: true
    },
    content: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    MIN_CONSOLE_LENGTH: 12
  }),
  computed: {
    genHex() {
      return `0xF${this.current % 2 ? '7' : '8'}${this.makeid(2, false)}`
    },
    contentPadding() {
      if (!this.hasContent) return 0
      return this.makeid(this.MIN_CONSOLE_LENGTH - this.hasContent.word.length, true)
    },
    hasContent() {
      return this.content.find((item) => item.id === this.current)
    },
    createString() {
      if (this.hasContent) {
        const { word } = this.hasContent
        return `${word}`
      }

      return `${this.makeid(this.MIN_CONSOLE_LENGTH, true)}`
    }
  },
  methods: {
    makeid(length, symbols = false) {
      let result = ''
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      if (symbols) characters += '{}:@~?[]#/.,!"£$%^*()'
      const charactersLength = characters.length
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
      }
      return result
    },
    test(id) {
      this.$emit('viewItem', id)
    }
  }
}
</script>

<style lang="scss">
.hex {
}
.has-content {
  text-transform: uppercase;
  &:hover {
    .letter {
      background-color: #41b171;
      color: #11361e;
    }
  }
}
.dev-console-string {
  user-select: none;
  display: inline;
  margin-right: 18px;

  .letter {
    display: inline-block;
    width: 18px;
    // text-transform: uppercase;

    &:hover {
      background-color: #41b171;
      color: #11361e;
    }
  }
  .word {
    padding: 0.2rem;
  }
}
</style>
