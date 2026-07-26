import { sqliteAdapter } from "@/database/adapters/sqlite.adapter";

export interface ToolRecord {
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

export class ToolRepository {
  async findAll() {
    return sqliteAdapter.all<ToolRecord>(
      "SELECT * FROM tools ORDER BY name ASC"
    );
  }

  async findBySlug(slug: string) {
    return sqliteAdapter.get<ToolRecord>(
      "SELECT * FROM tools WHERE slug = ?",
      [slug]
    );
  }
}

export const toolRepository = new ToolRepository();
