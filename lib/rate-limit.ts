const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

export function rateLimit(identifier: string): {
	success: boolean;
	remaining: number;
	resetIn: number;
} {
	const now = Date.now();
	const record = rateLimitMap.get(identifier);

	// Clean up old entries periodically
	if (Math.random() < 0.01) {
		for (const [key, value] of rateLimitMap.entries()) {
			if (now > value.resetTime) {
				rateLimitMap.delete(key);
			}
		}
	}

	if (!record || now > record.resetTime) {
		rateLimitMap.set(identifier, { count: 1, resetTime: now + WINDOW_MS });
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
