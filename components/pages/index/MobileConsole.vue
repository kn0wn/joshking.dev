<template>
  <section class="container crt is-hidden-tablet mobile" @click="speedAnim()">
    <p v-for="(c, cKey) in content" :key="`content-${cKey}`">
      >
      <span v-for="i in c.word.length" :key="`select-${i}`" class="letter is-uppercase">{{ c.word[i - 1] }}</span>
      <br />
      <span v-for="i in c.content.length" :key="`select-${i}`" class="letter is-uppercase">{{ c.content[i - 1] }}</span>
    </p>
    <br />
  </section>
</template>

<script>
import anime from 'animejs'

export default {
  data: () => ({
    content: [
      {
        word: 'About',
        content:
          'WEB DEVELOPER BASED IN LONDON. SPECIALISING IN NUXT.JS AND SERVERLESS TECHNOLOGIES. BUILDING ONLINE EXPERIENCES FOR COMPANIES SUCH AS GOOGLE AND TESLA.'
      },
      {
        word: 'Projects',
        content: 'https://github.com/kn0wn'
      },
      {
        word: 'Contact',
        content: 'hello@joshking.dev'
      }
    ]
  }),
  mounted() {
    anime({
      targets: '.mobile .letter',
      opacity: 1,
      delay: anime.stagger(10)
    })
  }
}
</script>

<style></style>
