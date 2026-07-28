export type ToolCategory =
  | "audio"
  | "video"
  | "image"
  | "pdf"
  | "file"
  | "seo"
  | "ai";

export interface ToolManifest {
  id: string;
  slug: string;
  name: string;
  category: ToolCategory;
  version: string;
  route: string;
  description?: string;
  isActive: boolean;
}

export interface ToolModule {
  manifest: ToolManifest;

  initialize?(): Promise<void>;

  destroy?(): Promise<void>;
}
