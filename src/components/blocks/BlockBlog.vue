<template>
  <block>
    <img
      src="https://pbs.twimg.com/profile_images/1280911578477494274/WdH5b_H2_200x200.jpg"
      alt=""
      class="rounded w-24 h-24 mr-2 hidden md:block"
    />
    <div class="flex flex-col self-center">
      <h3 class="text-white font-display tracking-wide">
        {{ blog.name }}
      </h3>
      <p class="text-sm leading-tight tracking-tight mt-2">
        {{ blog.description }}
      </p>
    </div>
  </block>
</template>

<script>
import Block from "../modules/ContentBlock.vue";

export default {
  components: {
    Block,
  },
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
