import { validateRegistry } from "./registry.validator";

export function bootstrapTools() {
  const result = validateRegistry();

  if (!result.valid) {
    throw new Error(
      `Tool registry validation failed:\n${result.errors.join("\n")}`
    );
  }

  console.log(
    `Tool registry initialized successfully (${result.valid ? "OK" : "FAILED"}).`
  );
}
