import { registerTool } from "./index";

registerTool({
  id: "audio-converter",
  slug: "audio-converter",
  name: "Audio Converter",
  category: "audio",
  version: "1.0.0",
  route: "/tools/audio/audio-converter",
  description: "Convert audio files between supported formats.",
  isActive: true,
});
