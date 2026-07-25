import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const toolCategories = sqliteTable("tool_categories", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description"),
  sortOrder: integer("sort_order").notNull().default(0),
  isActive: integer("is_active", { mode: "boolean" })
    .notNull()
    .default(true),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const tools = sqliteTable("tools", {
  id: text("id").primaryKey(),
  categoryId: text("category_id")
    .notNull()
    .references(() => toolCategories.id),

  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description"),
  version: text("version").notNull().default("1.0.0"),
  route: text("route").notNull(),
  isActive: integer("is_active", { mode: "boolean" })
    .notNull()
    .default(true),

  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});
