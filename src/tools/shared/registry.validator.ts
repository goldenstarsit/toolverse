import { getTools } from "./tool.registry";

export interface RegistryValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateRegistry(): RegistryValidationResult {
  const tools = getTools();

  const ids = new Set<string>();
  const slugs = new Set<string>();

  const errors: string[] = [];

  for (const tool of tools) {
    if (ids.has(tool.id)) {
      errors.push(`Duplicate tool id: ${tool.id}`);
    } else {
      ids.add(tool.id);
    }

    if (slugs.has(tool.slug)) {
      errors.push(`Duplicate tool slug: ${tool.slug}`);
    } else {
      slugs.add(tool.slug);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
