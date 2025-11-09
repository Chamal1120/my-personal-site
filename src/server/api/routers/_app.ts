import { createTRPCRouter } from '~/server/api/trpc';
import { blogRouter } from './blog';

export const appRouter = createTRPCRouter({
    blog: blogRouter,
});

export type AppRouter = typeof appRouter;
