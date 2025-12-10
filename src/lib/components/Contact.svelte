<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { CONTACT_INFO, SOCIAL_LINKS } from '$lib/constants';

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
		<div class="contact-header">
			<h2 class="title">
				{m.contact_title_get()} <span class="gradient-text">{m.contact_title_touch()}</span>
			</h2>
			<p class="description">{m.contact_description()}</p>
		</div>

		<div class="contact-grid">
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

			<div class="info-section">
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
	@use '$lib/styles/Contact.scss';
</style>
