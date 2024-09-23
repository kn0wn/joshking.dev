<script>
  import Link from "$lib/Link.svelte";
  import Decrypt from "$lib/Decrypt.svelte";
  import { onMount } from "svelte";

  let now = new Date();

  $: hours = now.getHours();
  $: minutes = now.getMinutes();
  $: seconds = now.getSeconds();

  onMount(() => {
    const interval = setInterval(() => {
      now = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  function padNumber(num) {
    return num.toString().padStart(2, "0");
  }

  $: time = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;

  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  const work = [
    {
      company: "&above",
      role: "Technical Co-founder",
      website: "//andabove.com",
      timeline: "2019 - Present",
    },
    {
      company: "Google",
      role: "Internal product development",
      website: "//blog.google/products/marketingplatform/360/",
      timeline: "2019 - Present",
    },
    {
      company: "Keakie",
      role: "Front-end motion development",
      website: "//keakie.com",
      timeline: "",
    },
    {
      company: "Nozzle",
      role: "Full-stack development",
      website: "//nozzle.ai",
      timeline: "",
    },
  ];

  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  const contact = [
    {
      name: "Github",
      url: "//github.com/kn0wn",
    },
    {
      name: "𝕏",
      url: "//x.com/josh_fyi",
    },
  ];

  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  const blogs = [];
</script>

<div class="font-mono selection:bg-blue-500/50">
  <div class="grid grid-cols-2 px-4 py-2">
    <div class="flex items-center">
      <div class="flex items-center gap-x-2">
        <span class="relative flex h-3 w-3">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-sm bg-blue-500/75"
          />
          <span class="relative inline-flex h-3 w-3 rounded-sm bg-blue-500" />
        </span>
        <h1 class="text-xl">josh king</h1>
      </div>
    </div>
    <div>
      <p class="text-xl tabular-nums">{time}</p>
    </div>
  </div>
  <div class="px-4 py-2 sm:grid sm:grid-cols-2">
    <div class="mb-4 sm:mb-0">
      <Decrypt tag="p" classes="text-sm text-grey mb-2">Who.</Decrypt>
      <div class="space-y-2">
        <div>
          <Decrypt tag="h1" classes="text-blue-500">
            Product interface engineer.
          </Decrypt>
          <Decrypt tag="p">
            Based in London, United Kingdom. Partnering with founders to create
            products of the future.
          </Decrypt>
        </div>

        <div class="flex gap-x-2">
          {#each contact as { name, url }}
            <Link href={url}>
              {name}
            </Link>
          {/each}
        </div>
      </div>
    </div>

    <div>
      <Decrypt tag="p" classes="text-sm text-grey mb-2">Where.</Decrypt>

      <div class="space-y-4">
        {#each work as { company, role, timeline, website }}
          <div class="space-y-1">
            <Link href={website} class="mb-2">
              {company}
            </Link>
            <div class="">
              <Decrypt tag="p">{role}</Decrypt>

              <Decrypt classes="text-grey text-xs" tag="p">{timeline}</Decrypt>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  {#if blogs.length > 0}
    <div class="col-span-2 px-4 py-2">
      <Decrypt tag="p" classes="text-sm text-grey mb-2">Memoir.</Decrypt>
      <div class="space-y-2">
        {#each blogs as { title, url }}
          <div class="rounded-sm bg-grey/10 px-1">
            <p class="">{title}</p>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <div class="my-2 px-4">
    <p class="text-sm text-grey">
      Built with <a href="//svelte.dev" class="text-blue-500">Svelte</a>,
      <a href="//vite.dev" class="text-blue-500">Vite</a> &
      <a
        href="//berkeleygraphics.com/typefaces/berkeley-mono/"
        class="text-blue-500">BerkeleyMono</a
      >.
    </p>
  </div>
</div>
