<script>
	import '@fontsource/fredoka-one';
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
</script>

<div class="app flex h-full w-full flex-col">
	<Navbar />
	<main class="relative h-full w-full">
		<div class="h-full w-full">
			<slot />
		</div>
	</main>
</div>

<style>
	:global(.sketch-font) {
		font-family: 'Fredoka One', system-ui;
	}
</style>
