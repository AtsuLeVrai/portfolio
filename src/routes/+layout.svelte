<script lang="ts">
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/900.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SEO } from '$lib/constants';

	const { children } = $props();
</script>

<svelte:head>
	<title>{SEO.defaultTitle}</title>
	<meta name="description" content={SEO.defaultDescription} />
	<meta name="keywords" content={SEO.defaultKeywords.join(', ')} />
	<meta name="author" content={SEO.author} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={SEO.siteUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SEO.siteName} />
	<meta property="og:title" content={SEO.defaultTitle} />
	<meta property="og:description" content={SEO.defaultDescription} />
	<meta property="og:url" content={SEO.siteUrl} />
	<meta property="og:image" content={`${SEO.siteUrl}${SEO.ogImage}`} />
	<meta property="og:locale" content={SEO.locale} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={SEO.twitterHandle} />
	<meta name="twitter:creator" content={SEO.twitterHandle} />
	<meta name="twitter:title" content={SEO.defaultTitle} />
	<meta name="twitter:description" content={SEO.defaultDescription} />
	<meta name="twitter:image" content={`${SEO.siteUrl}${SEO.ogImage}`} />
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<Footer />

<style lang="scss">
	@use '$lib/styles/Layout.scss';
</style>
