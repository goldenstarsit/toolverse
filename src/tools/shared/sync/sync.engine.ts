import {
  collectSyncState,
} from "./database-sync";

export interface SyncPlan {
  create: string[];
  update: string[];
  deactivate: string[];
}

export async function createSyncPlan(): Promise<SyncPlan> {
  const {
    databaseTools,
    registeredTools,
  } = await collectSyncState();

  const create: string[] = [];
  const update: string[] = [];
  const deactivate: string[] = [];

  const registeredMap = new Map(
    registeredTools.map((tool) => [
      tool.slug,
      tool,
    ])
  );

  for (const tool of registeredTools) {
    const existing = databaseTools.find(
      (item) => item.slug === tool.slug
    );

    if (!existing) {
      create.push(tool.slug);
      continue;
    }

    if (
      existing.name !== tool.name ||
      existing.version !== tool.version ||
      existing.route !== tool.route
    ) {
      update.push(tool.slug);
    }
  }

  for (const tool of databaseTools) {
    if (!registeredMap.has(tool.slug)) {
      deactivate.push(tool.slug);
    }
  }

  return {
    create,
    update,
    deactivate,
  };
}
