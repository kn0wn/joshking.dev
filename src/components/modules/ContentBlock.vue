<template>
  <div
    class="bg-opacity-25 bg-gray-900 p-4 my-2 rounded transition-transform duration-500 ease-in-out transform hover:scale-105"
  >
    <slot v-if="!loading"></slot>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentBlock',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style></style>
