import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';
import { CONTACT_INFO } from '$lib/constants';

const resend = new Resend(RESEND_API_KEY);

interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

function validateFormData(data: unknown): data is ContactFormData {
	if (typeof data !== 'object' || data === null) return false;
	const { name, email, message } = data as Record<string, unknown>;
	return (
		typeof name === 'string' &&
		typeof email === 'string' &&
		typeof message === 'string' &&
		name.trim().length > 0 &&
		name.length <= 100 &&
		email.trim().length > 0 &&
		email.length <= 254 &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
		message.trim().length > 0 &&
		message.length <= 5000
	);
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();

		if (!validateFormData(body)) {
			return json({ error: 'Invalid form data' }, { status: 400 });
		}

		const { name, email, message } = body;

		const { error } = await resend.emails.send({
			from: 'Portfolio Contact <onboarding@resend.dev>',
			to: CONTACT_INFO.email,
			replyTo: email,
			subject: `New message from ${name} - Portfolio Contact`,
			html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #111827;">New Contact Form Submission</h2>
					<div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
						<p><strong>Name:</strong> ${escapeHtml(name)}</p>
						<p><strong>Email:</strong> ${escapeHtml(email)}</p>
					</div>
					<div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
						<h3 style="color: #374151; margin-top: 0;">Message:</h3>
						<p style="color: #4b5563; white-space: pre-wrap;">${escapeHtml(message)}</p>
					</div>
					<p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
						This email was sent from your portfolio contact form.
					</p>
				</div>
			`
		});

		if (error) {
			console.error('Resend error:', error);
			return json({ error: 'Failed to send email' }, { status: 500 });
		}

		return json({ success: true });
	} catch (err) {
		console.error('Server error:', err);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};

function escapeHtml(text: string): string {
	const map: Record<string, string> = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;'
	};
	return text.replace(/[&<>"']/g, (char) => map[char]);
}
