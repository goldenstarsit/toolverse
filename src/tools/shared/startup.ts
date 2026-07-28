import { bootstrapTools } from "./bootstrap";

let initialized = false;

export async function initializeApplication() {
  if (initialized) {
    return;
  }

  await bootstrapTools();

  initialized = true;
}
