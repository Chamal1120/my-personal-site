import { 
    integer, 
    pgTable, 
    varchar, 
    text, 
    timestamp, 
} from "drizzle-orm/pg-core";

export const blogsTable = pgTable("blogs", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  imageUrl: text("imageUrl"),
  tags: text("tags").array(),
  publishedAt: timestamp("published_at").defaultNow()
});
