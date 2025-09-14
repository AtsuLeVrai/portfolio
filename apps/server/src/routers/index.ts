import { publicProcedure, router } from "../lib/trpc.js";

export const appRouter = router({
	healthCheck: publicProcedure.query(() => {
		return "OK";
	}),
});
export type AppRouter = typeof appRouter;
