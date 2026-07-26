import { eq } from "drizzle-orm";

import { db } from "@/database";
import { tools } from "@/database/schema";

export class ToolRepository {
  async findAll() {
    return db.select().from(tools);
  }

  async findBySlug(slug: string) {
    return db.select().from(tools).where(eq(tools.slug, slug));
  }
}

export const toolRepository = new ToolRepository();
