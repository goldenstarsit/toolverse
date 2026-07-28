import type { ToolManifest } from "./tool.interface";

import { manifest as audioConverterManifest } from "@/tools/audio/audio-converter/manifest";

const registry = new Map<string, ToolManifest>();

function register(manifest: ToolManifest) {
  if (registry.has(manifest.slug)) {
    throw new Error(
      `Duplicate tool slug detected: ${manifest.slug}`
    );
  }

  registry.set(manifest.slug, manifest);
}

register(audioConverterManifest);

export function getTools(): ToolManifest[] {
  return [...registry.values()];
}

export function getTool(slug: string): ToolManifest | undefined {
  return registry.get(slug);
}
