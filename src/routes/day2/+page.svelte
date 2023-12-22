<!-- 
  A cookie that appears on a random spot on a section of the page and when it's clicked it shoots over to santa
  then a new one appears (consider two or threee cookies at a time?)
  at random intervals between 5 and 10 seconds a glass of milk appears for two seconds and either you have to click it before it disappears or you lose points _or_ it acts like a bonus

  there is a cookie meter labeled christmas spirit (hard mode it decreases overtime) and every cookie increases the level

  should last about 1 minute
-->
<script lang="ts">
	import { afterUpdate, onMount, type SvelteComponent } from 'svelte';

	import Meter from './Meter.svelte';
	import cookie from '$lib/images/cookie.pink.png';

	let meter: SvelteComponent;
	let state: 'playing' | 'complete';
	state = 'playing';

	let cookieVisible: boolean;
	let cookieStyle: {
		left: number;
		top: number;
	};
	let cookiePosition = 0;

	let cookieJar: number[] = [];
	let clickCount = 0;

	function handleCookieClick() {
		if (cookieVisible) {
			// If the image is visible, hide it
			cookieVisible = false;

			// Generate random position
			const randomLeft = Math.random() * 80 + 10; // Random left position between 10% and 90%
			const randomTop = Math.random() * 80 + 10; // Random top position between 10% and 90%

			// Update image style
			cookieStyle = {
				left: randomLeft,
				top: randomTop
			};
			clickCount++;
			cookieJar.push(clickCount);
			cookieJar = cookieJar;

			cookiePosition = 0;
			cookieVisible = true;
		} else {
			// If the image is hidden, show it again
			cookieVisible = true;
		}
	}

	function resetCookie() {
		const randomLeft = Math.random() * 80 + 10; // Random left position between 10% and 90%
		const randomTop = Math.random() * 80 + 10; // Random top position between 10% and 90%
		cookiePosition = 0;

		// Update image style
		cookieStyle = {
			left: randomLeft,
			top: randomTop
		};
		cookieVisible = true;
	}
	function animateCookie() {
		console.log(cookieStyle);
		if (cookieStyle.top + cookiePosition > 100 || cookieStyle.left + cookiePosition > 100) {
			console.log('reset me');
			cookieVisible = false;
			resetCookie();
		}
		if (cookieVisible) {
			cookiePosition += 0.25; // Adjust the speed of falling by changing this value
		}
		requestAnimationFrame(animateCookie);
	}

	onMount(() => {
		const randomLeft = Math.round(Math.random() * 80 + 20);
		const randomTop = Math.round(Math.random() * 80 + 20);
		cookieStyle = {
			left: randomLeft,
			top: randomTop
		};
		animateCookie();

		cookieVisible = true;
	});
</script>

<div class="column">
	<div class="meter-container">
		<Meter
			bind:this={meter}
			on:complete={() => {
				state = 'complete';
				console.log('complete');
			}}
		/> <button on:click={() => meter.onIncrease('Clicked')}>Increase</button>

		{#if state == 'playing'}
			{#if cookieVisible}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img
					class="cookie"
					src={cookie}
					alt="cookie"
					style={`left: ${cookieStyle.left + cookiePosition}%; top: ${
						cookieStyle.top + cookiePosition
					}%;`}
					on:click={() => {
						handleCookieClick();
						meter.onIncrease('Clicked');
					}}
				/>
			{/if}
		{/if}
	</div>
	<div class="cookie-collection">
		{#if cookieJar}
			{#each cookieJar as c}
				<img src={cookie} alt="" class="lil-cookie" />
			{/each}
		{/if}
	</div>
</div>

<style>
	.lil-cookie {
		height: 15px;
	}
	.meter-container {
		display: grid;
		place-items: center;
		height: 70vh;
		margin: 0;
		font-family: monospace;
	}

	.cookie {
		height: 60px;
		position: absolute;
		transition: top 0.2s ease-out;
		z-index: 10;
	}
</style>
