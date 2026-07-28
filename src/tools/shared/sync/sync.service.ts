import { eq } from "drizzle-orm";

import { db } from "@/database";
import { tools } from "@/database/schema";

import { createSyncPlan } from "./sync.engine";
import { getTools } from "@/tools/shared/tool.registry";

export async function syncTools() {
  const plan = await createSyncPlan();

  const registeredTools = getTools();

  const now = new Date().toISOString();

  for (const slug of plan.create) {
    const tool = registeredTools.find(
      (item) => item.slug === slug
    );

    if (!tool) {
      continue;
    }

    await db.insert(tools).values({
      id: tool.id,
      categoryId: tool.category,
      slug: tool.slug,
      name: tool.name,
      description: tool.description,
      version: tool.version,
      route: tool.route,
      isActive: tool.isActive,
      createdAt: now,
      updatedAt: now,
    });
  }

  for (const slug of plan.deactivate) {
    await db
      .update(tools)
      .set({
        isActive: false,
        updatedAt: now,
      })
      .where(eq(tools.slug, slug));
  }

  return plan;
}
