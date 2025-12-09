<script lang="ts">
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/900.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const { children } = $props();
</script>

<svelte:head></svelte:head>

<Header />

<main>
	{@render children()}
</main>

<Footer />

<style lang="scss">
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: 'Poppins', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	// Hide scrollbars
	:global(*) {
		scrollbar-width: none; // Firefox
		-ms-overflow-style: none; // IE/Edge

		&::-webkit-scrollbar {
			display: none; // Chrome/Safari/Opera
		}
	}
</style>
