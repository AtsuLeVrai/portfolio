<script lang="ts">
    import {m} from '$lib/paraglide/messages.js';

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
		<!-- Header -->
		<div class="projects-header">
			<h2 class="title">
				{m.projects_title_my()} <span class="gradient-text">{m.projects_title_projects()}</span>
			</h2>
			<p class="description">
				{m.projects_description()}
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="projects-grid">
			{#each projects as project (project.id)}
				<button type="button" class="project-card" onclick={() => openModal(project)}>
					{#if project.featured}
						<div class="featured-badge">{m.projects_featured()}</div>
					{/if}

					<!-- Card Header with Icon -->
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

					<!-- Card Content -->
					<div class="card-content">
						<h3 class="card-title">{project.title()}</h3>
						<p class="card-description">{project.shortDescription()}</p>

						<!-- Metrics -->
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

						<!-- Tags -->
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

<!-- Modal -->
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
			<!-- Close Button -->
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

			<!-- Modal Header -->
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

			<!-- Modal Content -->
			<div class="modal-content">
				<h2 id="modal-title" class="modal-title">{selectedProject.title()}</h2>
				<p class="modal-description">{selectedProject.longDescription()}</p>

				<!-- Metrics -->
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

				<!-- Tech Stack -->
				<div class="modal-section">
					<h3 class="modal-section-title">{m.projects_tech_stack()}</h3>
					<div class="modal-tags">
						{#each selectedProject.tags as tag (tag)}
							<span class="modal-tag">{tag}</span>
						{/each}
					</div>
				</div>

				<!-- Links -->
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
	// Variables
	$color-gray-50: #f9fafb;
	$color-gray-100: #f3f4f6;
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
	$color-purple-600: #9333ea;

	$breakpoint-sm: 640px;
	$breakpoint-md: 768px;
	$breakpoint-lg: 1024px;
	$breakpoint-xl: 1280px;
	$breakpoint-2xl: 1536px;

	$transition-fast: 0.2s ease;
	$transition-normal: 0.3s ease;

	// Section
	.projects {
		position: relative;
		background: linear-gradient(to bottom right, $color-rose-50, $color-white, $color-cyan-50);
		padding: 3rem 0;

		@media (min-width: $breakpoint-sm) {
			padding: 4rem 0;
		}

		@media (min-width: $breakpoint-md) {
			padding: 5rem 0;
		}

		@media (min-width: $breakpoint-xl) {
			padding: 6rem 0;
		}

		@media (min-width: $breakpoint-2xl) {
			padding: 7rem 0;
		}
	}

	// Container
	.projects-container {
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
	.projects-header {
		text-align: center;
		margin-bottom: 2.5rem;

		@media (min-width: $breakpoint-sm) {
			margin-bottom: 3rem;
		}

		@media (min-width: $breakpoint-md) {
			margin-bottom: 3.5rem;
		}

		@media (min-width: $breakpoint-xl) {
			margin-bottom: 4rem;
		}

		@media (min-width: $breakpoint-2xl) {
			margin-bottom: 5rem;
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
		background: linear-gradient(to right, $color-purple-600, $color-cyan-600, $color-rose-600);
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

	// Projects Grid
	.projects-grid {
		display: grid;
		gap: 2rem;

		@media (min-width: $breakpoint-md) {
			grid-template-columns: repeat(2, 1fr);
			gap: 2.5rem;
		}

		@media (min-width: $breakpoint-xl) {
			grid-template-columns: repeat(3, 1fr);
			gap: 3rem;
		}

		@media (min-width: $breakpoint-2xl) {
			gap: 3.5rem;
		}
	}

	// Project Card
	.project-card {
		position: relative;
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 1rem;
		overflow: hidden;
		cursor: pointer;
		text-align: left;
		box-shadow: 6px 6px 0px 0px $color-gray-900;
		transition: $transition-normal;
		font-family: inherit;

		@media (min-width: $breakpoint-md) {
			border-width: 3px;
		}

		@media (min-width: $breakpoint-xl) {
			border-radius: 1.5rem;
			border-width: 4px;
		}

		&:hover {
			transform: translateY(-6px);
			box-shadow: 12px 12px 0px 0px $color-gray-900;

			.card-header-overlay {
				opacity: 1;
			}
		}
	}

	.featured-badge {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		z-index: 10;
		padding: 0.25rem 0.5rem;
		background: linear-gradient(to right, $color-cyan-400, $color-rose-400);
		border: 2px solid $color-gray-900;
		border-radius: 9999px;
		font-size: 0.625rem;
		font-weight: 700;
		color: $color-white;

		@media (min-width: $breakpoint-sm) {
			top: 1rem;
			right: 1rem;
			padding: 0.25rem 0.75rem;
			font-size: 0.75rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 0.875rem;
		}
	}

	// Card Header
	.card-header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 10rem;
		color: rgba($color-white, 0.9);

		@media (min-width: $breakpoint-sm) {
			height: 12rem;
		}

		@media (min-width: $breakpoint-xl) {
			height: 14rem;
		}

		@media (min-width: $breakpoint-2xl) {
			height: 16rem;
		}

		&.orange-red {
			background: linear-gradient(to bottom right, #fb923c, #ef4444, #ec4899);
		}

		&.blue-purple {
			background: linear-gradient(to bottom right, #60a5fa, #6366f1, #a855f7);
		}

		&.yellow-orange {
			background: linear-gradient(to bottom right, #facc15, #f59e0b, #f97316);
		}
	}

	.card-header-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(to top, rgba($color-gray-900, 0.6), transparent);
		opacity: 0;
		transition: opacity $transition-normal;
	}

	.click-hint {
		padding: 0.5rem 1rem;
		background-color: rgba($color-white, 0.9);
		border: 2px solid $color-white;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 700;
		color: $color-gray-900;
		backdrop-filter: blur(4px);
	}

	// Card Content
	.card-content {
		padding: 1rem;

		@media (min-width: $breakpoint-sm) {
			padding: 1.25rem;
		}

		@media (min-width: $breakpoint-xl) {
			padding: 1.5rem;
		}

		@media (min-width: $breakpoint-2xl) {
			padding: 2rem;
		}
	}

	.card-title {
		margin-bottom: 0.5rem;
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

		@media (min-width: $breakpoint-2xl) {
			font-size: 1.875rem;
		}
	}

	.card-description {
		margin-bottom: 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: $color-gray-600;
		line-height: 1.5;

		@media (min-width: $breakpoint-sm) {
			margin-bottom: 1rem;
			font-size: 1rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1.125rem;
		}
	}

	// Metrics
	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
		margin-bottom: 1rem;

		@media (min-width: $breakpoint-sm) {
			gap: 0.75rem;
		}

		@media (min-width: $breakpoint-xl) {
			margin-bottom: 1.25rem;
			gap: 1rem;
		}
	}

	.metric {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		background: linear-gradient(to bottom right, $color-gray-50, $color-gray-100);
		border: 2px solid $color-gray-900;
		border-radius: 0.75rem;
		text-align: center;

		@media (min-width: $breakpoint-sm) {
			padding: 0.75rem;
		}
	}

	.metric-value {
		font-size: 0.75rem;
		font-weight: 900;
		color: $color-gray-900;
		line-height: 1.2;

		@media (min-width: $breakpoint-sm) {
			font-size: 0.875rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1rem;
		}
	}

	.metric-label {
		margin-top: 0.125rem;
		font-size: 0.5625rem;
		font-weight: 700;
		color: $color-gray-600;

		@media (min-width: $breakpoint-sm) {
			font-size: 0.625rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 0.75rem;
		}
	}

	// Tags
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		padding: 0.25rem 0.5rem;
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 9999px;
		font-size: 0.625rem;
		font-weight: 700;
		color: $color-gray-700;

		@media (min-width: $breakpoint-sm) {
			font-size: 0.75rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 0.875rem;
		}

		&.more {
			background-color: $color-gray-100;
		}
	}

	// Modal
	.modal-backdrop {
		position: fixed;
		inset: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(4px);
	}

	.modal {
		position: relative;
		width: 100%;
		max-width: 56rem;
		max-height: 90vh;
		overflow-y: auto;
		background-color: $color-white;
		border: 4px solid $color-gray-900;
		border-radius: 1.5rem;
		box-shadow: 12px 12px 0px 0px $color-gray-900;
	}

	.modal-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 50%;
		color: $color-gray-900;
		cursor: pointer;
		transition: background-color $transition-fast;
		font-family: inherit;

		&:hover {
			background-color: $color-gray-100;
		}
	}

	.modal-header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 16rem;
		color: rgba($color-white, 0.9);

		@media (min-width: $breakpoint-sm) {
			height: 20rem;
		}

		@media (min-width: $breakpoint-xl) {
			height: 24rem;
		}

		&.orange-red {
			background: linear-gradient(to bottom right, #fb923c, #ef4444, #ec4899);
		}

		&.blue-purple {
			background: linear-gradient(to bottom right, #60a5fa, #6366f1, #a855f7);
		}

		&.yellow-orange {
			background: linear-gradient(to bottom right, #facc15, #f59e0b, #f97316);
		}
	}

	.modal-featured-badge {
		position: absolute;
		top: 1rem;
		left: 1rem;
		padding: 0.5rem 1rem;
		background: linear-gradient(to right, $color-cyan-400, $color-rose-400);
		border: 2px solid $color-gray-900;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 700;
		color: $color-white;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}

	.modal-content {
		padding: 1.5rem;

		@media (min-width: $breakpoint-sm) {
			padding: 2rem;
		}

		@media (min-width: $breakpoint-xl) {
			padding: 2.5rem;
		}
	}

	.modal-title {
		margin-bottom: 1rem;
		font-size: 1.875rem;
		font-weight: 900;
		color: $color-gray-900;
		line-height: 1.1;

		@media (min-width: $breakpoint-sm) {
			font-size: 2.25rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 3rem;
		}
	}

	.modal-description {
		margin-bottom: 1.5rem;
		font-size: 1rem;
		font-weight: 500;
		color: $color-gray-700;
		line-height: 1.625;

		@media (min-width: $breakpoint-sm) {
			font-size: 1.125rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1.25rem;
		}
	}

	.modal-section {
		margin-bottom: 1.5rem;

		@media (min-width: $breakpoint-sm) {
			margin-bottom: 2rem;
		}
	}

	.modal-section-title {
		margin-bottom: 1rem;
		font-size: 1.25rem;
		font-weight: 900;
		color: $color-gray-900;

		@media (min-width: $breakpoint-sm) {
			font-size: 1.5rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1.875rem;
		}
	}

	.modal-metrics-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem;

		@media (min-width: $breakpoint-sm) {
			gap: 1rem;
		}

		@media (min-width: $breakpoint-xl) {
			gap: 1.25rem;
		}
	}

	.modal-metric {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		background: linear-gradient(to bottom right, $color-cyan-50, $color-rose-50);
		border: 3px solid $color-gray-900;
		border-radius: 1rem;
		text-align: center;

		@media (min-width: $breakpoint-sm) {
			padding: 1.25rem;
		}

		@media (min-width: $breakpoint-xl) {
			padding: 1.5rem;
		}
	}

	.modal-metric-value {
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

	.modal-metric-label {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		font-weight: 700;
		color: $color-gray-600;

		@media (min-width: $breakpoint-sm) {
			font-size: 0.875rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 1rem;
		}
	}

	.modal-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.modal-tag {
		padding: 0.5rem 0.75rem;
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 700;
		color: $color-gray-700;

		@media (min-width: $breakpoint-sm) {
			font-size: 1rem;
		}
	}

	.github-link {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.75rem 1.5rem;
		background-color: $color-gray-900;
		border: 3px solid $color-gray-900;
		border-radius: 9999px;
		font-size: 1rem;
		font-weight: 700;
		color: $color-white;
		text-decoration: none;
		box-shadow: 4px 4px 0px 0px $color-gray-900;
		transition: $transition-fast;
		font-family: inherit;

		@media (min-width: $breakpoint-sm) {
			font-size: 1.125rem;
		}

		&:hover {
			transform: translateY(-2px);
			box-shadow: 6px 6px 0px 0px $color-gray-900;
			background-color: $color-gray-700;
		}
	}
</style>
