<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { SOCIAL_LINKS, CONTACT_INFO } from '$lib/constants';

	const navLinks = [
		{ label: () => m.nav_about(), href: '#about' },
		{ label: () => m.nav_projects(), href: '#projects' },
		{ label: () => m.nav_experience(), href: '#experience' }
	];

	const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer" id="contact">
	<div class="footer-container">
		<div class="footer-grid">
			<div class="brand">
				<h3 class="brand-name">TOM<span class="accent">.</span></h3>
				<p class="brand-description">{m.footer_brand_tagline()}</p>
			</div>

			<div class="nav-section">
				<h4 class="nav-title">{m.footer_navigation()}</h4>
				<ul class="nav-list">
					{#each navLinks as link (link.href)}
						<li>
							<button type="button" onclick={() => handleNavClick(link.href)}>
								{link.label()}
							</button>
						</li>
					{/each}
				</ul>
			</div>

			<div class="contact-section">
				<h4 class="nav-title">{m.contact_connect_title()}</h4>
				<a href="mailto:{CONTACT_INFO.email}" class="email-link">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
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
					{CONTACT_INFO.email}
				</a>
				<div class="social-links-inline">
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
									width="18"
									height="18"
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
									width="18"
									height="18"
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
									width="18"
									height="18"
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
					<a href="/cv" class="social-link cv" aria-label="CV">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
							<polyline points="14 2 14 8 20 8"></polyline>
							<line x1="16" y1="13" x2="8" y2="13"></line>
							<line x1="16" y1="17" x2="8" y2="17"></line>
							<polyline points="10 9 9 9 8 9"></polyline>
						</svg>
					</a>
					<a href="/banner" class="social-link banner" aria-label="LinkedIn Banner">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
							<circle cx="9" cy="9" r="2"></circle>
							<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<div class="divider"></div>

		<div class="footer-bottom">
			<p class="copyright">{m.footer_copyright({ year: currentYear.toString() })}</p>
		</div>
	</div>
</footer>

<style lang="scss">
	@use '$lib/styles/Footer.scss';
</style>
