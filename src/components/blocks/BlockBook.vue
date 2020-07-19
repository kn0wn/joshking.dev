<template>
  <block>
    <figure class="w-24 h-24 mr-4 hidden md:block">
      <svg class="w-24 h-24 text-white fill-current" viewBox="0 0 20 20">
        <path
          d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
        ></path>
      </svg>
    </figure>
    <div class="w-full">
      <p>
        {{ book.name }} <span class="text-xs">by {{ book.author }}</span>
      </p>
      <div class="flex justify-between items-center mt-2">
        <div class="text-center">
          <h4>Ease to read</h4>
          <p>{{ book.ratings[0].value }}/5</p>
        </div>
        <div class="text-center">
          <h4>Would I recommend?</h4>
          <p>{{ book.ratings[1].value }}</p>
        </div>
        <div class="text-center">
          <h4>Length to read</h4>
          <p>{{ book.ratings[2].value }}/5</p>
        </div>
      </div>
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
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
