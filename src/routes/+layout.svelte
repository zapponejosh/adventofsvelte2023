<script>
	// import { page } from '$app/stores';
	import '../styles.css';
	import logo from '$lib/images/santa-svelte.png';
</script>

<nav>
	<a href="/"> <img src={logo} alt="Advent of Svelte" /></a>
</nav>

<main>
	<slot />
</main>
<footer>Doing fun stuff here :dancing-panda:</footer>

<style>
	nav {
		margin: 0 auto;
		display: flex;
		height: 4rem;
		align-items: center;
		justify-content: center;
		max-width: var(--column);
		padding: 0 var(--side);
		color: var(--accent);
	}
	img {
		height: 3rem;
		margin-top: 1rem;
	}

	footer {
		margin-top: 10px;
		display: flex;
		justify-content: center;
		height: 5rem;
	}
</style>
