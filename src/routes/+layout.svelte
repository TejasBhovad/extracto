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
		<div class="grid-overlay"></div>
	</main>
</div>

<style>
	.grid-overlay {
		opacity: 0.3;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/graph.svg');
		background-repeat: repeat;
		background-size: 700px 620px;
		pointer-events: none;
		z-index: 1;

		filter: blur(1px);
		animation: moveGrid 20s linear infinite;
	}

	@media (max-width: 768px) {
		.grid-overlay {
			background-size: 350px 310px;
		}
	}

	@keyframes moveGrid {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 0 620px;
		}
	}
	:global(.sketch-font) {
		font-family: 'Fredoka One', system-ui;
	}
</style>
