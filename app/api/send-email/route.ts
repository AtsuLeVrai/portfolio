import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import he from "he";
import { rateLimit, getClientIP } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schemas
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

function validateFormData(data: unknown): { success: true; data: ContactFormData } | { success: false; error: string } {
	if (!data || typeof data !== "object") {
		return { success: false, error: "Invalid request body" };
	}

	const { name, email, message } = data as Record<string, unknown>;

	if (typeof name !== "string" || name.trim().length === 0) {
		return { success: false, error: "Name is required" };
	}
	if (name.length > MAX_NAME_LENGTH) {
		return { success: false, error: `Name must be less than ${MAX_NAME_LENGTH} characters` };
	}

	if (typeof email !== "string" || email.trim().length === 0) {
		return { success: false, error: "Email is required" };
	}
	if (email.length > MAX_EMAIL_LENGTH) {
		return { success: false, error: `Email must be less than ${MAX_EMAIL_LENGTH} characters` };
	}
	if (!EMAIL_REGEX.test(email)) {
		return { success: false, error: "Invalid email format" };
	}

	if (typeof message !== "string" || message.trim().length === 0) {
		return { success: false, error: "Message is required" };
	}
	if (message.length > MAX_MESSAGE_LENGTH) {
		return { success: false, error: `Message must be less than ${MAX_MESSAGE_LENGTH} characters` };
	}

	return {
		success: true,
		data: {
			name: name.trim(),
			email: email.trim().toLowerCase(),
			message: message.trim(),
		},
	};
}

export async function POST(req: NextRequest) {
	try {
		// Rate limiting
		const clientIP = getClientIP(req);
		const rateLimitResult = rateLimit(clientIP);

		if (!rateLimitResult.success) {
			return NextResponse.json(
				{ error: "Too many requests. Please try again later." },
				{
					status: 429,
					headers: {
						"Retry-After": Math.ceil(rateLimitResult.resetIn / 1000).toString(),
						"X-RateLimit-Remaining": "0",
					},
				},
			);
		}

		const body = await req.json();
		const validation = validateFormData(body);

		if (!validation.success) {
			return NextResponse.json(
				{ error: validation.error },
				{ status: 400 },
			);
		}

		const { name, email, message } = validation.data;

		// Escape all user input for HTML
		const safeName = he.escape(name);
		const safeEmail = he.escape(email);
		const safeMessage = he.escape(message).replace(/\n/g, "<br>");

		const { data, error } = await resend.emails.send({
			from: "Portfolio Contact <onboarding@resend.dev>",
			to: process.env.CONTACT_EMAIL || "minecraftytom22@gmail.com",
			replyTo: email,
			subject: `New Contact Form Submission from ${safeName}`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #0891b2;">New Contact Form Message</h2>
					<div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
						<p><strong>Name:</strong> ${safeName}</p>
						<p><strong>Email:</strong> ${safeEmail}</p>
					</div>
					<div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
						<h3 style="color: #111827; margin-top: 0;">Message:</h3>
						<p style="color: #374151; line-height: 1.6;">${safeMessage}</p>
					</div>
					<p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
						This message was sent from your portfolio contact form.
					</p>
				</div>
			`,
		});

		if (error) {
			// Log error server-side only in development
			if (process.env.NODE_ENV === "development") {
				console.error("Resend error:", error);
			}
			return NextResponse.json(
				{ error: "Failed to send email. Please try again later." },
				{ status: 500 },
			);
		}

		return NextResponse.json(
			{ message: "Email sent successfully", id: data?.id },
			{ status: 200 },
		);
	} catch (error) {
		if (process.env.NODE_ENV === "development") {
			console.error("API error:", error);
		}
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
