<template>
  <div class="hello-world">
    <h1 class="text-white text-4xl font-display">
      👋 Hello, <br />I'm Josh King.
    </h1>
    <p class="tracking-tight">
      Web developer based in London. Specialising in
      <a
        href="https://nuxtjs.org/"
        class="border-b-2 border-blue cursor-pointer"
      >
        Nuxt.js</a
      >
      and serverless technologies. Building online experiences for companies
      such as Google and Tesla. Currently the Head of Digital at
      <a
        class="border-b-2 border-blue cursor-pointer"
        href="//rcco.uk?utm_source=joshking"
        target="_blank"
        >RCCO</a
      >.
    </p>

    <nav>
      <button
        :class="{ 'bg-opacity-25': current !== 'projects' }"
        @click="scrollTo('projects')"
        class="bg-blue my-2 rounded-sm p-2 w-full"
      >
        projects
      </button>
      <button
        :class="{ 'bg-opacity-25': current !== 'books' }"
        @click="scrollTo('books')"
        class="bg-blue my-2 rounded-sm p-2 w-full"
      >
        books
      </button>
      <button
        :class="{ 'bg-opacity-25': current !== 'blogs' }"
        @click="scrollTo('blogs')"
        class="bg-blue my-2 rounded-sm p-2 w-full"
      >
        blog
      </button>
    </nav>
    <aside class="flex">
      <img
        src="https://pbs.twimg.com/profile_images/1280911578477494274/WdH5b_H2_200x200.jpg"
        alt=""
        class="rounded w-32 h-32"
      />
      <div class="ml-4 flex flex-col self-center">
        <h3 class="text-sm">Contact me on the platforms below</h3>
        <ul class="flex mt-2">
          <li class="hover:bg-opacity-25 rounded-sm hover:bg-gray-900 p-2">
            <a href="https://github.com/kn0wn" target="_blank">
              <svg viewBox="0 0 16 16" class="w-6 h-6 text-white fill-current">
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="hover:bg-opacity-25 rounded-sm hover:bg-gray-900 p-2 ml-2">
            <a href="https://twitter.com/kn0wndev" target="_blank">
              <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 72 72">
                <path
                  d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "HelloWorld",
  setup() {
    const current = ref("projects");
    const scrollTo = position => {
      document
        .querySelector(`#content-${position}`)
        .scrollIntoView({ behavior: "smooth" });
    };

    onMounted(() => {
      console.log("component is mounted!");

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              current.value = entry.target.id.split("content-")[1];
              console.log(entry);
              console.log(current.value);
            }
          });
        },
        {
          root: null,
          rootMargin: "20%",
          threshold: 1.0
        }
      );

      observer.observe(document.querySelector("#content-books"));
      observer.observe(document.querySelector("#content-projects"));
      observer.observe(document.querySelector("#content-blogs"));
    });

    return { current, scrollTo };
  },
  props: {
    msg: String
  }
};
</script>

<style lang="postcss" scoped>
.hello-world {
  height: calc(100vh - 4rem);
  top: 2rem;
  @apply row-span-3 col-span-1 flex flex-wrap flex-col justify-between sticky;
}
</style>
