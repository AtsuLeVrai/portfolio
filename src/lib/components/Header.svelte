<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';

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

	const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			isMenuOpen = false;
		}
	};

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	// Reactive shadow based on scroll
	const headerShadow = $derived(
		scrollY > 100 ? '0px 4px 12px 0px rgba(17, 24, 39, 0.1)' : '0px 0px 0px 0px rgba(17, 24, 39, 0)'
	);
</script>

<svelte:window bind:scrollY />

<header class="header" style:box-shadow={headerShadow}>
	<nav class="nav">
		<!-- Logo -->
		<div class="logo">
			<button aria-label="Go to top" onclick={() => handleNavClick('#hero')} type="button">
				<span class="logo-text">TOM</span>.
			</button>
		</div>

		<!-- Desktop Navigation -->
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

		<!-- Mobile Menu Button -->
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

	<!-- Mobile Navigation -->
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
	// Variables
	$color-gray-700: #374151;
	$color-gray-900: #111827;
	$color-cyan-50: #ecfeff;
	$color-cyan-100: #cffafe;
	$color-cyan-600: #0891b2;
	$color-rose-600: #e11d48;
	$color-white: #ffffff;

	$breakpoint-sm: 640px;
	$breakpoint-md: 768px;
	$breakpoint-lg: 1024px;
	$breakpoint-xl: 1280px;
	$breakpoint-2xl: 1536px;

	$transition-fast: 0.2s ease;
	$transition-normal: 0.3s ease;

	// Header
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		background-color: rgba($color-white, 0.8);
		backdrop-filter: blur(12px);
		border-bottom: 2px solid $color-gray-900;
		animation: slideDown 0.6s ease-out;
	}

	@keyframes slideDown {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}

	// Navigation
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1280px;
		margin: 0 auto;
		padding: 0.75rem 1rem;

		@media (min-width: $breakpoint-sm) {
			padding: 1rem 1.5rem;
		}

		@media (min-width: $breakpoint-lg) {
			padding: 1rem 2rem;
		}

		@media (min-width: $breakpoint-xl) {
			max-width: 1400px;
		}

		@media (min-width: $breakpoint-2xl) {
			max-width: 1600px;
		}
	}

	// Logo
	.logo {
		animation: fadeInLeft 0.5s ease-out;

		button {
			background: none;
			border: none;
			cursor: pointer;
			font-family: inherit;
			font-size: 1.25rem;
			font-weight: 900;
			color: $color-gray-900;

			@media (min-width: $breakpoint-sm) {
				font-size: 1.5rem;
			}

			@media (min-width: $breakpoint-xl) {
				font-size: 1.875rem;
			}
		}
	}

	.logo-text {
		position: relative;
		display: inline-block;

		// Texte de base (visible par défaut)
		&::before {
			content: 'TOM';
			position: absolute;
			left: 0;
			top: 0;
			background: linear-gradient(to right, $color-cyan-600, $color-rose-600);
			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
			opacity: 0;
			transition: opacity $transition-normal;
		}

		.logo button:hover &::before {
			opacity: 1;
		}
	}

	@keyframes fadeInLeft {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	// Desktop Navigation
	.nav-desktop {
		display: none;
		align-items: center;
		gap: 1.5rem;
		animation: fadeInDown 0.5s ease-out 0.1s both;

		@media (min-width: $breakpoint-md) {
			display: flex;
		}

		@media (min-width: $breakpoint-xl) {
			gap: 2rem;
		}

		@media (min-width: $breakpoint-2xl) {
			gap: 2.5rem;
		}
	}

	@keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.nav-link {
		position: relative;
		background: none;
		border: none;
		cursor: pointer;
		font-family: inherit;
		font-size: 0.875rem;
		font-weight: 700;
		color: $color-gray-700;
		text-decoration: none;
		transition: $transition-fast;
		padding: 0.25rem 0;

		@media (min-width: $breakpoint-sm) {
			font-size: 1rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1.125rem;
		}

		&:hover {
			color: $color-gray-900;
			transform: translateY(-2px);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	.nav-link-underline {
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background-color: $color-cyan-600;
		transition: width $transition-normal;

		.nav-link:hover & {
			width: 100%;
		}
	}

	// Locale Toggle
	.locale-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.375rem 0.75rem;
		background: linear-gradient(to right, $color-cyan-50, $color-cyan-100);
		border: 2px solid $color-gray-900;
		border-radius: 0.5rem;
		cursor: pointer;
		font-family: inherit;
		font-size: 0.75rem;
		font-weight: 900;
		color: $color-gray-900;
		transition: $transition-fast;

		@media (min-width: $breakpoint-sm) {
			padding: 0.5rem 1rem;
			font-size: 0.875rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1rem;
		}

		&:hover {
			background: linear-gradient(to right, $color-cyan-100, $color-cyan-600);
			color: $color-white;
			transform: scale(1.05);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	// Mobile Controls
	.mobile-controls {
		display: flex;
		align-items: center;
		gap: 0.75rem;

		@media (min-width: $breakpoint-md) {
			display: none;
		}
	}

	.menu-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 0.5rem;
		cursor: pointer;
		color: $color-gray-900;
		transition: $transition-fast;
		animation: fadeInRight 0.5s ease-out;

		@media (min-width: $breakpoint-sm) {
			padding: 0.625rem;
		}

		&:hover {
			transform: scale(1.05);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	@keyframes fadeInRight {
		from {
			opacity: 0;
			transform: translateX(20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	// Mobile Navigation
	.nav-mobile {
		display: block;
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition:
			max-height $transition-normal,
			opacity $transition-normal;

		@media (min-width: $breakpoint-md) {
			display: none;
		}

		&.open {
			max-height: 400px;
			opacity: 1;
		}
	}

	.nav-mobile-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
		background-color: $color-white;
		border-top: 2px solid $color-gray-900;

		@media (min-width: $breakpoint-sm) {
			padding: 1rem 1.5rem;
		}
	}

	.nav-mobile-link {
		display: block;
		width: 100%;
		padding: 0.75rem 1rem;
		background-color: $color-cyan-50;
		border: 2px solid $color-gray-900;
		border-radius: 0.5rem;
		cursor: pointer;
		text-align: left;
		text-decoration: none;
		font-family: inherit;
		font-size: 0.875rem;
		font-weight: 700;
		color: $color-gray-900;
		transition: $transition-fast;
		opacity: 0;
		transform: translateX(-20px);

		.nav-mobile.open & {
			animation: slideInLeft 0.3s ease-out forwards;
		}

		@media (min-width: $breakpoint-sm) {
			font-size: 1rem;
		}

		&:hover {
			background-color: $color-cyan-100;
			transform: translateX(4px);
		}

		&:active {
			transform: scale(0.98);
		}
	}

	@keyframes slideInLeft {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
