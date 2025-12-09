<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

<section class="veille">
	<div class="veille-container">
		<!-- Header -->
		<div class="veille-header">
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
				{m.veille_back_home()}
			</a>
			<h1 class="title">
				{m.veille_title()} <span class="gradient-text">{m.veille_title_highlight()}</span>
			</h1>
			<div class="subtitle-badge">{m.veille_subtitle()}</div>
			<p class="description">{m.veille_description()}</p>
		</div>

		<!-- Introduction Card -->
		<div class="content-card intro-card">
			<div class="card-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
					<path d="m9 12 2 2 4-4"></path>
				</svg>
			</div>
			<h2>{m.veille_intro_title()}</h2>
			<p>{m.veille_intro_p1()}</p>
			<p>{m.veille_intro_p2()}</p>
		</div>

		<!-- Why This Topic Card -->
		<div class="content-card why-card">
			<div class="card-accent"></div>
			<h2>{m.veille_why_title()}</h2>
			<p>{m.veille_why_content()}</p>
		</div>

		<!-- Algorithms Section -->
		<div class="section-title">
			<h2>{m.veille_algorithms_title()}</h2>
		</div>
		<div class="algorithms-grid">
			<div class="algo-card kyber">
				<div class="algo-header">
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
							d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
						></path>
					</svg>
					<h3>{m.veille_algo_kyber_name()}</h3>
				</div>
				<p>{m.veille_algo_kyber_desc()}</p>
				<div class="algo-tag">KEM</div>
			</div>
			<div class="algo-card dilithium">
				<div class="algo-header">
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
						<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
						<polyline points="10 17 15 12 10 7"></polyline>
						<line x1="15" y1="12" x2="3" y2="12"></line>
					</svg>
					<h3>{m.veille_algo_dilithium_name()}</h3>
				</div>
				<p>{m.veille_algo_dilithium_desc()}</p>
				<div class="algo-tag">Signature</div>
			</div>
			<div class="algo-card sphincs">
				<div class="algo-header">
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
						<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
						<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
					</svg>
					<h3>{m.veille_algo_sphincs_name()}</h3>
				</div>
				<p>{m.veille_algo_sphincs_desc()}</p>
				<div class="algo-tag">Hash-based</div>
			</div>
		</div>

		<!-- Timeline Section -->
		<div class="section-title">
			<h2>{m.veille_timeline_title()}</h2>
		</div>
		<div class="timeline">
			<div class="timeline-item">
				<div class="timeline-year">2016</div>
				<div class="timeline-content">
					<div class="timeline-dot"></div>
					<p>{m.veille_timeline_2016()}</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-year">2022</div>
				<div class="timeline-content">
					<div class="timeline-dot"></div>
					<p>{m.veille_timeline_2022()}</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-year">2024</div>
				<div class="timeline-content">
					<div class="timeline-dot"></div>
					<p>{m.veille_timeline_2024()}</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-year">2030</div>
				<div class="timeline-content">
					<div class="timeline-dot warning"></div>
					<p>{m.veille_timeline_2030()}</p>
				</div>
			</div>
		</div>

		<!-- Impact Section -->
		<div class="section-title">
			<h2>{m.veille_impact_title()}</h2>
		</div>
		<div class="impact-grid">
			<div class="impact-card">
				<div class="impact-icon blockchain">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect width="7" height="7" x="14" y="3" rx="1"></rect>
						<path
							d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
						></path>
					</svg>
				</div>
				<h3>{m.veille_impact_blockchain()}</h3>
				<p>{m.veille_impact_blockchain_desc()}</p>
			</div>
			<div class="impact-card">
				<div class="impact-icon finance">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="12" y1="1" x2="12" y2="23"></line>
						<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
					</svg>
				</div>
				<h3>{m.veille_impact_finance()}</h3>
				<p>{m.veille_impact_finance_desc()}</p>
			</div>
			<div class="impact-card">
				<div class="impact-icon web">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<line x1="2" y1="12" x2="22" y2="12"></line>
						<path
							d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
						></path>
					</svg>
				</div>
				<h3>{m.veille_impact_web()}</h3>
				<p>{m.veille_impact_web_desc()}</p>
			</div>
		</div>

		<!-- Resources Section -->
		<div class="section-title">
			<h2>{m.veille_resources_title()}</h2>
		</div>
		<div class="resources-grid">
			<a href="#" class="resource-link">
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
					<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
					<polyline points="14 2 14 8 20 8"></polyline>
				</svg>
				{m.veille_link_presentation()}
			</a>
			<a href="#" class="resource-link">
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
					<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
					<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
				</svg>
				{m.veille_link_sources()}
			</a>
		</div>
	</div>
