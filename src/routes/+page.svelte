<script>
  import Link from "$lib/Link.svelte";
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

  const work = [
    {
      company: "RCCO",
      role: "CTO",
      website: "//rcco.uk",
      timeline: "2019 - Present",
    },
  ];

  const contact = [
    {
      name: "Github",
      url: "//github.com/kn0wn",
    },
    {
      name: "Twitter",
      url: "//twitter.com/kn0wndev",
    },
  ];

  const clients = [
    {
      name: "Google",
      work: "Product architecture and development",
    },
    {
      name: "Keakie",
      work: "Front-end motion development",
    },
    {
      name: "Nozzle",
      work: "Full-stack development",
    },
  ];
</script>

<div class="font-mono selection:bg-blue-500/50 ">
  <div class="grid grid-cols-2 border-2 border-blue-500 py-2 px-4">
    <div class="flex items-center">
      <div class="flex items-center gap-x-2">
        <span class="relative flex h-3 w-3">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500/75"
          />
          <span class="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
        </span>
        <h1 class="text-xl">josh king</h1>
      </div>
    </div>
    <div>
      <p class="text-xl tabular-nums">{time}</p>
    </div>
  </div>
  <div class="border-x-2 border-blue-500 py-2 px-4 sm:grid sm:grid-cols-2">
    <div class="mb-4">
      <p class="mb-1 uppercase text-grey">Who.</p>
      <h1 class="text-blue-500">Product interface engineer.</h1>
      <p>
        Based in London, United Kingdom. Focusing on serverless technologies
      </p>
    </div>

    <div class="mb-4">
      <p class="mb-1 uppercase text-grey">Where.</p>
      {#each work as { company, role, timeline, website }}
        <Link href={website}>
          {company}
        </Link>
        <p>{role}</p>
        <p>{timeline}</p>
      {/each}
    </div>

    <div class="hidden items-center px-6 sm:flex">
      <div>
        <p class="mb-1 italic">
          "Everything we see is <br /> perspective, not truth."
        </p>
        <p class="text-blue-500">- Marcus Aurelius</p>
      </div>
    </div>

    <div>
      <p class="mb-1 uppercase text-grey">What.</p>
      <div class="space-y-1">
        {#each clients as { name, work }}
          <div>
            <h1 class="text-blue-500">{name}</h1>
            <p>{work}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="col-span-2 border-2  border-blue-500 py-2 px-4">
    <p class="mb-1 uppercase text-grey">Contact.</p>
    <div class="flex gap-x-4">
      {#each contact as { name, url }}
        <Link href={url}>
          {name}
        </Link>
      {/each}
    </div>
  </div>
  <div class="my-2">
    <p class="text-sm text-grey">
      Built with Svelte & Vite. Font BerkeleyMono.
    </p>
  </div>
</div>
