export type ToolCategory =
  | "audio"
  | "video"
  | "file"
  | "image"
  | "pdf"
  | "seo"
  | "ai";

export interface ToolDefinition {
  id: string;
  slug: string;
  name: string;
  category: ToolCategory;
  version: string;
  route: string;
  description?: string;
  isActive: boolean;
}
