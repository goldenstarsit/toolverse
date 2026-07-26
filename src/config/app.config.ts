export const appConfig = {
  name: "Toolverse",
  version: "1.0.0",
  environment: process.env.NODE_ENV ?? "development",
  database: {
    type: "sqlite",
  },
  features: {
    tools: true,
  },
} as const;
