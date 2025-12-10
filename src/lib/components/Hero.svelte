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
	@use '$lib/styles/Hero.scss';
</style>
