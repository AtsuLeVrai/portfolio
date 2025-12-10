<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

<section class="veille">
	<div class="veille-container">
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

		<div class="content-card why-card">
			<div class="card-accent"></div>
			<h2>{m.veille_why_title()}</h2>
			<p>{m.veille_why_content()}</p>
		</div>

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
	@use '$lib/styles/Veille.scss';
</style>
