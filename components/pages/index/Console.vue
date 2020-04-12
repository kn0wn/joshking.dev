<template>
  <section class="container" @click="speedAnim()">
    <div class="top">
      <p class="is-uppercase is-family-primary">
        <span v-for="i in getText.title.length" :key="`title-${i}`" class="letter">{{ getText.title[i - 1] }}</span>
      </p>
      <p class="is-uppercase">
        <span v-for="i in getText.password.length" :key="`password-${i}`" class="letter">{{
          getText.password[i - 1]
        }}</span>
      </p>
      <br />
      <p class="is-uppercase">
        <span v-for="i in getText.items.length" :key="`items-${i}`" class="letter">{{ getText.items[i - 1] }}</span>
        <span v-for="i in content.length" :key="`items-${i}`" class="letter">[]</span>
      </p>
      <br />
    </div>
    <div class="columns">
      <div class="column is-8">
        <div class="console-block">
          <console-string
            v-for="i in MAX_INDEX"
            :key="`string-${i}`"
            :current="i"
            :content="getContent"
            @viewItem="viewingItem"
          />
        </div>
      </div>
      <div class="column is-flex content-side">
        <p v-if="currentViewing">
          <span v-for="i in currentViewing.content.length" :key="`select-${i}`" class="letter">{{
            currentViewing.content[i - 1]
          }}</span>
        </p>
        <p v-else>
          <span v-for="i in getText.select.length" :key="`select-${i}`" class="letter">{{
            getText.select[i - 1]
          }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs'
import ConsoleString from './modules/ModuleConsoleString'

export default {
  components: {
    ConsoleString
  },
  data: () => ({
    MAX_INDEX: 34,
    currentViewing: null,
    content: [
      {
        word: 'About',
        content:
          '> WEB DEVELOPER BASED IN LONDON. SPECIALISING IN NUXT.JS AND SERVERLESS TECHNOLOGIES. BUILDING ONLINE EXPERIENCES FOR COMPANIES SUCH AS GOOGLE AND TESLA.'
      },
      {
        word: 'Projects',
        content: '> projects'
      },
      {
        word: 'Contact',
        content: '> contact'
      }
    ],
    animeInstance: null
  }),
  computed: {
    getText() {
      return {
        title: 'Robco industries (tm) termlink protocol',
        password: 'Enter password now',
        items: `${this.content.length}  item(s) left:`,
        select: '> Select a topic'
      }
    },
    getContent() {
      const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
      return this.content.map((item) => {
        return {
          id: random(1, this.MAX_INDEX - 1),
          ...item
        }
      })
    }
  },
  mounted() {
    this.animeInstance = anime({
      targets: '.letter',
      opacity: 1,
      delay: anime.stagger(10)
    })
  },
  methods: {
    speedAnim() {
      this.animeInstance.seek(this.animeInstance.duration)
    },
    viewingItem(id) {
      const foundContent = this.getContent.find((item) => item.id === id)
      if (foundContent) {
        this.currentViewing = foundContent
        const content = document.querySelectorAll('.content-side .letter')

        content.forEach((domItem) => {
          domItem.style.opacity = 0
        })
        setTimeout(() => {
          anime({
            targets: '.content-side .letter',
            opacity: 1,
            delay: anime.stagger(10)
          })
        }, 300)
      }
    }
  }
}
</script>

<style lang="scss">
.letter {
  opacity: 0;
}
.console-block {
  // display: flex;
  // flex-direction: row;
}

.container {
  background-color: #11361e;
  padding: 2rem;
  box-shadow: inset 0 0 100px black;
  border-radius: 50px;
}

.content-side {
  align-items: flex-end;
}

span,
p {
  color: #41b171;
}
</style>
