import { categorySeedRepository } from "@/database/repositories/category-seed.repository";
import { toolSeedRepository } from "@/database/repositories/tool-seed.repository";

import { toolCategoriesSeed } from "./tool-categories";
import { toolsSeed } from "./tools";

export async function runSeeds() {
  console.log("Starting database seeding...");

  const now = new Date().toISOString();

  if (await categorySeedRepository.isEmpty()) {
    await categorySeedRepository.insertMany(
      toolCategoriesSeed.map((category) => ({
        ...category,
        createdAt: now,
        updatedAt: now,
      }))
    );

    console.log(`Inserted ${toolCategoriesSeed.length} tool categories.`);
  } else {
    console.log("Tool categories already exist.");
  }

  if (await toolSeedRepository.isEmpty()) {
    await toolSeedRepository.insertMany(
      toolsSeed.map((tool) => ({
        ...tool,
        createdAt: now,
        updatedAt: now,
      }))
    );

    console.log(`Inserted ${toolsSeed.length} tools.`);
  } else {
    console.log("Tools already exist.");
  }

  console.log("Database seeding completed.");
}

if (require.main === module) {
  runSeeds().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
