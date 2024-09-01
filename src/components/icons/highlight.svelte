<div class="absolute -z-10 w-auto -translate-y-1 translate-x-3 scale-[35%] sm:scale-50">
	<svg
		width="560"
		height="106"
		viewBox="0 0 560 106"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			class="squiggle"
			d="M16 76.2653C25.0057 67.2596 38.2564 61.7206 49.5962 56.5232C83.0969 41.1687 122.111 32.9252 158.466 28.4687C187.308 24.9333 216.485 22.3406 245.516 25.467C262.095 27.2524 282.328 25.6479 297.469 33.664C310.381 40.4995 311.092 58.4989 311.092 71.0701C311.092 83.6371 288.391 84.8843 279.921 88.2722C272.085 91.4064 256.803 88.6573 252.443 80.4216C245.768 67.8119 284.812 70.031 289.503 70.031C378.632 70.031 464.913 61.1017 543.841 16"
			stroke="#1DFF4F"
			stroke-opacity="0.4"
			stroke-width="31"
			stroke-linecap="round"
		/>
	</svg>
</div>

<style>
	.squiggle {
		stroke-dasharray: 800; /* Adjust this value based on the length of the path */
		stroke-dashoffset: 800; /* Match this to stroke-dasharray */
		animation: draw 1.25s linear forwards;
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}
</style>
