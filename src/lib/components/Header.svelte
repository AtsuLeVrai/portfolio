<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let isMenuOpen = $state(false);
	let scrollY = $state(0);

	const navLinks = [
		{ label: () => m.nav_about(), href: '#about' },
		{ label: () => m.nav_projects(), href: '#projects' },
		{ label: () => m.nav_experience(), href: '#experience' },
		{ label: () => m.nav_contact(), href: '#contact' },
		{ label: () => m.nav_veille(), href: '/veille', isPage: true }
	];

	const toggleLocale = () => {
		const currentLocale = getLocale();
		setLocale(currentLocale === 'en' ? 'fr' : 'en');
	};

	const isHomePage = $derived(page.url.pathname === '/');

	const handleNavClick = async (href: string) => {
		if (!isHomePage) {
			await goto('/' + href);
			isMenuOpen = false;
			return;
		}
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			isMenuOpen = false;
		}
	};

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const headerShadow = $derived(
		scrollY > 100 ? '0px 4px 12px 0px rgba(17, 24, 39, 0.1)' : '0px 0px 0px 0px rgba(17, 24, 39, 0)'
	);
</script>

<svelte:window bind:scrollY />

<header class="header" style:box-shadow={headerShadow}>
	<nav class="nav">
		<div class="logo">
			<button aria-label="Go to top" onclick={() => handleNavClick('#hero')} type="button">
				<span class="logo-text">TOM</span>.
			</button>
		</div>

		<div class="nav-desktop">
			{#each navLinks as link (link.href)}
				{#if link.isPage}
					<a href={link.href} class="nav-link">
						{link.label()}
						<span class="nav-link-underline"></span>
					</a>
				{:else}
					<button type="button" class="nav-link" onclick={() => handleNavClick(link.href)}>
						{link.label()}
						<span class="nav-link-underline"></span>
					</button>
				{/if}
			{/each}
			<button
				aria-label="Toggle language"
				class="locale-toggle"
				onclick={toggleLocale}
				type="button"
			>
				{getLocale().toUpperCase()}
			</button>
		</div>

		<div class="mobile-controls">
			<button
				aria-label="Toggle language"
				class="locale-toggle"
				onclick={toggleLocale}
				type="button"
			>
				{getLocale().toUpperCase()}
			</button>
			<button
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				class="menu-toggle"
				onclick={toggleMenu}
				type="button"
			>
				{#if isMenuOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="3" y1="12" x2="21" y2="12"></line>
						<line x1="3" y1="6" x2="21" y2="6"></line>
						<line x1="3" y1="18" x2="21" y2="18"></line>
					</svg>
				{/if}
			</button>
		</div>
	</nav>

	<div class="nav-mobile" class:open={isMenuOpen}>
		<div class="nav-mobile-content">
			{#each navLinks as link, index (link.href)}
				{#if link.isPage}
					<a href={link.href} class="nav-mobile-link" style:animation-delay="{index * 50}ms">
						{link.label()}
					</a>
				{:else}
					<button
						type="button"
						class="nav-mobile-link"
						onclick={() => handleNavClick(link.href)}
						style:animation-delay="{index * 50}ms"
					>
						{link.label()}
					</button>
				{/if}
			{/each}
		</div>
	</div>
</header>

<style lang="scss">
	@use '$lib/styles/Header.scss';
</style>
