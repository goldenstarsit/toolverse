import { NextResponse } from "next/server";

import { ok } from "@/lib/api/response";
import { handleApiError } from "@/lib/api/error";
import { toolService } from "@/features/tools/services/tool.service";

export async function GET() {
  try {
    const tools = await toolService.getAllTools();

    return NextResponse.json(
      ok(tools, "Tools fetched successfully")
    );
  } catch (error) {
    return handleApiError(error);
  }
}
