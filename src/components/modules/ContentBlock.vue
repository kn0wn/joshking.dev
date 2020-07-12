<template>
  <div
    class="bg-opacity-25 bg-gray-900 p-4 my-2 rounded flex transition-transform duration-500 ease-in-out transform hover:scale-105"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContentBlock"
};
</script>

<style></style>
