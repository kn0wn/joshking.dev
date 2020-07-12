<template>
  <aside
    class="bg-blue fixed bottom-0 right-0 my-2 py-2 px-4 flex items-center rounded-sm"
    v-show="display"
  >
    <p class="text-sm tracking-tight">
      🚧 This site is still under construction
    </p>
    <button
      @click="display = !display"
      class="ml-4 pb-1 px-2 bg-gray-900 bg-opacity-50 rounded-sm"
    >
      x
    </button>
  </aside>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const display = ref(true);

    return { display };
  }
};
</script>

<style></style>
