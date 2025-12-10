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
		<div class="experience-header">
			<h2 class="title">
				{m.experience_title_my()}
				<span class="gradient-text">{m.experience_title_experience()}</span>
			</h2>
			<p class="description">
				{m.experience_description()}
			</p>
		</div>

		<div class="experience-grid">
			{#each experiences as exp (exp.id)}
				<div class="experience-card">
					<div class="card-accent"></div>

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

					<ul class="card-description">
						{#each exp.description as item (item())}
							<li>
								<span class="bullet"></span>
								<span>{item()}</span>
							</li>
						{/each}
					</ul>

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
	@use '$lib/styles/Experience.scss';
</style>
