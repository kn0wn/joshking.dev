<script lang="ts">
	import { onMount } from 'svelte';

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

	function padNumber(num: number) {
		return num.toString().padStart(2, '0');
	}

	$: time = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
</script>

<div class="font-mono selection:bg-red/50">
	<div class="grid grid-cols-2">
		<h1 class="text-2xl">Josh King</h1>
		<p class="tabular-nums text-2xl">{time}</p>
	</div>
	<h2 class="sm:text-6xl md:text-7xl xl:text-[5rem] text-4xl leading-[1.05] py-6">
		<span class="text-red">Product interface engineer.</span> Focusing on
		<i>serverless technologies.</i>
		Based in <span class="text-red">London.</span> Passionate about
		<span class="text-red">architecting</span>
		complex business requirements into <span class="text-red">sustainable implementations.</span>
		Currently CTO @
		<a target="_blank" href="//rcco.uk" class="underline underline-offset-4 decoration-red">RCCO</a
		>.
	</h2>
	<div class="grid grid-cols-2 text-2xl">
		<h3>Contact →</h3>
		<div>
			<p>
				<a
					target="_blank"
					href="//github.com/kn0wn"
					class="underline underline-offset-4 decoration-red">Github</a
				>
			</p>
			<p>
				<a
					target="_blank"
					href="//twitter.com/kn0wndev"
					class="underline underline-offset-4 decoration-red">Twitter</a
				>
			</p>
			<p>
				<a
					target="_blank"
					href="//www.linkedin.com/in/josh-king-connect/"
					class="underline underline-offset-4 decoration-red">Linkedin</a
				>
			</p>
		</div>
	</div>
</div>
