<script lang="ts">
	export let href = '';
</script>

<a
	{href}
	target="_blank"
	rel="noreferrer"
	class="inline-flex gap-x-1 items-center text-blue-500 hover:text-blue-800 transition-colors bg-blue-500/10 hover:bg-blue-500/25 px-1"
>
	<div>
		<slot />
	</div>

	<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 aspect-square " viewBox="0 0 24 24">
		<path fill="currentColor" d="M5 17.59 15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59Z" />
	</svg>
</a>
