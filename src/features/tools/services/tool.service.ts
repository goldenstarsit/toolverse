import { toolRepository } from "../repositories/tool.repository";

export class ToolService {
  async getAllTools() {
    return toolRepository.findAll();
  }

  async getTool(slug: string) {
    return toolRepository.findBySlug(slug);
  }
}

export const toolService = new ToolService();
