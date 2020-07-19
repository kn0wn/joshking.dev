<template>
  <div class="col-span-2 row-span-3">
    <div id="content-projects" class="content-section">
      <h2 class="font-display text-xl">Projects</h2>
      <p>These are some of my latest projects.</p>
      <block-project
        v-for="project in projects"
        :key="project.id"
        :location="project.location"
        :project="project"
      />
    </div>
    <div id="content-books" class="content-section">
      <h2 class="font-display text-xl">Books</h2>
      <p>A couple of books I've read recently.</p>
      <block-book v-for="book in books" :key="book.id" :book="book" />
    </div>
    <div id="content-blogs" class="content-section">
      <h2 class="font-display text-xl">Blog</h2>
      <p>If I remember to write more, it'll be posted here.</p>
      <block-blog
        v-for="blog in blogs"
        :key="blog.id"
        :location="`/posts/${blog.id}`"
        :blog="blog"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import Block from "./modules/ContentBlock.vue";
import BlockBook from "./blocks/BlockBook.vue";
import BlockProject from "./blocks/BlockProject.vue";
import BlockBlog from "./blocks/BlockBlog.vue";
import projects from "../assets/data/projects.json";
import books from "../assets/data/books.json";
import blogs from "../assets/data/blogs.json";

export default {
  name: "Content",
  components: {
    Block,
    BlockBook,
    BlockProject,
    BlockBlog,
  },
  setup() {
    return { projects, books, blogs };
  },
};
</script>

<style></style>
