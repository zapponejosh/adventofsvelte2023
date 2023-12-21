<script lang="ts">
	import { createSearchStore, searchHandler } from '$lib/stores/search.js';
	import { onDestroy } from 'svelte';

	interface Children {
		name: string;
		tally: number;
	}
	export let data;
	let children: Children[] = data.children;

	const searchStore = createSearchStore(children);
	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	function handleIncrement(child: string) {
		let childIndex = $searchStore.filtered.findIndex((c) => c.name === child);

		$searchStore.filtered[childIndex].tally++;
	}

	function handleDecrement(child: string) {
		let childIndex = $searchStore.filtered.findIndex((c) => c.name === child);

		$searchStore.filtered[childIndex].tally--;
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="column">
	<h1>{data.children.length} Children</h1>
	<label class="search"
		>Search for child
		<input
			type="text"
			name="filter"
			id="filter"
			placeholder="name"
			bind:value={$searchStore.searchStr}
		/>
	</label>
	<div class="kids">
		{#each $searchStore.filtered as child (child)}
			<div
				class="child-row"
				class:good={Math.sign(child.tally) == 1}
				class:bad={Math.sign(child.tally) == -1}
			>
				<span class="name">{child.name}</span>
				<span class="tally">{child.tally}</span>
				<div class="buttons">
					<button class="nice" on:click={() => handleIncrement(child.name)}>Nice</button>
					<button class="naughty" on:click={() => handleDecrement(child.name)}>Naughty</button>
				</div>
			</div>
		{/each}
	</div>
	<!-- form for adding children -->

	<!-- list of children and tally -->
	<!-- search for children -->

	<!-- each child row has a form or maybe just a click handler since this is client side and doesn't persist  with naughty and nice buttons to increment or decrement their tally -->

	<!-- Some styles to indicate good vs bad -->
</div>

<style>
	input {
		padding: 3px;
	}

	.kids {
		margin: 0 auto;
		max-width: var(--column);
		margin-top: 20px;
		border: 3px solid green;
		border-radius: 8px;
	}
	.child-row {
		display: flex;
		gap: 12px;
		max-width: var(--column);
		justify-content: space-between;
		border-bottom: 1px dashed;
		padding: 6px;
	}

	.child-row:last-of-type {
		border-bottom: 0;
	}

	.good {
		background-color: rgba(37, 159, 47, 0.356);
	}

	.bad {
		background-color: rgba(159, 37, 37, 0.356);
	}

	.child-row:not(.good):not(.bad) {
		background-color: rgba(255, 255, 0, 0.318);
	}

	.name {
		width: 200px;
		font-weight: 600;
	}

	.buttons {
		display: flex;
		gap: 12px;
	}

	button {
		border-radius: 10px;
		border: 0;
		cursor: pointer;
	}
	button:hover {
		transform: scale(1.2);
	}

	.nice {
		background-color: rgb(107, 204, 107);
	}

	.naughty {
		background-color: rgb(204, 107, 107);
	}
</style>
