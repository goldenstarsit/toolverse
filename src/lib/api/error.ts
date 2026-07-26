import { NextResponse } from "next/server";

import { fail } from "./response";

export function handleApiError(error: unknown) {
  console.error(error);

  const message =
    error instanceof Error ? error.message : "Internal Server Error";

  return NextResponse.json(
    fail("Request failed", message),
    {
      status: 500,
    }
  );
}
