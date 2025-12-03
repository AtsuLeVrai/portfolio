import { z } from "zod";

const envSchema = z.object({
	RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
	CONTACT_EMAIL: z.email("CONTACT_EMAIL must be a valid email"),
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
});

function validateEnv() {
	const parsed = envSchema.safeParse(process.env);

	if (!parsed.success) {
		if (process.env.NODE_ENV === "development") {
			console.error("❌ Invalid environment variables");
		}
		throw new Error("Invalid environment variables");
	}

	return parsed.data;
}

export const env = validateEnv();
