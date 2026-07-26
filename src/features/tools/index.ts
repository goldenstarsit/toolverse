import type { ToolDefinition } from "@/types/tool";

export const toolRegistry: ToolDefinition[] = [];

export function registerTool(tool: ToolDefinition) {
  toolRegistry.push(tool);
}

export function getTools() {
  return toolRegistry;
}

export function getToolBySlug(slug: string) {
  return toolRegistry.find((tool) => tool.slug === slug);
}
