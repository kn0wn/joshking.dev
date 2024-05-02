<script>
  export let href = "";
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer"
  class="inline-flex items-center gap-x-1 bg-blue-500/10 px-1 text-blue-500 transition-colors hover:bg-blue-500/25 hover:text-blue-800"
>
  <div>
    <slot />
  </div>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="aspect-square h-4 w-4"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M5 17.59 15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59Z"
    />
  </svg>
</a>
