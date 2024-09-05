<script>
	import Highlight from '../components/icons/highlight.svelte';
</script>

<svelte:head>
	<title>Extracto</title>
	<meta name="PDF extractions and utils for learning" content="Extracto PDF utils" />
</svelte:head>

<section class="flex h-full w-full select-none items-center justify-center">
	<div class="z-40 flex h-auto w-full flex-col items-center justify-center">
		<h1
			class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-center text-8xl font-bold text-transparent sm:text-9xl md:text-9xl"
		>
			Extracto
		</h1>
		<Highlight />
		<span
			class="sketch-font hidden w-4/5 items-center justify-center py-4 text-center text-lg font-thin text-slate-500 sm:flex sm:w-full sm:text-xl"
			>Extract highlighted notes from your PDFs in seconds</span
		>
		<span
			class="sketch-font text-md w-4/5 text-center font-thin text-slate-500 sm:hidden sm:w-full sm:text-xl"
			>Extract highlighted notes from your PDFs
		</span>
		<a
			data-sveltekit-reload
			href="/upload"
			class="mt-6 rounded-md bg-blue-300 px-10 py-2 text-sm font-bold text-blue-700 shadow-md transition-all hover:bg-opacity-75 hover:text-blue-600 sm:px-14 sm:text-lg"
			>Upload PDF</a
		>
	</div>
	<div class="grid-overlay"></div>
</section>

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
</style>
