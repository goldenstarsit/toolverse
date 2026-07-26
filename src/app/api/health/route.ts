import { NextResponse } from "next/server";

import { appConfig } from "@/config/app.config";
import { ok } from "@/lib/api/response";

export async function GET() {
  return NextResponse.json(
    ok(
      {
        name: appConfig.name,
        version: appConfig.version,
        environment: appConfig.environment,
        timestamp: new Date().toISOString(),
      },
      "Application is healthy"
    )
  );
}