</section>

<style lang="scss">
	// Variables
	$color-gray-50: #f9fafb;
	$color-gray-100: #f3f4f6;
	$color-gray-600: #4b5563;
	$color-gray-700: #374151;
	$color-gray-900: #111827;
	$color-white: #ffffff;
	$color-cyan-50: #ecfeff;
	$color-cyan-100: #cffafe;
	$color-cyan-400: #22d3ee;
	$color-cyan-600: #0891b2;
	$color-rose-50: #fff1f2;
	$color-rose-400: #fb7185;
	$color-rose-600: #e11d48;
	$color-purple-400: #c084fc;
	$color-purple-600: #9333ea;
	$color-orange-400: #fb923c;
	$color-orange-600: #ea580c;
	$color-yellow-400: #facc15;

	$breakpoint-sm: 640px;
	$breakpoint-md: 768px;
	$breakpoint-lg: 1024px;
	$breakpoint-xl: 1280px;
	$breakpoint-2xl: 1536px;

	$transition-fast: 0.2s ease;
	$transition-normal: 0.3s ease;

	// Section
	.veille {
		min-height: 100vh;
		background: linear-gradient(to bottom right, $color-cyan-50, $color-white, $color-rose-50);
		padding: 6rem 0 3rem;

		@media (min-width: $breakpoint-sm) {
			padding: 7rem 0 4rem;
		}

		@media (min-width: $breakpoint-md) {
			padding: 8rem 0 5rem;
		}

		@media (min-width: $breakpoint-xl) {
			padding: 9rem 0 6rem;
		}
	}

	// Container
	.veille-container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 1rem;

		@media (min-width: $breakpoint-sm) {
			padding: 0 1.5rem;
		}

		@media (min-width: $breakpoint-lg) {
			padding: 0 2rem;
		}
	}

	// Header
	.veille-header {
		text-align: center;
		margin-bottom: 3rem;

		@media (min-width: $breakpoint-md) {
			margin-bottom: 4rem;
		}
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 2rem;
		padding: 0.5rem 1rem;
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 700;
		color: $color-gray-900;
		text-decoration: none;
		transition: $transition-fast;

		&:hover {
			background-color: $color-gray-900;
			color: $color-white;
			transform: translateX(-4px);
		}
	}

	.title {
		margin-bottom: 1rem;
		font-size: 2.25rem;
		font-weight: 900;
		color: $color-gray-900;
		line-height: 1.1;

		@media (min-width: $breakpoint-sm) {
			font-size: 3rem;
		}

		@media (min-width: $breakpoint-md) {
			font-size: 3.75rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 4.5rem;
		}
	}

	.gradient-text {
		background: linear-gradient(to right, $color-purple-600, $color-cyan-600, $color-rose-600);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.subtitle-badge {
		display: inline-block;
		margin-bottom: 1.5rem;
		padding: 0.5rem 1.5rem;
		background: linear-gradient(to right, $color-cyan-400, $color-purple-400);
		border: 3px solid $color-gray-900;
		border-radius: 9999px;
		font-size: 1rem;
		font-weight: 900;
		color: $color-white;
		box-shadow: 4px 4px 0px 0px $color-gray-900;

		@media (min-width: $breakpoint-sm) {
			font-size: 1.125rem;
		}
	}

	.description {
		max-width: 700px;
		margin: 0 auto;
		font-size: 1rem;
		font-weight: 500;
		color: $color-gray-700;
		line-height: 1.625;

		@media (min-width: $breakpoint-sm) {
			font-size: 1.125rem;
		}

		@media (min-width: $breakpoint-md) {
			font-size: 1.25rem;
		}
	}

	// Content Cards
	.content-card {
		background-color: $color-white;
		border: 3px solid $color-gray-900;
		border-radius: 1.5rem;
		padding: 1.5rem;
		margin-bottom: 2rem;
		box-shadow: 6px 6px 0px 0px $color-gray-900;

		@media (min-width: $breakpoint-sm) {
			padding: 2rem;
		}

		@media (min-width: $breakpoint-md) {
			padding: 2.5rem;
		}

		h2 {
			margin-bottom: 1rem;
			font-size: 1.5rem;
			font-weight: 900;
			color: $color-gray-900;

			@media (min-width: $breakpoint-sm) {
				font-size: 1.875rem;
			}
		}

		p {
			font-size: 1rem;
			font-weight: 500;
			color: $color-gray-700;
			line-height: 1.625;
			margin-bottom: 1rem;

			&:last-child {
				margin-bottom: 0;
			}

			@media (min-width: $breakpoint-sm) {
				font-size: 1.125rem;
			}
		}
	}

	.intro-card {
		position: relative;
		overflow: hidden;

		.card-icon {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 4rem;
			height: 4rem;
			margin-bottom: 1rem;
			background: linear-gradient(to bottom right, $color-cyan-400, $color-purple-400);
			border: 3px solid $color-gray-900;
			border-radius: 1rem;
			color: $color-white;
		}
	}

	.why-card {
		position: relative;
		background: linear-gradient(to bottom right, $color-rose-50, $color-white);

		.card-accent {
			position: absolute;
			top: 0;
			left: 0;
			width: 6px;
			height: 100%;
			background: linear-gradient(to bottom, $color-cyan-400, $color-purple-400, $color-rose-400);
			border-radius: 1.5rem 0 0 1.5rem;
		}
	}

	// Section Title
	.section-title {
		margin: 3rem 0 1.5rem;

		@media (min-width: $breakpoint-md) {
			margin: 4rem 0 2rem;
		}

		h2 {
			font-size: 1.5rem;
			font-weight: 900;
			color: $color-gray-900;
			text-align: center;

			@media (min-width: $breakpoint-sm) {
				font-size: 1.875rem;
			}

			@media (min-width: $breakpoint-md) {
				font-size: 2.25rem;
			}
		}
	}

	// Algorithms Grid
	.algorithms-grid {
		display: grid;
		gap: 1.5rem;

		@media (min-width: $breakpoint-md) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.algo-card {
		background-color: $color-white;
		border: 3px solid $color-gray-900;
		border-radius: 1rem;
		padding: 1.5rem;
		box-shadow: 4px 4px 0px 0px $color-gray-900;
		transition: $transition-normal;

		&:hover {
			transform: translateY(-4px);
			box-shadow: 8px 8px 0px 0px $color-gray-900;
		}

		.algo-header {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			margin-bottom: 1rem;

			svg {
				color: $color-cyan-600;
			}

			h3 {
				font-size: 1.125rem;
				font-weight: 900;
				color: $color-gray-900;

				@media (min-width: $breakpoint-sm) {
					font-size: 1.25rem;
				}
			}
		}

		p {
			font-size: 0.875rem;
			font-weight: 500;
			color: $color-gray-600;
			line-height: 1.5;
			margin-bottom: 1rem;

			@media (min-width: $breakpoint-sm) {
				font-size: 1rem;
			}
		}

		.algo-tag {
			display: inline-block;
			padding: 0.25rem 0.75rem;
			background: linear-gradient(to right, $color-cyan-50, $color-cyan-100);
			border: 2px solid $color-gray-900;
			border-radius: 9999px;
			font-size: 0.75rem;
			font-weight: 700;
			color: $color-gray-900;
		}

		&.kyber .algo-header svg {
			color: $color-cyan-600;
		}

		&.dilithium .algo-header svg {
			color: $color-purple-600;
		}

		&.sphincs .algo-header svg {
			color: $color-orange-600;
		}
	}

	// Timeline
	.timeline {
		position: relative;
		padding-left: 1rem;

		@media (min-width: $breakpoint-md) {
			padding-left: 2rem;
		}

		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			width: 4px;
			background: linear-gradient(to bottom, $color-cyan-400, $color-purple-400, $color-rose-400);
			border-radius: 9999px;

			@media (min-width: $breakpoint-md) {
				left: 0.5rem;
			}
		}
	}

	.timeline-item {
		display: flex;
		gap: 1rem;
		margin-bottom: 1.5rem;

		@media (min-width: $breakpoint-md) {
			gap: 1.5rem;
			margin-bottom: 2rem;
		}

		&:last-child {
			margin-bottom: 0;
		}
	}

	.timeline-year {
		flex-shrink: 0;
		width: 4rem;
		padding: 0.5rem;
		background-color: $color-gray-900;
		border-radius: 0.5rem;
		font-size: 0.875rem;
		font-weight: 900;
		color: $color-white;
		text-align: center;

		@media (min-width: $breakpoint-sm) {
			font-size: 1rem;
		}
	}

	.timeline-content {
		position: relative;
		flex: 1;
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 0.75rem;
		padding: 1rem;
		box-shadow: 3px 3px 0px 0px $color-gray-900;

		p {
			font-size: 0.875rem;
			font-weight: 500;
			color: $color-gray-700;
			line-height: 1.5;

			@media (min-width: $breakpoint-sm) {
				font-size: 1rem;
			}
		}
	}

	.timeline-dot {
		position: absolute;
		left: -1.75rem;
		top: 50%;
		transform: translateY(-50%);
		width: 12px;
		height: 12px;
		background-color: $color-cyan-400;
		border: 3px solid $color-gray-900;
		border-radius: 50%;

		@media (min-width: $breakpoint-md) {
			left: -2.25rem;
		}

		&.warning {
			background-color: $color-rose-400;
		}
	}

	// Impact Grid
	.impact-grid {
		display: grid;
		gap: 1.5rem;

		@media (min-width: $breakpoint-md) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.impact-card {
		background-color: $color-white;
		border: 3px solid $color-gray-900;
		border-radius: 1rem;
		padding: 1.5rem;
		box-shadow: 4px 4px 0px 0px $color-gray-900;
		text-align: center;
		transition: $transition-normal;

		&:hover {
			transform: translateY(-4px);
			box-shadow: 8px 8px 0px 0px $color-gray-900;
		}

		.impact-icon {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 3.5rem;
			height: 3.5rem;
			margin: 0 auto 1rem;
			border: 3px solid $color-gray-900;
			border-radius: 50%;
			color: $color-white;

			&.blockchain {
				background: linear-gradient(to bottom right, $color-orange-400, $color-rose-400);
			}

			&.finance {
				background: linear-gradient(to bottom right, $color-cyan-400, $color-purple-400);
			}

			&.web {
				background: linear-gradient(to bottom right, $color-purple-400, $color-rose-400);
			}
		}

		h3 {
			margin-bottom: 0.75rem;
			font-size: 1.125rem;
			font-weight: 900;
			color: $color-gray-900;

			@media (min-width: $breakpoint-sm) {
				font-size: 1.25rem;
			}
		}

		p {
			font-size: 0.875rem;
			font-weight: 500;
			color: $color-gray-600;
			line-height: 1.5;

			@media (min-width: $breakpoint-sm) {
				font-size: 1rem;
			}
		}
	}

	// Resources Grid
	.resources-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		margin-top: 2rem;
	}

	.resource-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 1.5rem;
		background-color: $color-gray-900;
		border: 3px solid $color-gray-900;
		border-radius: 9999px;
		font-size: 1rem;
		font-weight: 700;
		color: $color-white;
		text-decoration: none;
		box-shadow: 4px 4px 0px 0px $color-gray-900;
		transition: $transition-fast;

		@media (min-width: $breakpoint-sm) {
			font-size: 1.125rem;
			padding: 1rem 2rem;
		}

		&:hover {
			background-color: $color-cyan-600;
			transform: translateY(-3px);
			box-shadow: 6px 6px 0px 0px $color-gray-900;
		}

		&:active {
			transform: translateY(0);
			box-shadow: 2px 2px 0px 0px $color-gray-900;
		}
	}
</style>
