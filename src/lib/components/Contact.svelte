<script lang="ts">
    import {m} from '$lib/paraglide/messages.js';
    import {CONTACT_INFO, SOCIAL_LINKS} from '$lib/constants';

    let formData = $state({
		name: '',
		email: '',
		message: ''
	});

	let errors = $state<Record<string, string>>({});
	let touched = $state<Record<string, boolean>>({});
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');

	const validateField = (name: string, value: string): string | undefined => {
		switch (name) {
			case 'name':
				if (!value.trim()) return m.contact_validation_name_required();
				if (value.length > 100) return m.contact_validation_name_too_long();
				break;
			case 'email':
				if (!value.trim()) return m.contact_validation_email_required();
				if (value.length > 254) return m.contact_validation_email_too_long();
				if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return m.contact_validation_email_invalid();
				break;
			case 'message':
				if (!value.trim()) return m.contact_validation_message_required();
				if (value.length > 5000) return m.contact_validation_message_too_long();
				break;
		}
		return undefined;
	};

	const handleInput = (e: Event) => {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement;
		const { name, value } = target;
		formData = { ...formData, [name]: value };

		if (touched[name]) {
			const error = validateField(name, value);
			errors = { ...errors, [name]: error || '' };
		}
	};

	const handleBlur = (e: Event) => {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement;
		const { name, value } = target;
		touched = { ...touched, [name]: true };
		const error = validateField(name, value);
		errors = { ...errors, [name]: error || '' };
	};

	const handleSubmit = async (e: Event) => {
		e.preventDefault();

		// Validate all fields
		const newErrors: Record<string, string> = {};
		let isValid = true;

		for (const [key, value] of Object.entries(formData)) {
			const error = validateField(key, value);
			if (error) {
				newErrors[key] = error;
				isValid = false;
			}
		}

		errors = newErrors;
		touched = { name: true, email: true, message: true };

		if (!isValid) return;

		status = 'submitting';

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				throw new Error('Failed to send email');
			}

			status = 'success';
			formData = { name: '', email: '', message: '' };
			touched = {};
			setTimeout(() => (status = 'idle'), 5000);
		} catch {
			status = 'error';
			setTimeout(() => (status = 'idle'), 5000);
		}
	};
</script>

