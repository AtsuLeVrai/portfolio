<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { SOCIAL_LINKS } from '$lib/constants';

	const navLinks = [
		{ label: () => m.nav_about(), href: '#about' },
		{ label: () => m.nav_projects(), href: '#projects' },
		{ label: () => m.nav_experience(), href: '#experience' },
		{ label: () => m.nav_contact(), href: '#contact' }
	];

	const navSections = [
		{
			title: () => m.footer_navigation(),
			links: navLinks.slice(0, 2)
		},
		{
			title: () => m.footer_connect(),
			links: navLinks.slice(2)
		}
	];

	const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-container">
		<div class="footer-grid">
			<!-- Brand -->
			<div class="brand">
				<h3 class="brand-name">TOM<span class="accent">.</span></h3>
				<p class="brand-description">{m.footer_brand_tagline()}</p>
			</div>

			<!-- Nav Sections -->
			{#each navSections as section (section.title())}
				<div class="nav-section">
					<h4 class="nav-title">{section.title()}</h4>
					<ul class="nav-list">
						{#each section.links as link (link.href)}
							<li>
								<button type="button" onclick={() => handleNavClick(link.href)}>
									{link.label()}
								</button>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Gradient Divider -->
		<div class="divider"></div>

		<!-- Bottom -->
		<div class="footer-bottom">
			<!-- Social Links -->
			<div class="social-links">
				{#each SOCIAL_LINKS as social (social.name)}
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						class="social-link {social.hoverClass}"
						aria-label={social.name}
					>
						{#if social.name === 'GitHub'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
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
								width="20"
								height="20"
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
								width="20"
								height="20"
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

			<!-- Copyright -->
			<p class="copyright">{m.footer_copyright({ year: currentYear.toString() })}</p>
		</div>
	</div>
</footer>

<style lang="scss">
	// Variables
	$color-gray-50: #f9fafb;
	$color-gray-100: #f3f4f6;
	$color-gray-600: #4b5563;
	$color-gray-900: #111827;
	$color-white: #ffffff;
	$color-cyan-400: #22d3ee;
	$color-cyan-600: #0891b2;
	$color-purple-400: #c084fc;
	$color-rose-400: #fb7185;
	$color-blue-600: #2563eb;

	$breakpoint-sm: 640px;
	$breakpoint-md: 768px;
	$breakpoint-lg: 1024px;
	$breakpoint-xl: 1280px;
	$breakpoint-2xl: 1536px;

	$transition-fast: 0.2s ease;

	// Footer
	.footer {
		position: relative;
		background: linear-gradient(to bottom right, $color-gray-50, $color-gray-100);
		border-top: 2px solid $color-gray-900;

		@media (min-width: $breakpoint-md) {
			border-top-width: 3px;
		}

		@media (min-width: $breakpoint-xl) {
			border-top-width: 4px;
		}
	}

	// Container
	.footer-container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem 1rem;

		@media (min-width: $breakpoint-sm) {
			padding: 2.5rem 1.5rem;
		}

		@media (min-width: $breakpoint-lg) {
			padding: 2.5rem 2rem;
		}

		@media (min-width: $breakpoint-xl) {
			max-width: 1400px;
			padding: 3rem 2rem;
		}

		@media (min-width: $breakpoint-2xl) {
			max-width: 1600px;
			padding: 4rem 2rem;
		}
	}

	// Grid
	.footer-grid {
		display: grid;
		gap: 1.5rem;

		@media (min-width: $breakpoint-sm) {
			gap: 2rem;
		}

		@media (min-width: $breakpoint-md) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (min-width: $breakpoint-xl) {
			gap: 2.5rem;
		}
	}

	// Brand
	.brand-name {
		margin-bottom: 0.75rem;
		font-size: 1.5rem;
		font-weight: 900;
		color: $color-gray-900;

		@media (min-width: $breakpoint-sm) {
			margin-bottom: 1rem;
			font-size: 1.875rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 2.25rem;
		}

		@media (min-width: $breakpoint-2xl) {
			font-size: 3rem;
		}
	}

	.accent {
		color: $color-cyan-600;
	}

	.brand-description {
		font-size: 0.875rem;
		font-weight: 500;
		color: $color-gray-600;
		line-height: 1.625;

		@media (min-width: $breakpoint-sm) {
			font-size: 1rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1.125rem;
		}
	}

	// Nav Section
	.nav-title {
		margin-bottom: 0.75rem;
		font-size: 1rem;
		font-weight: 900;
		color: $color-gray-900;

		@media (min-width: $breakpoint-sm) {
			margin-bottom: 1rem;
			font-size: 1.125rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1.25rem;
		}

		@media (min-width: $breakpoint-2xl) {
			font-size: 1.5rem;
		}
	}

	.nav-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		@media (min-width: $breakpoint-xl) {
			gap: 0.75rem;
		}

		button {
			background: none;
			border: none;
			padding: 0;
			font-family: inherit;
			font-size: 0.875rem;
			font-weight: 500;
			color: $color-gray-600;
			cursor: pointer;
			transition: color $transition-fast;

			@media (min-width: $breakpoint-sm) {
				font-size: 1rem;
			}

			@media (min-width: $breakpoint-xl) {
				font-size: 1.125rem;
			}

			&:hover {
				color: $color-cyan-600;
			}
		}
	}

	// Divider
	.divider {
		height: 4px;
		margin: 1.5rem 0;
		background: linear-gradient(to right, $color-purple-400, $color-cyan-400, $color-rose-400);
		border-radius: 9999px;

		@media (min-width: $breakpoint-sm) {
			margin: 2rem 0;
		}

		@media (min-width: $breakpoint-xl) {
			margin: 2.5rem 0;
		}
	}

	// Footer Bottom
	.footer-bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;

		@media (min-width: $breakpoint-sm) {
			gap: 1.5rem;
		}

		@media (min-width: $breakpoint-md) {
			flex-direction: row;
		}

		@media (min-width: $breakpoint-xl) {
			gap: 2rem;
		}
	}

	// Social Links
	.social-links {
		display: flex;
		gap: 0.75rem;

		@media (min-width: $breakpoint-sm) {
			gap: 1rem;
		}

		@media (min-width: $breakpoint-xl) {
			gap: 1.25rem;
		}
	}

	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.625rem;
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 50%;
		color: $color-gray-900;
		transition: $transition-fast;

		@media (min-width: $breakpoint-sm) {
			padding: 0.75rem;
		}

		@media (min-width: $breakpoint-xl) {
			padding: 1rem;

			svg {
				width: 24px;
				height: 24px;
			}
		}

		&:hover {
			transform: translateY(-4px) rotate(5deg);
		}

		&:active {
			transform: scale(0.95);
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

	// Copyright
	.copyright {
		font-size: 0.75rem;
		font-weight: 500;
		color: $color-gray-600;

		@media (min-width: $breakpoint-sm) {
			font-size: 0.875rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1rem;
		}
	}
</style>
