<script lang="ts">
	import Layout from '../+layout.svelte';
	import Meter from '../day2/Meter.svelte';

	export let data;
	interface Child {
		name: string;
		weight: number;
	}
	const giftList: Child[] = data.giftList;

	let santasSleigh = 0;
	let sentTotal = 0;
	let sentGifts: Child[] = [];
	let onSleigh: Child[] = [];
	let tripCounter = 0;

	function addToSleigh(c: Child): boolean {
		if (santasSleigh >= 100) {
			return false;
		}
		if (santasSleigh + c.weight >= 100) {
			return false;
		}
		santasSleigh += c.weight;
		santasSleigh = Math.round(santasSleigh * 100) / 100;
		onSleigh = [...onSleigh, c];
		return true;
	}

	function sendSleigh() {
		tripCounter++;
		sentTotal += santasSleigh;
		santasSleigh = 0;
		sentGifts = [...sentGifts, ...onSleigh];
		onSleigh = [];
	}
</script>

<div class="sleigh">
	Santa's Sleigh: {santasSleigh} lbs
</div>
<div class="counter">
	How many trips has Santa taken? {tripCounter}
</div>
<div class="send"><button on:click={() => sendSleigh()}>Send</button></div>
{#if giftList.length <= 0 && onSleigh.length <= 0}
	<h2>Complete!</h2>
	<!-- This is not working yet -->
{:else}
	<div class="grid">
		<div class="column">
			{#each giftList as c}
				<div class="row">
					<button
						class="child"
						on:click={(e) => {
							let hasSpace = addToSleigh(c);
							hasSpace ? e.currentTarget.remove() : null;
						}}>{c.name} {c.weight}</button
					>
				</div>
			{/each}
		</div>
		<div class="column">
			{#each onSleigh as c}
				<div class="row">
					<div class="child">{c.name} {c.weight}</div>
				</div>
			{/each}
		</div>
		<div class="column">
			{#each sentGifts as c}
				<div class="row">
					<div class="child">{c.name} {c.weight}</div>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.row {
		padding-right: 40px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;
		padding: 20px;
	}
</style>
