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
export default {
  data: () => ({
    projects: ['Vue-cosha', 'Revision', 'HOTSPRINGMUSIC', 'Vue-cosha', 'Revision']
  })
}
</script>

<style lang="scss" scoped>
.project-string {
  font-size: 166px !important;
  text-transform: uppercase;
  color: black;
  -webkit-text-stroke: $global-stroke white;
  cursor: pointer;
  transition: color 300ms ease-in-out;
  line-height: 0.8em;

  &:hover {
    color: white;
  }
}
</style>
