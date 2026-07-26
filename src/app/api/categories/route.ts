import { NextResponse } from "next/server";

import { categoryService } from "@/features/categories/services/category.service";
import { handleApiError } from "@/lib/api/error";
import { ok } from "@/lib/api/response";

export async function GET() {
  try {
    const categories = await categoryService.getAllCategories();

    return NextResponse.json(
      ok(categories, "Categories fetched successfully")
    );
  } catch (error) {
    return handleApiError(error);
  }
}
