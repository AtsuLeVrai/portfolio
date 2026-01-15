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
		link?: string;
	};

	const projects: Project[] = [
		{
			id: 'apex',
			title: () => m.project_apex_title(),
			description: () => m.project_apex_short(),
			tags: ['Python', 'MetaTrader5', 'SMC/ICT', 'Textual', 'Pydantic'],
			gradient: 'purple-cyan',
			icon: 'chart',
			metrics: [
				{ label: 'Language', value: 'Python' },
				{ label: 'Platform', value: 'MT5' },
				{ label: 'Status', value: 'Private' }
			],
			isPrivate: true
		},
		{
			id: 'cordbun',
			title: () => m.project_cordbun_title(),
			description: () => m.project_cordbun_short(),
			tags: ['TypeScript', 'Bun', 'Discord API', 'WebSocket'],
			gradient: 'orange-red',
			icon: 'discord',
			metrics: [
				{ label: 'Runtime', value: 'Bun' },
				{ label: 'Language', value: 'TypeScript' },
				{ label: 'Status', value: 'Open Source' }
			],
			isPrivate: false,
			link: 'https://github.com/t-aize/cordbun'
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
						{:else if project.icon === 'discord'}
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
								<path d="m18 16 4-4-4-4"></path>
								<path d="m6 8-4 4 4 4"></path>
								<path d="m14.5 4-5 16"></path>
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
							{#if project.isPrivate}
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
							{:else if project.link}
								<a href={project.link} target="_blank" rel="noopener noreferrer" class="opensource-notice">
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
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
										<path d="M9 18c-4.51 2-5-2-7-2"></path>
									</svg>
									View on GitHub
								</a>
							{/if}
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
