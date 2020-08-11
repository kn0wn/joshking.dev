<template>
  <div
    class="bg-opacity-25 bg-gray-900 p-4 my-2 rounded flex items-center justify-center flex-col transition-transform duration-500 ease-in-out transform hover:scale-105"
  >
    <h4 class="text-lg font-display mb-2 tracking-wide">{{ name }}</h4>
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
    name: {
      type: String,
      default: 'Popular on Github',
    },
  },
}
</script>

<style></style>
