import { sqliteAdapter } from "@/database/adapters/sqlite.adapter";

export interface ToolSeedRecord {
  id: string;
  category_id: string;
  slug: string;
  name: string;
  description: string | null;
  version: string;
  route: string;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export class ToolSeedRepository {
  async findAll() {
    return sqliteAdapter.all<ToolSeedRecord>(
      "SELECT * FROM tools"
    );
  }

  async isEmpty() {
    const tools = await this.findAll();
    return tools.length === 0;
  }

  async insertMany(
    tools: {
      id: string;
      categoryId: string;
      slug: string;
      name: string;
      description: string | null;
      version: string;
      route: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    }[]
  ) {
    for (const tool of tools) {
      await sqliteAdapter.run(
        `INSERT INTO tools
        (id, category_id, slug, name, description, version, route, is_active, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          tool.id,
          tool.categoryId,
          tool.slug,
          tool.name,
          tool.description,
          tool.version,
          tool.route,
          tool.isActive ? 1 : 0,
          tool.createdAt,
          tool.updatedAt,
        ]
      );
    }
  }
}

export const toolSeedRepository = new ToolSeedRepository();
