<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	type Experience = {
		id: string;
		title: () => string;
		company: () => string;
		period: () => string;
		description: (() => string)[];
		technologies: string[];
	};

	const experiences: Experience[] = [
		{
			id: 'web-development-freelance',
			title: () => m.exp_freelance_title(),
			company: () => m.exp_freelance_company(),
			period: () => m.exp_freelance_period(),
			description: [() => m.exp_freelance_desc_1(), () => m.exp_freelance_desc_2()],
			technologies: ['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
		},
		{
			id: 'nyxo-js-library',
			title: () => m.exp_nyxo_title(),
			company: () => m.exp_nyxo_company(),
			period: () => m.exp_nyxo_period(),
			description: [() => m.exp_nyxo_desc_1(), () => m.exp_nyxo_desc_2()],
			technologies: [
				'TypeScript',
				'Node.js',
				'Discord API',
				'Performance Optimization',
				'Documentation',
				'Testing'
			]
		},
		{
			id: 'it-internship-mairie',
			title: () => m.exp_mairie_title(),
			company: () => m.exp_mairie_company(),
			period: () => m.exp_mairie_period(),
			description: [() => m.exp_mairie_desc_1(), () => m.exp_mairie_desc_2()],
			technologies: [
				'Windows',
				'Hardware Maintenance',
				'Network Administration',
				'Technical Support'
			]
		}
	];
</script>

<section class="experience" id="experience">
	<div class="experience-container">
		<!-- Header -->
		<div class="experience-header">
			<h2 class="title">
				{m.experience_title_my()}
				<span class="gradient-text">{m.experience_title_experience()}</span>
			</h2>
			<p class="description">
				{m.experience_description()}
			</p>
		</div>

		<!-- Experience Cards -->
		<div class="experience-grid">
			{#each experiences as exp (exp.id)}
				<div class="experience-card">
					<!-- Gradient accent -->
					<div class="card-accent"></div>

					<!-- Header -->
					<div class="card-header">
						<div class="card-header-top">
							<h3 class="card-title">{exp.title()}</h3>
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
								class="briefcase-icon"
							>
								<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
								<rect width="20" height="14" x="2" y="6" rx="2"></rect>
							</svg>
						</div>
						<p class="card-company">{exp.company()}</p>
						<div class="card-period">
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
								<path d="M8 2v4"></path>
								<path d="M16 2v4"></path>
								<rect width="18" height="18" x="3" y="4" rx="2"></rect>
								<path d="M3 10h18"></path>
							</svg>
							<span>{exp.period()}</span>
						</div>
					</div>

					<!-- Description -->
					<ul class="card-description">
						{#each exp.description as item (item())}
							<li>
								<span class="bullet"></span>
								<span>{item()}</span>
							</li>
						{/each}
					</ul>

					<!-- Technologies -->
					<div class="card-technologies">
						{#each exp.technologies.slice(0, 4) as tech (tech)}
							<span class="tech-tag">{tech}</span>
						{/each}
						{#if exp.technologies.length > 4}
							<span class="tech-tag more">+{exp.technologies.length - 4}</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	// Variables
	$color-gray-600: #4b5563;
	$color-gray-700: #374151;
	$color-gray-900: #111827;
	$color-white: #ffffff;
	$color-cyan-50: #ecfeff;
	$color-cyan-400: #22d3ee;
	$color-cyan-600: #0891b2;
	$color-rose-50: #fff1f2;
	$color-rose-400: #fb7185;
	$color-rose-600: #e11d48;
	$color-purple-400: #c084fc;

	$breakpoint-sm: 640px;
	$breakpoint-md: 768px;
	$breakpoint-lg: 1024px;
	$breakpoint-xl: 1280px;
	$breakpoint-2xl: 1536px;

	$transition-fast: 0.2s ease;
	$transition-normal: 0.3s ease;

	// Section
	.experience {
		position: relative;
		background-color: $color-white;
		padding: 3rem 0;

		@media (min-width: $breakpoint-sm) {
			padding: 3.5rem 0;
		}

		@media (min-width: $breakpoint-md) {
			padding: 4rem 0;
		}

		@media (min-width: $breakpoint-xl) {
			padding: 5rem 0;
		}
	}

	// Container
	.experience-container {
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

	// Header
	.experience-header {
		text-align: center;
		margin-bottom: 2rem;

		@media (min-width: $breakpoint-sm) {
			margin-bottom: 2.5rem;
		}

		@media (min-width: $breakpoint-md) {
			margin-bottom: 3rem;
		}

		@media (min-width: $breakpoint-xl) {
			margin-bottom: 3.5rem;
		}
	}

	.title {
		margin-bottom: 1rem;
		font-size: 1.875rem;
		font-weight: 900;
		color: $color-gray-900;
		line-height: 1.1;

		@media (min-width: $breakpoint-sm) {
			font-size: 2.25rem;
		}

		@media (min-width: $breakpoint-md) {
			font-size: 3rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 3.75rem;
		}

		@media (min-width: $breakpoint-2xl) {
			font-size: 4.5rem;
		}
	}

	.gradient-text {
		background: linear-gradient(to right, $color-cyan-600, $color-rose-600);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.description {
		max-width: 42rem;
		margin: 0 auto;
		font-size: 1rem;
		font-weight: 500;
		color: $color-gray-700;

		@media (min-width: $breakpoint-sm) {
			font-size: 1.125rem;
		}

		@media (min-width: $breakpoint-md) {
			font-size: 1.25rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1.5rem;
		}
	}

	// Experience Grid
	.experience-grid {
		display: grid;
		gap: 1.5rem;

		@media (min-width: $breakpoint-md) {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}

		@media (min-width: $breakpoint-xl) {
			grid-template-columns: repeat(3, 1fr);
			gap: 2.5rem;
		}
	}

	// Experience Card
	.experience-card {
		position: relative;
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 1rem;
		padding: 1.25rem;
		box-shadow: 4px 4px 0px 0px $color-gray-900;
		overflow: hidden;
		transition: $transition-normal;

		@media (min-width: $breakpoint-sm) {
			padding: 1.5rem;
		}

		@media (min-width: $breakpoint-xl) {
			padding: 1.75rem;
		}

		&:hover {
			transform: translateY(-4px);
			box-shadow: 8px 8px 0px 0px $color-gray-900;
		}
	}

	.card-accent {
		position: absolute;
		top: 0;
		right: 0;
		width: 4px;
		height: 100%;
		background: linear-gradient(to bottom, $color-cyan-400, $color-purple-400, $color-rose-400);
	}

	// Card Header
	.card-header {
		margin-bottom: 1rem;
	}

	.card-header-top {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.75rem;
		margin-bottom: 0.5rem;
	}

	.card-title {
		font-size: 1.125rem;
		font-weight: 900;
		color: $color-gray-900;
		line-height: 1.2;

		@media (min-width: $breakpoint-sm) {
			font-size: 1.25rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1.5rem;
		}
	}

	.briefcase-icon {
		flex-shrink: 0;
		width: 1.25rem;
		height: 1.25rem;
		color: $color-cyan-600;

		@media (min-width: $breakpoint-sm) {
			width: 1.5rem;
			height: 1.5rem;
		}
	}

	.card-company {
		margin-bottom: 0.5rem;
		font-size: 1rem;
		font-weight: 700;
		color: $color-cyan-600;

		@media (min-width: $breakpoint-sm) {
			font-size: 1.125rem;
		}
	}

	.card-period {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: $color-gray-600;

		span {
			font-size: 0.75rem;
			font-weight: 600;

			@media (min-width: $breakpoint-sm) {
				font-size: 0.875rem;
			}
		}
	}

	// Card Description
	.card-description {
		list-style: none;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.375rem;

		li {
			display: flex;
			align-items: flex-start;
			gap: 0.5rem;
			font-size: 0.75rem;
			font-weight: 500;
			color: $color-gray-700;
			line-height: 1.5;

			@media (min-width: $breakpoint-sm) {
				font-size: 0.875rem;
			}
		}
	}

	.bullet {
		flex-shrink: 0;
		width: 0.375rem;
		height: 0.375rem;
		margin-top: 0.375rem;
		border-radius: 50%;
		background: linear-gradient(to right, $color-cyan-600, $color-rose-600);
	}

	// Card Technologies
	.card-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;

		@media (min-width: $breakpoint-sm) {
			gap: 0.5rem;
		}
	}

	.tech-tag {
		padding: 0.25rem 0.625rem;
		background: linear-gradient(to right, $color-cyan-50, $color-rose-50);
		border: 2px solid $color-gray-900;
		border-radius: 9999px;
		font-size: 0.625rem;
		font-weight: 700;
		color: $color-gray-900;

		@media (min-width: $breakpoint-sm) {
			font-size: 0.75rem;
		}

		&.more {
			background: #e5e7eb;
			color: $color-gray-700;
		}
	}
</style>
