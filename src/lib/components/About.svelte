<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

<section class="about" id="about">
	<div class="about-container">
		<div class="about-grid">
			<div class="image-wrapper">
				<div class="image-card-bg"></div>
				<div class="image-card">
					<span>TB</span>
				</div>
			</div>

			<div class="content">
				<h2 class="title">
					{m.about_title()}
					<span class="gradient-text">{m.about_title_highlight()}</span>
				</h2>

				<div class="text-content">
					<p>
						{m.about_intro()}
						<strong>{m.about_education()}</strong>
						{m.about_with()}
						<strong>{m.about_years_experience()}</strong>
						{m.about_autodidact()}
						<strong>{m.about_expertise()}</strong>
						{m.about_and()}
						<strong>{m.about_performance()}</strong>.
					</p>

					<p>
						{m.about_seeking()}
						<strong>{m.about_internship()}</strong>
						{m.about_environment()}
					</p>

					<p>{m.about_passion()}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/About.scss';
</style>
