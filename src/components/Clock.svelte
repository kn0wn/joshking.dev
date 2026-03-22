<script lang="ts">
  import { onMount } from "svelte";

  let time = $state("");

  onMount(() => {
    const pad = (n: number) => String(n).padStart(2, "0");
    const tick = () => {
      const d = new Date();
      time = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  });
</script>

<p class="text-xl tabular-nums text-right sm:text-left">{time}</p>
