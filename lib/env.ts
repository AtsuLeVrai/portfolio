import { z } from "zod";

const envSchema = z.object({
	RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
	CONTACT_EMAIL: z
		.string()
		.email()
		.optional()
		.default("minecraftytom22@gmail.com"),
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
});

function validateEnv() {
	const parsed = envSchema.safeParse(process.env);

	if (!parsed.success) {
		console.error(
			"❌ Invalid environment variables:",
			parsed.error.flatten().fieldErrors,
		);
		throw new Error("Invalid environment variables");
	}

	return parsed.data;
}

export const env = validateEnv();
