import { categoryRepository } from "../repositories/category.repository";

export class CategoryService {
  async getAllCategories() {
    return categoryRepository.findAll();
  }

  async getCategory(slug: string) {
    return categoryRepository.findBySlug(slug);
  }
}

export const categoryService = new CategoryService();
