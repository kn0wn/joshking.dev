<script lang="ts">
	import Link from '$lib/Link.svelte';
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

	const work = [
		{
			company: 'RCCO',
			role: 'CTO',
			website: '//rcco.uk',
			timeline: '2019 - Present'
		}
	];

	const contact = [
		{
			name: 'Github',
			url: '//github.com/kn0wn'
		},
		{
			name: 'Twitter',
			url: '//twitter.com/kn0wndev'
		}
	];

	const clients = [
		{
			name: 'Google',
			work: 'Product architecture and development'
		},
		{
			name: 'Keakie',
			work: 'Front-end motion development'
		},
		{
			name: 'Nozzle',
			work: 'Full-stack development'
		}
	];
</script>

<div class="font-mono selection:bg-blue-500/50 ">
	<div class="grid grid-cols-2 border-2 border-blue-500 py-2 px-4">
		<div class="flex items-center">
			<div class="flex items-center gap-x-2">
				<span class="relative flex h-3 w-3">
					<span
						class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500/75"
					/>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
				</span>
				<h1 class="text-xl">josh king</h1>
			</div>
		</div>
		<div class="">
			<p class="tabular-nums text-xl">{time}</p>
		</div>
	</div>
	<div class="sm:grid sm:grid-cols-2 border-x-2 border-blue-500 py-2 px-4">
		<div class="mb-4">
			<p class="uppercase text-grey mb-1">Who.</p>
			<h1 class="text-blue-500">Product interface engineer.</h1>
			<p>Based in London, United Kingdom. Focusing on serverless technologies</p>
		</div>

		<div class="mb-4">
			<p class="uppercase text-grey mb-1">Where.</p>
			{#each work as { company, role, timeline, website }}
				<Link href={website}>
					{company}
				</Link>
				<p>{role}</p>
				<p>{timeline}</p>
			{/each}
		</div>

		<div class="items-center px-6 hidden sm:flex">
			<div class="">
				<p class="italic mb-1">"Everything we see is <br /> perspective, not truth."</p>
				<p class="text-blue-500">- Marcus Aurelius</p>
			</div>
		</div>

		<div>
			<p class="uppercase text-grey mb-1">What.</p>
			<div class="space-y-1">
				{#each clients as { name, work }}
					<div class="">
						<h1 class="text-blue-500">{name}</h1>
						<p>{work}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="col-span-2 border-2 border-blue-500 py-2 px-4">
		<p class="uppercase text-grey mb-1">Contact.</p>
		<div class="flex gap-x-4">
			{#each contact as { name, url }}
				<Link href={url}>
					{name}
				</Link>
			{/each}
		</div>
	</div>
	<div class=" my-2">
		<p class="text-sm text-grey">Built with Svelte & Vite. Font BerkeleyMono.</p>
	</div>
</div>
