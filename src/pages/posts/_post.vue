<template>
  <article class="">
    <nav>
      <router-link to="/" class="text-blue">Back</router-link>
    </nav>
    <h1 class="text-white text-4xl font-display mb-2">{{ post.name }}</h1>
    <p>{{ post.content }}</p>
  </article>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import blogs from "../../assets/data/blogs.json";

export default {
  setup() {
    const route = useRoute();

    const currentLocation = computed(() => {
      const { matched, ...rest } = route;
      return rest;
    });

    const post = computed(() => {
      const routeId = currentLocation.value.params.id;
      const found = blogs.find(({ id }) => id === routeId);

      return found;
    });

    return {
      currentLocation,
      post
    };
  }
};
</script>

<style></style>
