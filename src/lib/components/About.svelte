<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

<section class="about" id="about">
	<div class="about-container">
		<div class="about-grid">
			<!-- Left - Image Card -->
			<div class="image-wrapper">
				<div class="image-card-bg"></div>
				<div class="image-card">
					<span>TB</span>
				</div>
			</div>

			<!-- Right - Content -->
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
	// Variables
	$color-gray-700: #374151;
	$color-gray-900: #111827;
	$color-white: #ffffff;
	$color-cyan-200: #a5f3fc;
	$color-cyan-400: #22d3ee;
	$color-cyan-600: #0891b2;
	$color-purple-400: #c084fc;
	$color-purple-600: #9333ea;
	$color-rose-400: #fb7185;
	$color-rose-600: #e11d48;

	$breakpoint-sm: 640px;
	$breakpoint-md: 768px;
	$breakpoint-lg: 1024px;
	$breakpoint-xl: 1280px;
	$breakpoint-2xl: 1536px;

	// Section
	.about {
		position: relative;
		background-color: $color-white;
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
	.about-container {
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

	// Grid
	.about-grid {
		display: grid;
		gap: 2rem;

		@media (min-width: $breakpoint-sm) {
			gap: 2.5rem;
		}

		@media (min-width: $breakpoint-md) {
			gap: 3rem;
		}

		@media (min-width: $breakpoint-lg) {
			grid-template-columns: 1fr 1fr;
			gap: 4rem;
		}

		@media (min-width: $breakpoint-xl) {
			gap: 5rem;
		}

		@media (min-width: $breakpoint-2xl) {
			gap: 6rem;
		}
	}

	// Image Wrapper
	.image-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.image-card-bg {
		position: absolute;
		width: 16rem;
		height: 16rem;
		background-color: $color-cyan-200;
		border: 3px solid $color-gray-900;
		border-radius: 1rem;
		transform: translate(0.75rem, 0.75rem) rotate(3deg);

		@media (min-width: $breakpoint-sm) {
			width: 18rem;
			height: 18rem;
			transform: translate(1rem, 1rem) rotate(3deg);
		}

		@media (min-width: $breakpoint-md) {
			width: 20rem;
			height: 20rem;
			border-width: 4px;
			border-radius: 1.5rem;
		}

		@media (min-width: $breakpoint-xl) {
			width: 24rem;
			height: 24rem;
		}

		@media (min-width: $breakpoint-2xl) {
			width: 28rem;
			height: 28rem;
		}
	}

	.image-card {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16rem;
		height: 16rem;
		background: linear-gradient(
			to bottom right,
			$color-purple-400,
			$color-cyan-400,
			$color-rose-400
		);
		border: 3px solid $color-gray-900;
		border-radius: 1rem;
		box-shadow: 8px 8px 0px 0px $color-gray-900;
		overflow: hidden;
		transition: transform 0.3s ease;

		@media (min-width: $breakpoint-sm) {
			width: 18rem;
			height: 18rem;
		}

		@media (min-width: $breakpoint-md) {
			width: 20rem;
			height: 20rem;
			border-width: 4px;
			border-radius: 1.5rem;
			box-shadow: 12px 12px 0px 0px $color-gray-900;
		}

		@media (min-width: $breakpoint-xl) {
			width: 24rem;
			height: 24rem;
		}

		@media (min-width: $breakpoint-2xl) {
			width: 28rem;
			height: 28rem;
		}

		&:hover {
			transform: rotate(-2deg) scale(1.02);
		}

		span {
			font-size: 4.5rem;
			font-weight: 900;
			color: $color-white;

			@media (min-width: $breakpoint-sm) {
				font-size: 5rem;
			}

			@media (min-width: $breakpoint-md) {
				font-size: 6rem;
			}

			@media (min-width: $breakpoint-xl) {
				font-size: 10rem;
			}

			@media (min-width: $breakpoint-2xl) {
				font-size: 12rem;
			}
		}
	}

	// Content
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.title {
		margin-bottom: 1rem;
		font-size: 1.875rem;
		font-weight: 900;
		color: $color-gray-900;
		line-height: 1.1;

		@media (min-width: $breakpoint-sm) {
			margin-bottom: 1.25rem;
			font-size: 2.25rem;
		}

		@media (min-width: $breakpoint-md) {
			margin-bottom: 1.5rem;
			font-size: 3rem;
		}

		@media (min-width: $breakpoint-xl) {
			font-size: 3.75rem;
		}

		@media (min-width: $breakpoint-2xl) {
			margin-bottom: 2rem;
			font-size: 4.5rem;
		}
	}

	.gradient-text {
		background: linear-gradient(to right, $color-purple-600, $color-cyan-600, $color-rose-600);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	// Text Content
	.text-content {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

		@media (min-width: $breakpoint-sm) {
			gap: 1rem;
		}

		@media (min-width: $breakpoint-xl) {
			gap: 1.25rem;
		}

		@media (min-width: $breakpoint-2xl) {
			gap: 1.5rem;
		}

		p {
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

			@media (min-width: $breakpoint-2xl) {
				font-size: 1.5rem;
			}
		}

		strong {
			color: $color-gray-900;
		}
	}
</style>
