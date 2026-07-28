import { NextResponse } from "next/server";

import { appConfig } from "@/config/app.config";
import { ok } from "@/lib/api/response";
import { initializeApplication } from "@/tools/shared/startup";

export async function GET() {
  await initializeApplication();

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
