import { toolRepository } from "@/features/tools/repositories/tool.repository";
import { getTools } from "@/tools/shared/tool.registry";

export interface DatabaseSyncState {
  databaseTools: Awaited<ReturnType<typeof toolRepository.findAll>>;
  registeredTools: ReturnType<typeof getTools>;
}

export async function collectSyncState(): Promise<DatabaseSyncState> {
  const databaseTools = await toolRepository.findAll();
  const registeredTools = getTools();

  return {
    databaseTools,
    registeredTools,
  };
}
