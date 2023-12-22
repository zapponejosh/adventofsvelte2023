<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	let fill: HTMLDivElement;
	let loader: HTMLDivElement;
	let isComplete = false;

	const updateFill = (percent: number) => {
		fill.style.height = `${percent}%`;

		if (percent > 105) {
			isComplete = true;
			dispatch('complete');
		}
	};

	let fillPos = 0;

	export function onIncrease(event: string) {
		if (fillPos <= 105) {
			fillPos += 5;
			updateFill(fillPos);
		} else {
			// alert('reached max');
		}
	}
</script>

<div class="loader" bind:this={loader} class:loaded={isComplete}>
	<div class="meter">
		<div class="fill" bind:this={fill}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="currentColor"
					d="M0,320L40,240L80,320L120,240L160,320L200,240L240,320L280,240L320,320L360,240L400,320L440,240L480,320L520,240L560,320L600,240L640,320L680,240L720,320L760,240L800,320L840,240L880,320L920,240L960,320L1000,240L1040,320L1080,240L1120,320L1160,240L1200,320L1240,240L1280,320L1320,240L1360,320L1400,240L1440,320L1440,320L1400,320L1360,320L1320,320L1280,320L1240,320L1200,320L1160,320L1120,320L1080,320L1040,320L1000,320L960,320L920,320L880,320L840,320L800,320L760,320L720,320L680,320L640,320L600,320L560,320L520,320L480,320L440,320L400,320L360,320L320,320L280,320L240,320L200,320L160,320L120,320L80,320L40,320L0,320Z"
				></path>
			</svg>
		</div>
		<span class="fill-text">Christmas Spirit</span>
	</div>
</div>

<style>
	.loader {
		font-size: 25vmin;
		width: 1em;
		height: 1em;
		background-color: hsl(221, 58%, 46%);
		border-radius: 8px;
		position: relative;
		clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
	}

	.loader.loaded {
		opacity: 1;
		border-color: white;
		transform: scale(1.6);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease-out;
	}

	.meter {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		overflow: hidden;
	}

	.meter .fill {
		background-color: white;
		width: 100%;
		height: 0%;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 9;
		transform: translateY(1.5vh);
		filter: drop-shadow(0 0 1rem black);
		transition: height 0.2s linear;
	}

	.meter .fill svg {
		color: white;
		position: absolute;
		transform: translateY(calc(-100% + 1px));
		width: 200%;
		animation: waves 2s ease-in-out infinite alternate;
	}

	@keyframes waves {
		0% {
			left: -10%;
			top: 1vh;
		}
		50% {
			top: 0vh;
		}
		100% {
			left: -50%;
			top: 0.5vh;
		}
	}

	.meter .fill-text {
		position: absolute;
		z-index: 15;
		top: 50%;
		left: 50%;
		font-size: 1rem;
		transform: translate(-50%, -50%);
		color: black;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 900;
		pointer-events: none;
	}
</style>
