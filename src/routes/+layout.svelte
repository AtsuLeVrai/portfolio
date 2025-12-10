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
	@use '$lib/styles/Layout.scss';
</style>
