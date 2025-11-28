import { initTRPC } from "@trpc/server";
import { auth } from "~/auth";

const t = initTRPC.create();

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  const session = await auth();
  if (!session?.user || session.user.email != process.env.ADMIN_EMAIL) {
    throw new Error("Not authorized");
  }
  return next({ ctx: { ...ctx, session } });
});
