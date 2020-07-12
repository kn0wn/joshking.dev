<template>
  <router-link
    :to="location"
    :href="location"
    :target="location.includes('//') ? '_blank' : null"
    tag="div"
    class="bg-opacity-25 bg-gray-900 p-4 my-2 rounded flex transition-transform duration-500 ease-in-out transform hover:scale-105"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "ContentBlock",
  props: {
    location: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
