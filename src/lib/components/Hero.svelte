<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { SOCIAL_LINKS } from '$lib/constants';
</script>

<section class="hero" id="hero">
	<div class="hero-container">
		<div class="hero-content">
			<h1 class="hero-title">
				{m.hero_greeting()}
				<br />
				<span class="gradient-text">{m.hero_name()}</span>!
			</h1>

			<p class="hero-role">{m.hero_role()}</p>

			<!-- Social Links -->
			<div class="social-links">
				{#each SOCIAL_LINKS as social (social.name)}
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						class="social-link {social.hoverClass}"
						aria-label={social.label}
					>
						{#if social.name === 'GitHub'}
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
								<path
									d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
								></path>
								<path d="M9 18c-4.51 2-5-2-7-2"></path>
							</svg>
						{:else if social.name === 'LinkedIn'}
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
								<path
									d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
								></path>
								<rect width="4" height="12" x="2" y="9"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
						{:else if social.name === 'Email'}
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
								<rect width="20" height="16" x="2" y="4" rx="2"></rect>
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
							</svg>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<button
		aria-label={m.hero_scroll()}
		class="scroll-indicator"
		onclick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
	>
		<svg
			fill="none"
			height="40"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="3"
			viewBox="0 0 24 24"
			width="40"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m6 9 6 6 6-6"></path>
		</svg>
	</button>
</section>

<style lang="scss">
	// Variables
	$color-gray-700: #374151;
	$color-gray-900: #111827;
	$color-white: #ffffff;
	$color-cyan-50: #ecfeff;
	$color-cyan-600: #0891b2;
	$color-rose-50: #fff1f2;
	$color-rose-600: #e11d48;
	$color-purple-600: #9333ea;
	$color-blue-600: #2563eb;

	$breakpoint-sm: 640px;
	$breakpoint-md: 768px;
	$breakpoint-lg: 1024px;
	$breakpoint-xl: 1280px;
	$breakpoint-2xl: 1536px;

	$transition-fast: 0.2s ease;

	// Hero Section
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: linear-gradient(to bottom right, $color-rose-50, $color-white, $color-cyan-50);
		padding: 5rem 0 2rem;

		@media (min-width: $breakpoint-sm) {
			padding: 6rem 0;
		}

		@media (min-width: $breakpoint-md) {
			padding: 7rem 0;
		}
	}

	// Container
	.hero-container {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1rem;

		@media (min-width: $breakpoint-sm) {
			padding: 0 1.5rem;
		}

		@media (min-width: $breakpoint-lg) {
			padding: 0 2rem;
		}

		@media (min-width: $breakpoint-xl) {
			max-width: 1400px;
		}

		@media (min-width: $breakpoint-2xl) {
			max-width: 1600px;
		}
	}

	// Hero Content
	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1.5rem;

		@media (min-width: $breakpoint-md) {
			gap: 2rem;
		}

		@media (min-width: $breakpoint-xl) {
			gap: 2.5rem;
		}
	}

	.hero-title {
		font-size: 2.25rem;
		font-weight: 900;
		color: $color-gray-900;
		line-height: 1;
		letter-spacing: -0.025em;

		@media (min-width: $breakpoint-sm) {
			font-size: 3rem;
		}

		@media (min-width: $breakpoint-md) {
			font-size: 3.75rem;
		}

		@media (min-width: $breakpoint-lg) {
			font-size: 4.5rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 6rem;
		}

		@media (min-width: $breakpoint-2xl) {
			font-size: 8rem;
		}
	}

	.gradient-text {
		background: linear-gradient(to right, $color-purple-600, $color-cyan-600, $color-rose-600);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.hero-role {
		max-width: 42rem;
		font-size: 1.125rem;
		font-weight: 500;
		color: $color-gray-700;
		line-height: 1.625;

		@media (min-width: $breakpoint-sm) {
			font-size: 1.25rem;
		}

		@media (min-width: $breakpoint-md) {
			font-size: 1.5rem;
		}

		@media (min-width: $breakpoint-lg) {
			font-size: 1.875rem;
		}

		@media (min-width: $breakpoint-2xl) {
			font-size: 2.25rem;
		}
	}

	// Social Links
	.social-links {
		display: flex;
		gap: 1rem;
	}

	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3.5rem;
		height: 3.5rem;
		background-color: $color-white;
		border: 3px solid $color-gray-900;
		border-radius: 0.75rem;
		color: $color-gray-900;
		box-shadow: 4px 4px 0px 0px $color-gray-900;
		transition: $transition-fast;

		@media (min-width: $breakpoint-md) {
			border-width: 4px;
		}

		&:hover {
			transform: translateY(-4px);
			box-shadow: 6px 6px 0px 0px $color-gray-900;
		}

		&:active {
			transform: translateY(0);
			box-shadow: 2px 2px 0px 0px $color-gray-900;
		}

		&.github:hover {
			background-color: $color-gray-900;
			color: $color-white;
		}

		&.linkedin:hover {
			background-color: $color-blue-600;
			color: $color-white;
		}

		&.email:hover {
			background-color: $color-cyan-600;
			color: $color-white;
		}
	}

	// Scroll Indicator
	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		background: none;
		border: none;
		cursor: pointer;
		color: $color-gray-900;
		transition: $transition-fast;

		&:hover {
			transform: translateX(-50%) translateY(4px);
		}
	}
</style>
