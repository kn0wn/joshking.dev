<template>
  <div class="col-span-2 row-span-3">
    <div id="content-projects" style="scroll-margin-top: 2rem;">
      <block
        v-for="project in projects"
        :key="project.id"
        :location="project.location"
      >
        <figure class="w-24 h-24 mr-4 hidden md:block">
          <svg viewBox="0 0 16 16" class="w-24 h-24 text-white fill-current">
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </figure>
        <div class="flex flex-col self-center">
          <h3 class="text-white font-display tracking-wide">
            {{ project.name }}
          </h3>
          <p class="text-sm leading-tight tracking-tight mt-2">
            {{ project.description }}
          </p>
          <div class="flex text-xs mt-2">
            <p
              v-for="(language, id) in project.written"
              :key="`language-${id}`"
            >
              {{ language }}&nbsp;
            </p>
          </div>
        </div>
      </block>
    </div>
    <div id="content-books" style="scroll-margin-top: 2rem;">
      <block v-for="book in books" :key="book.id">
        <figure class="w-24 h-24 mr-4 hidden md:block">
          <svg class="w-24 h-24 text-white fill-current" viewBox="0 0 20 20">
            <path
              d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
            ></path>
          </svg>
        </figure>
        <p>{{ book.name }}</p>
      </block>
    </div>
    <div id="content-blogs" style="scroll-margin-top: 2rem;">
      <block
        v-for="blog in blogs"
        :key="blog.id"
        :location="`/posts/${blog.id}`"
      >
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
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import Block from "./modules/ContentBlock.vue";
import projects from "../assets/data/projects.json";
import books from "../assets/data/books.json";
import blogs from "../assets/data/blogs.json";

export default {
  name: "Content",
  components: {
    Block,
  },
  setup() {
    return { projects, books, blogs };
  },
};
</script>

<style></style>
