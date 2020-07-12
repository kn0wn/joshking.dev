<template>
  <article class="md:grid grid-rows-3 grid-cols-3 gap-20">
    <hello-world />
    <content-section />
    <notice />
  </article>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import ContentSection from "../components/Content.vue";
import Notice from "../components/modules/Notice.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ContentSection,
    Notice
  }
};
</script>
