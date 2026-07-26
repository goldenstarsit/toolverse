import { sqliteAdapter } from "@/database/adapters/sqlite.adapter";

export interface CategoryRecord {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  sort_order: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export class CategoryRepository {
  async findAll() {
    return sqliteAdapter.all<CategoryRecord>(
      "SELECT * FROM tool_categories ORDER BY sort_order ASC"
    );
  }

  async findBySlug(slug: string) {
    return sqliteAdapter.get<CategoryRecord>(
      "SELECT * FROM tool_categories WHERE slug = ?",
      [slug]
    );
  }
}

export const categoryRepository = new CategoryRepository();
