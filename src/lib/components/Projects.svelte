<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	type Project = {
		id: string;
		title: () => string;
		shortDescription: () => string;
		longDescription: () => string;
		tags: string[];
		gradient: string;
		icon: string;
		githubUrl: string;
		featured: boolean;
		metrics: { label: string; value: string }[];
	};

	const projects: Project[] = [
		{
			id: 'zen',
			title: () => m.project_zen_title(),
			shortDescription: () => m.project_zen_short(),
			longDescription: () => m.project_zen_long(),
			tags: ['Rust', 'Serenity', 'Discord', 'Tokio', 'Async'],
			gradient: 'orange-red',
			icon: 'bot',
			githubUrl: 'https://github.com/AtsuLeVrai/zen',
			featured: true,
			metrics: [
				{ label: 'Language', value: 'Rust' },
				{ label: 'Commands', value: '150+' },
				{ label: 'Status', value: 'Developing' }
			]
		},
		{
			id: 'vox',
			title: () => m.project_vox_title(),
			shortDescription: () => m.project_vox_short(),
			longDescription: () => m.project_vox_long(),
			tags: ['Next.js', 'TypeScript', 'Hono', 'Prisma', 'PostgreSQL', 'WebSocket', 'Tailwind'],
			gradient: 'blue-purple',
			icon: 'message',
			githubUrl: 'https://github.com/AtsuLeVrai/vox',
			featured: true,
			metrics: [
				{ label: 'Framework', value: 'Next.js 15' },
				{ label: 'Real-time', value: 'WebSocket' },
				{ label: 'DB', value: 'PostgreSQL' }
			]
		},
		{
			id: 'nyxo',
			title: () => m.project_nyxo_title(),
			shortDescription: () => m.project_nyxo_short(),
			longDescription: () => m.project_nyxo_long(),
			tags: ['TypeScript', 'Discord', 'Node.js', 'Library', 'Framework'],
			gradient: 'yellow-orange',
			icon: 'code',
			githubUrl: 'https://github.com/AtsuLeVrai/nyxo.js',
			featured: true,
			metrics: [
				{ label: 'Type', value: 'Framework' },
				{ label: 'License', value: 'Apache2.0' },
				{ label: 'Status', value: 'Developing' }
			]
		}
	];

	let isModalOpen = $state(false);
	let selectedProject = $state<Project | null>(null);

	const openModal = (project: Project) => {
		selectedProject = project;
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		isModalOpen = false;
		selectedProject = null;
		document.body.style.overflow = 'unset';
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && isModalOpen) {
			closeModal();
		}
	};
</script>

<svelte:window onkeydown={handleKeydown} />

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
				<button type="button" class="project-card" onclick={() => openModal(project)}>
					{#if project.featured}
						<div class="featured-badge">{m.projects_featured()}</div>
					{/if}

					<div class="card-header {project.gradient}">
						{#if project.icon === 'bot'}
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
								<path d="M12 8V4H8"></path>
								<rect width="16" height="12" x="4" y="8" rx="2"></rect>
								<path d="M2 14h2"></path>
								<path d="M20 14h2"></path>
								<path d="M15 13v2"></path>
								<path d="M9 13v2"></path>
							</svg>
						{:else if project.icon === 'message'}
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
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
							</svg>
						{:else if project.icon === 'code'}
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
								<polyline points="16 18 22 12 16 6"></polyline>
								<polyline points="8 6 2 12 8 18"></polyline>
							</svg>
						{/if}
						<div class="card-header-overlay">
							<span class="click-hint">{m.projects_click_hint()}</span>
						</div>
					</div>

					<div class="card-content">
						<h3 class="card-title">{project.title()}</h3>
						<p class="card-description">{project.shortDescription()}</p>

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
							{#each project.tags.slice(0, 4) as tag (tag)}
								<span class="tag">{tag}</span>
							{/each}
							{#if project.tags.length > 4}
								<span class="tag more">+{project.tags.length - 4}</span>
							{/if}
						</div>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

{#if isModalOpen && selectedProject}
	<div
		class="modal-backdrop"
		role="button"
		tabindex="0"
		onclick={closeModal}
		onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && closeModal()}
	>
		<div
			class="modal"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			tabindex="-1"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
		>
			<button type="button" class="modal-close" onclick={closeModal} aria-label="Close modal">
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
			</button>

			<div class="modal-header {selectedProject.gradient}">
				{#if selectedProject.icon === 'bot'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="120"
						height="120"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 8V4H8"></path>
						<rect width="16" height="12" x="4" y="8" rx="2"></rect>
						<path d="M2 14h2"></path>
						<path d="M20 14h2"></path>
						<path d="M15 13v2"></path>
						<path d="M9 13v2"></path>
					</svg>
				{:else if selectedProject.icon === 'message'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="120"
						height="120"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
					</svg>
				{:else if selectedProject.icon === 'code'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="120"
						height="120"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polyline points="16 18 22 12 16 6"></polyline>
						<polyline points="8 6 2 12 8 18"></polyline>
					</svg>
				{/if}
				{#if selectedProject.featured}
					<div class="modal-featured-badge">{m.projects_featured()}</div>
				{/if}
			</div>

			<div class="modal-content">
				<h2 id="modal-title" class="modal-title">{selectedProject.title()}</h2>
				<p class="modal-description">{selectedProject.longDescription()}</p>

				{#if selectedProject.metrics && selectedProject.metrics.length > 0}
					<div class="modal-section">
						<h3 class="modal-section-title">{m.projects_metrics()}</h3>
						<div class="modal-metrics-grid">
							{#each selectedProject.metrics as metric (metric.label)}
								<div class="modal-metric">
									<div class="modal-metric-value">{metric.value}</div>
									<div class="modal-metric-label">{metric.label}</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}

				<div class="modal-section">
					<h3 class="modal-section-title">{m.projects_tech_stack()}</h3>
					<div class="modal-tags">
						{#each selectedProject.tags as tag (tag)}
							<span class="modal-tag">{tag}</span>
						{/each}
					</div>
				</div>

				{#if selectedProject.githubUrl}
					<a
						href={selectedProject.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="github-link"
					>
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
						{m.projects_view_code()}
					</a>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	@use '$lib/styles/Projects.scss';
</style>
