<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { SEO } from '$lib/constants';

	const pageTitle = `LinkedIn Banner | ${SEO.siteName}`;
	const pageDescription = 'LinkedIn banner preview - Neo-Brutalist style';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="banner-page">
	<a href="/" class="back-link">
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
			<path d="m12 19-7-7 7-7"></path>
			<path d="M19 12H5"></path>
		</svg>
		{m.common_back()}
	</a>

	<h1 class="page-title">{m.banner_page_title()}</h1>

	<div class="banner-container">
		<div class="banner">
			<div class="deco-circle-1"></div>
			<div class="deco-circle-2"></div>
			<div class="deco-circle-3"></div>
			<div class="grid-pattern"></div>

			<div class="content">
				<div class="text-section">
					<span class="greeting">{m.banner_greeting()}</span>
					<h2 class="name">{m.banner_name()} <span class="gradient-text">{m.banner_name_highlight()}</span></h2>
					<p class="role">{m.banner_role()} <span class="role-highlight">{m.banner_role_highlight()}</span></p>
					<div class="tags">
						<span class="tag">{m.banner_tag_typescript()}</span>
						<span class="tag">{m.banner_tag_python()}</span>
						<span class="tag">{m.banner_tag_discord()}</span>
					</div>
				</div>

				<div class="cards-section">
					<div class="floating-card card-1">
						<div class="card-icon cyan">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polyline points="16 18 22 12 16 6"></polyline>
								<polyline points="8 6 2 12 8 18"></polyline>
							</svg>
						</div>
						<span class="card-text">{m.banner_card_experience()}</span>
					</div>

					<div class="floating-card card-2">
						<div class="card-icon rose">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
								<path d="M2 17l10 5 10-5"></path>
								<path d="M2 12l10 5 10-5"></path>
							</svg>
						</div>
						<span class="card-text">{m.banner_card_realtime()}</span>
					</div>

					<div class="floating-card card-3">
						<div class="card-icon purple">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="12" r="10"></circle>
								<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
								<line x1="12" y1="17" x2="12.01" y2="17"></line>
							</svg>
						</div>
						<span class="card-text">{m.banner_card_opensource()}</span>
					</div>
				</div>
			</div>

			<div class="accent-bar"></div>
		</div>
	</div>

	<p class="instructions">
		<strong>{m.banner_export_instructions()}</strong><br />
		{m.banner_export_alternative()}
	</p>
</section>

<style lang="scss">
	@use '$lib/styles/Banner.scss';
</style>
