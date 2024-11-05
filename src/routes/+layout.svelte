<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="xl:mx-auto xl:max-w-[70vw]">
	{@render children()}
</main>
