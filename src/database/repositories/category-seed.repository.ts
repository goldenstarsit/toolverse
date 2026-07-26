import { sqliteAdapter } from "@/database/adapters/sqlite.adapter";

export interface CategorySeedRecord {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  sort_order: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export class CategorySeedRepository {
  async findAll() {
    return sqliteAdapter.all<CategorySeedRecord>(
      "SELECT * FROM tool_categories"
    );
  }

  async isEmpty() {
    const categories = await this.findAll();
    return categories.length === 0;
  }

  async insertMany(
    categories: {
      id: string;
      slug: string;
      name: string;
      description: string | null;
      sortOrder: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    }[]
  ) {
    for (const category of categories) {
      await sqliteAdapter.run(
        `INSERT INTO tool_categories
        (id, slug, name, description, sort_order, is_active, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          category.id,
          category.slug,
          category.name,
          category.description,
          category.sortOrder,
          category.isActive ? 1 : 0,
          category.createdAt,
          category.updatedAt,
        ]
      );
    }
  }
}

export const categorySeedRepository = new CategorySeedRepository();
