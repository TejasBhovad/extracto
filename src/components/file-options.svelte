<script>
	import { createTabs } from 'svelte-headlessui';

	export let categories = [];

	const tabs = createTabs({ selected: categories[0] || 'text' });

	function renderContent(value) {
		if (value === 'text') {
			return 'Extract Text';
		} else if (value === 'pdf') {
			return 'Extract Pages';
		}
		return 'No content available.';
	}
</script>

<div class="flex w-full flex-col items-center justify-center px-4 pt-4">
	<div class="w-full max-w-md px-4 sm:px-0">
		<div use:tabs.list class="flex space-x-1 rounded-md bg-blue-900/10 p-1">
			{#each categories as value}
				{@const active = $tabs.active === value}
				{@const selected = $tabs.selected === value}
				<button
					use:tabs.tab={{ value }}
					class="w-full rounded-sm py-2.5 text-sm font-semibold capitalize leading-5 ring-white ring-opacity-60 ring-offset-[2.5px] ring-offset-blue-400/90 focus:outline-none focus:ring-2 {selected
						? 'bg-white text-blue-700 shadow'
						: active
							? 'bg-white/[0.12] text-white'
							: 'text-blue-900 opacity-50 hover:bg-white/[0.12] hover:opacity-75'}"
				>
					{renderContent(value)}
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	button {
		transition:
			background-color 0.3s ease,
			color 0.3s ease,
			opacity 0.3s ease;
	}
</style>
