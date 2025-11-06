import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
		const { name, email, message } = await req.json();

		// Validation
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Invalid email format" },
				{ status: 400 },
			);
		}

		const { data, error } = await resend.emails.send({
			from: "Portfolio Contact <onboarding@resend.dev>",
			to: "minecraftytom22@gmail.com",
			replyTo: email,
			subject: `New Contact Form Submission from ${name}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">New Contact Form Message</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #111827; margin-top: 0;">Message:</h3>
            <p style="color: #374151; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
		});

		if (error) {
			console.error("Resend error:", error);
			return NextResponse.json(
				{ error: "Failed to send email" },
				{ status: 500 },
			);
		}

		return NextResponse.json(
			{ message: "Email sent successfully", data },
			{ status: 200 },
		);
	} catch (error) {
		console.error("API error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
