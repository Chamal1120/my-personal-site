import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import { db } from "~/server/db";
import { eq } from "drizzle-orm";
import { blogsTable } from "~/server/db/schema";
import { z } from "zod";

export const blogRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    return await db.select().from(blogsTable);
  }),

  byId: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const rows = await db
        .select()
        .from(blogsTable)
        .where(eq(blogsTable.id, input.id))
        .limit(1);

      return rows[0] ?? null;
    }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        imageUrl: z.string(),
        tags: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ input }) => {
      return await db.insert(blogsTable).values(input).returning();
    }),
});
