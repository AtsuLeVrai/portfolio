<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	type Project = {
		id: string;
		title: () => string;
		description: () => string;
		tags: string[];
		gradient: string;
		icon: string;
		metrics: { label: string; value: string }[];
		isPrivate: boolean;
	};

	const projects: Project[] = [
		{
			id: 'chronos',
			title: () => m.project_chronos_title(),
			description: () => m.project_chronos_short(),
			tags: ['Python', 'PyTorch', 'LSTM', 'PPO', 'MetaTrader5', 'NEAT'],
			gradient: 'purple-cyan',
			icon: 'chart',
			metrics: [
				{ label: 'Language', value: 'Python' },
				{ label: 'ML', value: 'PyTorch' },
				{ label: 'Status', value: 'Private' }
			],
			isPrivate: true
		},
		{
			id: 'ares',
			title: () => m.project_ares_title(),
			description: () => m.project_ares_short(),
			tags: ['SvelteKit', 'TypeScript', 'Bun', 'Elysia', 'Solana', 'PostgreSQL'],
			gradient: 'orange-red',
			icon: 'trading',
			metrics: [
				{ label: 'Frontend', value: 'SvelteKit' },
				{ label: 'Runtime', value: 'Bun' },
				{ label: 'Status', value: 'Private' }
			],
			isPrivate: true
		}
	];
</script>

<section class="projects" id="projects">
	<div class="projects-container">
		<div class="projects-header">
			<h2 class="title">
				{m.projects_title_my()} <span class="gradient-text">{m.projects_title_projects()}</span>
			</h2>
			<p class="description">
				{m.projects_description()}
			</p>
		</div>

		<div class="projects-grid">
			{#each projects as project (project.id)}
				<article class="project-card">
					{#if project.isPrivate}
						<div class="private-badge">PRIVATE</div>
					{/if}

					<div class="card-header {project.gradient}">
						{#if project.icon === 'chart'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="80"
								height="80"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M3 3v18h18"></path>
								<path d="m19 9-5 5-4-4-3 3"></path>
							</svg>
						{:else if project.icon === 'trading'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="80"
								height="80"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
							</svg>
						{/if}
					</div>

					<div class="card-content">
						<h3 class="card-title">{project.title()}</h3>
						<p class="card-description">{project.description()}</p>

						{#if project.metrics && project.metrics.length > 0}
							<div class="metrics-grid">
								{#each project.metrics as metric (metric.label)}
									<div class="metric">
										<div class="metric-value">{metric.value}</div>
										<div class="metric-label">{metric.label}</div>
									</div>
								{/each}
							</div>
						{/if}

						<div class="tags">
							{#each project.tags as tag (tag)}
								<span class="tag">{tag}</span>
							{/each}
						</div>

						<div class="card-footer">
							<span class="private-notice">
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
									<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
									<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
								</svg>
								Private Repository
							</span>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Projects.scss';
</style>
