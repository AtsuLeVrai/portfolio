const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function cleanupExpiredEntries(): void {
	const now = Date.now();
	for (const [key, value] of rateLimitStore.entries()) {
		if (now > value.resetTime) {
			rateLimitStore.delete(key);
		}
	}
}

export function rateLimit(identifier: string): {
	success: boolean;
	remaining: number;
	resetIn: number;
} {
	const now = Date.now();

	if (Math.random() < 0.01) {
		cleanupExpiredEntries();
	}

	const record = rateLimitStore.get(identifier);

	if (!record || now > record.resetTime) {
		rateLimitStore.set(identifier, { count: 1, resetTime: now + WINDOW_MS });
		return { success: true, remaining: MAX_REQUESTS - 1, resetIn: WINDOW_MS };
	}

	if (record.count >= MAX_REQUESTS) {
		return { success: false, remaining: 0, resetIn: record.resetTime - now };
	}

	record.count++;
	return {
		success: true,
		remaining: MAX_REQUESTS - record.count,
		resetIn: record.resetTime - now,
	};
}

export function getClientIP(request: Request): string {
	const forwarded = request.headers.get("x-forwarded-for");
	const realIP = request.headers.get("x-real-ip");

	if (forwarded) {
		return forwarded.split(",")[0].trim();
	}
	if (realIP) {
		return realIP;
	}
	return "unknown";
}
