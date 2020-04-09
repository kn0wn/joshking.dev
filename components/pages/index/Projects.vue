<template>
  <layout-default>
    <div class="container">
      <div class="projects-container has-text-centered">
        <h2 v-for="(project, id) in projects" :key="`project-${id}`" class="title is-uppercase project-string">
          {{ project }}
        </h2>
      </div>
    </div>
  </layout-default>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import { useChunk } from '@/use/utilities/chunk'

export default {
  setup() {
    const projects = ref(['Vue-cosha', 'trueagility', 'Revision', 'Notbotapi', 'HOTSPRINGMUSIC'])
    const slicedProjects = computed(() =>
      useChunk(['Vue-cosha', 'trueagility', 'Revision', 'Notbotapi', 'HOTSPRINGMUSIC'], 2)
    )

    return {
      slicedProjects,
      projects
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  display: flex;
}
.projects-container {
  width: 150%;

  .project-string {
    font-size: 150px !important;

    color: black;
    -webkit-text-stroke: $global-stroke white;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    letter-spacing: -6px;
    margin-bottom: 0px;
    line-height: 0.8em;

    @include until($tablet) {
      font-size: 52px !important;
      letter-spacing: 0px;
      line-height: 1em;
    }

    &:nth-of-type(even) {
      color: white;
    }

    &:hover {
      -webkit-text-stroke: $global-stroke $danger;

      color: $danger;
    }
  }
}
</style>