<section class="contact" id="contact">
	<div class="contact-container">
		<!-- Header -->
		<div class="contact-header">
			<h2 class="title">
				{m.contact_title_get()} <span class="gradient-text">{m.contact_title_touch()}</span>
			</h2>
			<p class="description">{m.contact_description()}</p>
		</div>

		<div class="contact-grid">
			<!-- Form -->
			<div class="form-card">
				<form onsubmit={handleSubmit}>
					<div class="form-group">
						<label for="name">{m.contact_form_name()}</label>
						<input
							class:error={errors.name && touched.name}
							id="name"
							name="name"
							onblur={handleBlur}
							oninput={handleInput}
							placeholder={m.contact_form_name_placeholder()}
							type="text"
							value={formData.name}
						/>
						{#if errors.name && touched.name}
							<p class="error-message">{errors.name}</p>
						{/if}
					</div>

					<div class="form-group">
						<label for="email">{m.contact_form_email()}</label>
						<input
							class:error={errors.email && touched.email}
							id="email"
							name="email"
							onblur={handleBlur}
							oninput={handleInput}
							placeholder={m.contact_form_email_placeholder()}
							type="email"
							value={formData.email}
						/>
						{#if errors.email && touched.email}
							<p class="error-message">{errors.email}</p>
						{/if}
					</div>

					<div class="form-group">
						<label for="message">{m.contact_form_message()}</label>
						<textarea
							class:error={errors.message && touched.message}
							id="message"
							name="message"
							onblur={handleBlur}
							oninput={handleInput}
							placeholder={m.contact_form_message_placeholder()}
							rows="5"
							value={formData.message}
						></textarea>
						{#if errors.message && touched.message}
							<p class="error-message">{errors.message}</p>
						{/if}
					</div>

					<button class="submit-btn" disabled={status === 'submitting'} type="submit">
						{#if status === 'submitting'}
							<span class="spinner"></span>
							{m.contact_form_submitting()}
						{:else}
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
								<path d="m22 2-7 20-4-9-9-4Z"></path>
								<path d="M22 2 11 13"></path>
							</svg>
							{m.contact_form_submit()}
						{/if}
					</button>

					{#if status === 'success'}
						<p class="status-message success">{m.contact_form_success()}</p>
					{/if}

					{#if status === 'error'}
						<p class="status-message error">{m.contact_form_error()}</p>
					{/if}
				</form>
			</div>

			<!-- Contact Info -->
			<div class="info-section">
				<!-- Let's Connect Card -->
				<div class="connect-card">
					<h3>{m.contact_connect_title()}</h3>
					<p>{m.contact_connect_description()}</p>
					<div class="email-row">
						<div class="email-icon">
							<svg
								fill="none"
								height="20"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect height="16" rx="2" width="20" x="2" y="4"></rect>
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
							</svg>
						</div>
						<a href="mailto:{CONTACT_INFO.email}">{CONTACT_INFO.email}</a>
					</div>
				</div>

				<!-- Quick Links Card -->
				<div class="quick-links-card">
					<h3>{m.contact_quick_links()}</h3>
					<div class="social-grid">
						{#each SOCIAL_LINKS as social (social.name)}
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								class="social-card {social.hoverClass}"
							>
								{#if social.name === 'GitHub'}
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
										<path
											d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
										></path>
										<path d="M9 18c-4.51 2-5-2-7-2"></path>
									</svg>
								{:else if social.name === 'LinkedIn'}
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
										<path
											d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
										></path>
										<rect width="4" height="12" x="2" y="9"></rect>
										<circle cx="4" cy="4" r="2"></circle>
									</svg>
								{:else if social.name === 'Email'}
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
										<rect width="20" height="16" x="2" y="4" rx="2"></rect>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
									</svg>
								{/if}
								<span>{social.name}</span>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	// Variables
	$color-gray-600: #4b5563;
	$color-gray-700: #374151;
	$color-gray-900: #111827;
	$color-white: #ffffff;
	$color-cyan-50: #ecfeff;
	$color-cyan-400: #22d3ee;
	$color-cyan-600: #0891b2;
	$color-rose-50: #fff1f2;
	$color-rose-400: #fb7185;
	$color-rose-500: #f43f5e;
	$color-rose-600: #e11d48;
	$color-green-50: #f0fdf4;
	$color-green-600: #16a34a;
	$color-green-900: #14532d;
	$color-red-50: #fef2f2;
	$color-red-600: #dc2626;
	$color-red-900: #7f1d1d;
	$color-blue-600: #2563eb;

	$breakpoint-sm: 640px;
	$breakpoint-md: 768px;
	$breakpoint-lg: 1024px;
	$breakpoint-xl: 1280px;
	$breakpoint-2xl: 1536px;

	$transition-fast: 0.2s ease;
	$transition-normal: 0.3s ease;

	// Section
	.contact {
		position: relative;
		background: linear-gradient(to bottom right, $color-cyan-50, $color-white, $color-rose-50);
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
	.contact-container {
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
	.contact-header {
		text-align: center;
		margin-bottom: 3rem;

		@media (min-width: $breakpoint-sm) {
			margin-bottom: 3.5rem;
		}

		@media (min-width: $breakpoint-md) {
			margin-bottom: 4rem;
		}

		@media (min-width: $breakpoint-xl) {
			margin-bottom: 5rem;
		}

		@media (min-width: $breakpoint-2xl) {
			margin-bottom: 6rem;
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
		background: linear-gradient(to right, $color-cyan-600, $color-rose-600);
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

	// Contact Grid
	.contact-grid {
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
		}

		@media (min-width: $breakpoint-xl) {
			gap: 3.5rem;
		}
	}

	// Form Card
	.form-card {
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 1rem;
		padding: 1.5rem;
		box-shadow: 8px 8px 0px 0px $color-gray-900;

		@media (min-width: $breakpoint-sm) {
			padding: 2rem;
		}

		@media (min-width: $breakpoint-md) {
			border-width: 3px;
		}

		@media (min-width: $breakpoint-xl) {
			border-radius: 1.5rem;
			border-width: 4px;
			padding: 2.5rem;
		}

		@media (min-width: $breakpoint-2xl) {
			padding: 3rem;
		}
	}

	.form-group {
		margin-bottom: 1.25rem;

		@media (min-width: $breakpoint-sm) {
			margin-bottom: 1.5rem;
		}

		@media (min-width: $breakpoint-xl) {
			margin-bottom: 1.75rem;
		}

		label {
			display: block;
			margin-bottom: 0.5rem;
			font-size: 0.875rem;
			font-weight: 700;
			color: $color-gray-900;

			@media (min-width: $breakpoint-sm) {
				font-size: 1rem;
			}

			@media (min-width: $breakpoint-xl) {
				font-size: 1.125rem;
			}
		}

		input,
		textarea {
			width: 100%;
			padding: 0.75rem 1rem;
			background-color: $color-white;
			border: 2px solid $color-gray-900;
			border-radius: 1rem;
			font-family: inherit;
			font-size: 0.875rem;
			font-weight: 500;
			color: $color-gray-900;
			transition: $transition-fast;
			outline: none;

			@media (min-width: $breakpoint-sm) {
				font-size: 1rem;
			}

			@media (min-width: $breakpoint-xl) {
				padding: 1rem 1.25rem;
				font-size: 1.125rem;
			}

			@media (min-width: $breakpoint-2xl) {
				padding: 1.25rem 1.5rem;
				font-size: 1.25rem;
			}

			&:focus {
				border-color: $color-cyan-600;
				box-shadow: 0 0 0 2px rgba($color-cyan-600, 0.2);
			}

			&.error {
				border-color: $color-red-600;

				&:focus {
					box-shadow: 0 0 0 2px rgba($color-red-600, 0.2);
				}
			}

			&::placeholder {
				color: $color-gray-600;
			}
		}

		textarea {
			resize: none;
		}
	}

	.error-message {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: $color-red-600;
	}

	.submit-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.75rem 1.5rem;
		background-color: $color-cyan-400;
		border: 2px solid $color-gray-900;
		border-radius: 9999px;
		font-family: inherit;
		font-size: 1rem;
		font-weight: 900;
		color: $color-gray-900;
		cursor: pointer;
		box-shadow: 6px 6px 0px 0px $color-gray-900;
		transition: $transition-fast;

		@media (min-width: $breakpoint-sm) {
			padding: 1rem 2rem;
			font-size: 1.125rem;
		}

		@media (min-width: $breakpoint-md) {
			border-width: 3px;
		}

		@media (min-width: $breakpoint-xl) {
			border-width: 4px;
			padding: 1.25rem 2.5rem;
			font-size: 1.25rem;
		}

		@media (min-width: $breakpoint-2xl) {
			padding: 1.5rem 3rem;
			font-size: 1.5rem;
		}

		&:hover:not(:disabled) {
			transform: translateY(-3px);
			box-shadow: 8px 8px 0px 0px $color-gray-900;
		}

		&:active:not(:disabled) {
			transform: translateY(0);
			box-shadow: 3px 3px 0px 0px $color-gray-900;
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}

	.spinner {
		width: 1.25rem;
		height: 1.25rem;
		border: 2px solid $color-gray-900;
		border-top-color: transparent;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.status-message {
		margin-top: 1rem;
		padding: 0.75rem;
		border-radius: 1rem;
		text-align: center;
		font-size: 0.875rem;
		font-weight: 700;

		@media (min-width: $breakpoint-sm) {
			padding: 1rem;
			font-size: 1rem;
		}

		@media (min-width: $breakpoint-xl) {
			padding: 1.25rem;
			font-size: 1.125rem;
		}

		&.success {
			background-color: $color-green-50;
			border: 2px solid $color-green-600;
			color: $color-green-900;
		}

		&.error {
			background-color: $color-red-50;
			border: 2px solid $color-red-600;
			color: $color-red-900;
		}
	}

	// Info Section
	.info-section {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		@media (min-width: $breakpoint-sm) {
			gap: 2rem;
		}

		@media (min-width: $breakpoint-xl) {
			gap: 2.5rem;
		}
	}

	// Connect Card
	.connect-card {
		background: linear-gradient(to bottom right, $color-cyan-400, $color-rose-400);
		border: 2px solid $color-gray-900;
		border-radius: 1rem;
		padding: 1.5rem;
		box-shadow: 8px 8px 0px 0px $color-gray-900;

		@media (min-width: $breakpoint-sm) {
			padding: 2rem;
		}

		@media (min-width: $breakpoint-md) {
			border-width: 3px;
		}

		@media (min-width: $breakpoint-xl) {
			border-radius: 1.5rem;
			border-width: 4px;
			padding: 2.5rem;
		}

		@media (min-width: $breakpoint-2xl) {
			padding: 3rem;
		}

		h3 {
			margin-bottom: 0.75rem;
			font-size: 1.5rem;
			font-weight: 900;
			color: $color-white;

			@media (min-width: $breakpoint-sm) {
				margin-bottom: 1rem;
				font-size: 1.875rem;
			}

			@media (min-width: $breakpoint-xl) {
				margin-bottom: 1.25rem;
				font-size: 2.25rem;
			}

			@media (min-width: $breakpoint-2xl) {
				font-size: 3rem;
			}
		}

		p {
			margin-bottom: 1.25rem;
			font-size: 1rem;
			font-weight: 500;
			color: $color-white;
			line-height: 1.625;

			@media (min-width: $breakpoint-sm) {
				margin-bottom: 1.5rem;
				font-size: 1.125rem;
			}

			@media (min-width: $breakpoint-xl) {
				margin-bottom: 2rem;
				font-size: 1.25rem;
			}

			@media (min-width: $breakpoint-2xl) {
				font-size: 1.5rem;
			}
		}
	}

	.email-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;

		@media (min-width: $breakpoint-xl) {
			gap: 1rem;
		}

		a {
			font-size: 1rem;
			font-weight: 700;
			color: $color-white;
			text-decoration: none;

			@media (min-width: $breakpoint-sm) {
				font-size: 1.125rem;
			}

			@media (min-width: $breakpoint-xl) {
				font-size: 1.25rem;
			}

			@media (min-width: $breakpoint-2xl) {
				font-size: 1.5rem;
			}

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.email-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		background-color: rgba($color-white, 0.2);
		border: 2px solid $color-white;
		border-radius: 50%;
		color: $color-white;

		@media (min-width: $breakpoint-xl) {
			width: 3rem;
			height: 3rem;
		}
	}

	// Quick Links Card
	.quick-links-card {
		background-color: $color-white;
		border: 2px solid $color-gray-900;
		border-radius: 1rem;
		padding: 1.5rem;
		box-shadow: 8px 8px 0px 0px $color-gray-900;

		@media (min-width: $breakpoint-sm) {
			padding: 2rem;
		}

		@media (min-width: $breakpoint-md) {
			border-width: 3px;
		}

		@media (min-width: $breakpoint-xl) {
			border-radius: 1.5rem;
			border-width: 4px;
			padding: 2.5rem;
		}

		@media (min-width: $breakpoint-2xl) {
			padding: 3rem;
		}

		h3 {
			margin-bottom: 1.25rem;
			font-size: 1.25rem;
			font-weight: 900;
			color: $color-gray-900;

			@media (min-width: $breakpoint-sm) {
				margin-bottom: 1.5rem;
				font-size: 1.5rem;
			}

			@media (min-width: $breakpoint-xl) {
				margin-bottom: 2rem;
				font-size: 1.875rem;
			}

			@media (min-width: $breakpoint-2xl) {
				font-size: 2.25rem;
			}
		}
	}

	.social-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;

		@media (min-width: $breakpoint-sm) {
			gap: 1rem;
		}

		@media (min-width: $breakpoint-xl) {
			grid-template-columns: repeat(4, 1fr);
			gap: 1.25rem;
		}
	}

	.social-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 1rem;
		border: 2px solid $color-gray-900;
		border-radius: 0.75rem;
		text-decoration: none;
		color: $color-white;
		transition: $transition-fast;

		@media (min-width: $breakpoint-sm) {
			padding: 1.25rem;
		}

		@media (min-width: $breakpoint-xl) {
			gap: 0.75rem;
			padding: 1.5rem;
			border-radius: 1rem;
		}

		@media (min-width: $breakpoint-2xl) {
			padding: 2rem;
		}

		span {
			font-size: 0.75rem;
			font-weight: 700;

			@media (min-width: $breakpoint-sm) {
				font-size: 0.875rem;
			}

			@media (min-width: $breakpoint-xl) {
				font-size: 1rem;
			}

			@media (min-width: $breakpoint-2xl) {
				font-size: 1.125rem;
			}
		}

		&:hover {
			transform: translateY(-4px) rotate(3deg);
		}

		&:active {
			transform: scale(0.95);
		}

		&.github {
			background-color: $color-gray-900;

			&:hover {
				background-color: scale($color-gray-900, 10%);
			}
		}

		&.linkedin {
			background-color: $color-blue-600;

			&:hover {
				background-color: scale($color-blue-600, 5%);
			}
		}

		&.email {
			background-color: $color-rose-500;

			&:hover {
				background-color: scale($color-rose-500, 5%);
			}
		}
	}
</style>
