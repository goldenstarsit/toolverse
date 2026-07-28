import { toolRepository } from "../repositories/tool.repository";
import {
  getTool as getRegisteredTool,
  getTools as getRegisteredTools,
} from "@/tools/shared/tool.registry";

export class ToolService {
  async getAllTools() {
    const databaseTools = await toolRepository.findAll();

    return {
      database: databaseTools,
      registered: getRegisteredTools(),
    };
  }

  async getTool(slug: string) {
    const databaseTool = await toolRepository.findBySlug(slug);
    const registeredTool = getRegisteredTool(slug);

    return {
      database: databaseTool,
      registered: registeredTool,
    };
  }
}

export const toolService = new ToolService();
