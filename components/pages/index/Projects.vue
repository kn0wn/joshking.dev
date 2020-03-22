<template>
  <layout-default>
    <h2 class="title">
      <span v-for="(project, id) in projects" :key="`project-${id}`" class="project-string">
        {{ project }}
      </span>
    </h2>
  </layout-default>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const projects = ref(['Vue-cosha', 'trueagility', 'HOTSPRINGMUSIC', 'Revision', 'Notbotapi'])

    return {
      projects
    }
  }
}
</script>

<style lang="scss" scoped>
.project-string {
  font-size: 166px !important;
  text-transform: uppercase;
  color: black;
  -webkit-text-stroke: $global-stroke white;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  line-height: 0.8em;

  &:nth-of-type(even) {
    color: white;
  }

  &:hover {
    -webkit-text-stroke: $global-stroke $danger;

    color: $danger;
  }
}
</style>
