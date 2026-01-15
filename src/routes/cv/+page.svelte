<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { SEO, CONTACT_INFO } from '$lib/constants';

	const pageTitle = `CV | ${SEO.siteName}`;
	const pageDescription = 'CV de Tom Bialecki - Etudiant BTS SIO SLAM & Developpeur Backend';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="cv-page">
	<div class="page-header">
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
		<h1 class="page-title">{m.cv_page_title()}</h1>
	</div>

	<div class="cv-wrapper">
		<div class="cv-container">
			<!-- Header -->
			<header class="header">
				<div class="photo-wrapper">
					<div class="photo-bg"></div>
					<div class="photo">
						<img src="/me.png" alt="Tom Bialecki" />
					</div>
				</div>
				<div class="header-content">
					<h2 class="name">TOM <span class="gradient-text">BIALECKI</span></h2>
					<p class="title">{m.cv_title_student()} - {m.cv_title_developer()}</p>
					<div class="summary">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -- Content is from trusted translation files, not user input -->
						{@html m.cv_summary({
							experience: `<strong>${m.cv_summary_experience()}</strong>`,
							internship: `<strong>${m.cv_summary_internship()}</strong>`
						})}
					</div>
				</div>
			</header>

			<!-- Contact bar -->
			<div class="contact-bar">
				<a href="mailto:{CONTACT_INFO.email}" class="contact-item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
						></path>
						<polyline points="22,6 12,13 2,6"></polyline>
					</svg>
					{CONTACT_INFO.email}
				</a>
				<a href={SEO.siteUrl} class="contact-item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<line x1="2" y1="12" x2="22" y2="12"></line>
						<path
							d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
						></path>
					</svg>
					tombcode.vercel.app
				</a>
				<span class="contact-item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
						<circle cx="12" cy="10" r="3"></circle>
					</svg>
					{m.cv_contact_location()}
				</span>
			</div>

			<!-- Main content -->
			<div class="main-grid">
				<!-- Left column -->
				<div class="column">
					<!-- Experience -->
					<section class="section">
						<div class="section-accent"></div>
						<div class="section-header">
							<div class="section-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
									<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
								</svg>
							</div>
							<h3 class="section-title">{m.cv_section_experiences()}</h3>
						</div>

						<div class="exp-item">
							<div class="exp-header">
								<span class="exp-title">{m.cv_exp_freelance_title()}</span>
								<span class="exp-date">{m.cv_exp_freelance_date()}</span>
							</div>
							<p class="exp-desc">{m.cv_exp_freelance_desc()}</p>
						</div>

						<div class="exp-item">
							<div class="exp-header">
								<span class="exp-title">{m.cv_exp_stage_title()}</span>
								<span class="exp-date">{m.cv_exp_stage_date()}</span>
							</div>
							<span class="exp-company">{m.cv_exp_stage_company()}</span>
							<p class="exp-desc">{m.cv_exp_stage_desc()}</p>
						</div>

						<div class="exp-item">
							<div class="exp-header">
								<span class="exp-title">{m.cv_exp_discovery_title()}</span>
								<span class="exp-date">{m.cv_exp_discovery_date()}</span>
							</div>
							<span class="exp-company">{m.cv_exp_discovery_company()}</span>
							<p class="exp-desc">{m.cv_exp_discovery_desc()}</p>
						</div>
					</section>

					<!-- Formation -->
					<section class="section">
						<div class="section-accent"></div>
						<div class="section-header">
							<div class="section-icon purple">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
									<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
								</svg>
							</div>
							<h3 class="section-title">{m.cv_section_formation()}</h3>
						</div>

						<div class="formation-item">
							<span class="formation-year">{m.cv_formation_bts_date()}</span>
							<div class="formation-content">
								<p class="formation-title">{m.cv_formation_bts_title()}</p>
								<p class="formation-school">{m.cv_formation_bts_school()}</p>
							</div>
						</div>

						<div class="formation-item">
							<span class="formation-year">{m.cv_formation_bac_date()}</span>
							<div class="formation-content">
								<p class="formation-title">{m.cv_formation_bac_title()}</p>
								<p class="formation-school">{m.cv_formation_bac_school()}</p>
							</div>
						</div>
					</section>

					<!-- Certifications -->
					<section class="section">
						<div class="section-accent"></div>
						<div class="section-header">
							<div class="section-icon rose">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<circle cx="12" cy="8" r="6"></circle>
									<path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
								</svg>
							</div>
							<h3 class="section-title">{m.cv_section_certifications()}</h3>
						</div>

						<div class="cert-list">
							<div class="cert-item">
								<div class="cert-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
									</svg>
								</div>
								<div class="cert-content">
									<p class="cert-name">{m.cv_cert_anssi_name()}</p>
									<p class="cert-issuer">{m.cv_cert_anssi_issuer()}</p>
								</div>
							</div>
							<div class="cert-item">
								<div class="cert-icon purple">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<line x1="12" y1="1" x2="12" y2="23"></line>
										<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
									</svg>
								</div>
								<div class="cert-content">
									<p class="cert-name">{m.cv_cert_forex_name()}</p>
									<p class="cert-issuer">{m.cv_cert_forex_issuer()}</p>
								</div>
							</div>
						</div>
					</section>

					<!-- Interests -->
					<section class="section">
						<div class="section-accent"></div>
						<div class="section-header">
							<div class="section-icon rose">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polygon
										points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
									></polygon>
								</svg>
							</div>
							<h3 class="section-title">{m.cv_section_interests()}</h3>
						</div>

						<div class="interests-list">
							<div class="interest-item">
								<div class="interest-icon quantum">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<circle cx="12" cy="12" r="3"></circle>
										<path d="M12 2v4m0 12v4M2 12h4m12 0h4"></path>
									</svg>
								</div>
								<div class="interest-text">
									<p class="interest-title">{m.cv_interest_quantum_title()}</p>
									<p class="interest-desc">{m.cv_interest_quantum_desc()}</p>
								</div>
							</div>
							<div class="interest-item">
								<div class="interest-icon finance">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
								</div>
								<div class="interest-text">
									<p class="interest-title">{m.cv_interest_finance_title()}</p>
									<p class="interest-desc">{m.cv_interest_finance_desc()}</p>
								</div>
							</div>
						</div>
					</section>
				</div>

				<!-- Right column -->
				<div class="column">
					<!-- Skills -->
					<section class="section">
						<div class="section-accent"></div>
						<div class="section-header">
							<div class="section-icon cyan">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polyline points="16 18 22 12 16 6"></polyline>
									<polyline points="8 6 2 12 8 18"></polyline>
								</svg>
							</div>
							<h3 class="section-title">{m.cv_section_skills()}</h3>
						</div>

						<div class="skills-grid">
							<div class="skill-category">
								<p class="skill-category-title">{m.cv_skills_languages()}</p>
								<div class="skill-list">
									<span class="skill-item">TypeScript</span>
									<span class="skill-item">JavaScript</span>
									<span class="skill-item">Python</span>
									<span class="skill-item">Java</span>
								</div>
							</div>
							<div class="skill-category">
								<p class="skill-category-title">{m.cv_skills_databases()}</p>
								<div class="skill-list">
									<span class="skill-item">PostgreSQL</span>
									<span class="skill-item">MySQL</span>
									<span class="skill-item">MongoDB</span>
									<span class="skill-item">SQLite</span>
								</div>
							</div>
							<div class="skill-category">
								<p class="skill-category-title">{m.cv_skills_tools()}</p>
								<div class="skill-list">
									<span class="skill-item">JetBrains</span>
									<span class="skill-item">Git</span>
									<span class="skill-item">Notion</span>
									<span class="skill-item">Postman</span>
								</div>
							</div>
						</div>
					</section>

					<!-- Soft skills -->
					<section class="section">
						<div class="section-accent"></div>
						<div class="section-header">
							<div class="section-icon purple">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
									></path>
								</svg>
							</div>
							<h3 class="section-title">{m.cv_section_softskills()}</h3>
						</div>

						<div class="soft-skills-grid">
							<div class="soft-skill">
								<div class="soft-skill-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
										<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
									</svg>
								</div>
								<div class="soft-skill-text">
									<p class="soft-skill-title">{m.cv_softskill_autodidact_title()}</p>
									<p class="soft-skill-desc">{m.cv_softskill_autodidact_desc()}</p>
								</div>
							</div>
							<div class="soft-skill">
								<div class="soft-skill-icon cyan">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
										<polyline points="22 4 12 14.01 9 11.01"></polyline>
									</svg>
								</div>
								<div class="soft-skill-text">
									<p class="soft-skill-title">{m.cv_softskill_rigorous_title()}</p>
									<p class="soft-skill-desc">{m.cv_softskill_rigorous_desc()}</p>
								</div>
							</div>
							<div class="soft-skill">
								<div class="soft-skill-icon rose">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<line x1="19" y1="8" x2="19" y2="14"></line>
										<line x1="22" y1="11" x2="16" y2="11"></line>
									</svg>
								</div>
								<div class="soft-skill-text">
									<p class="soft-skill-title">{m.cv_softskill_autonomous_title()}</p>
									<p class="soft-skill-desc">{m.cv_softskill_autonomous_desc()}</p>
								</div>
							</div>
							<div class="soft-skill">
								<div class="soft-skill-icon orange">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
										<line x1="11" y1="8" x2="11" y2="14"></line>
										<line x1="8" y1="11" x2="14" y2="11"></line>
									</svg>
								</div>
								<div class="soft-skill-text">
									<p class="soft-skill-title">{m.cv_softskill_meticulous_title()}</p>
									<p class="soft-skill-desc">{m.cv_softskill_meticulous_desc()}</p>
								</div>
							</div>
						</div>
					</section>

					<!-- Project -->
					<section class="section">
						<div class="section-accent"></div>
						<div class="section-header">
							<div class="section-icon orange">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
									></path>
								</svg>
							</div>
							<h3 class="section-title">{m.cv_section_project()}</h3>
						</div>

						<div class="project-card">
							<div class="project-header">
								<span class="project-name">{m.cv_project_name()}</span>
								<span class="project-year">{m.cv_project_date()}</span>
							</div>
							<p class="project-desc">{m.cv_project_desc()}</p>
							<div class="project-tags">
								<span class="project-tag">TypeScript</span>
								<span class="project-tag">Bun</span>
								<span class="project-tag">WebSocket</span>
								<span class="project-tag">Open Source</span>
							</div>
						</div>
					</section>

					<!-- Technologies -->
					<section class="section">
						<div class="section-accent"></div>
						<div class="section-header">
							<div class="section-icon cyan">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
									<rect x="9" y="9" width="6" height="6"></rect>
									<line x1="9" y1="1" x2="9" y2="4"></line>
									<line x1="15" y1="1" x2="15" y2="4"></line>
									<line x1="9" y1="20" x2="9" y2="23"></line>
									<line x1="15" y1="20" x2="15" y2="23"></line>
									<line x1="20" y1="9" x2="23" y2="9"></line>
									<line x1="20" y1="14" x2="23" y2="14"></line>
									<line x1="1" y1="9" x2="4" y2="9"></line>
									<line x1="1" y1="14" x2="4" y2="14"></line>
								</svg>
							</div>
							<h3 class="section-title">{m.cv_section_technologies()}</h3>
						</div>

						<div class="tags">
							<span class="tag">Node.js</span>
							<span class="tag">Bun</span>
							<span class="tag">Next.js</span>
							<span class="tag">Hono</span>
							<span class="tag">Docker</span>
							<span class="tag">Nginx</span>
							<span class="tag">REST API</span>
							<span class="tag">WebSocket</span>
						</div>
					</section>
				</div>
			</div>

			<div class="bottom-bar"></div>
		</div>
	</div>

	<p class="instructions">
		<strong>{m.cv_export_instructions()}</strong><br />
		{m.cv_export_alternative()}
	</p>
</section>

<style lang="scss">
	@use '$lib/styles/CV.scss';
</style>
