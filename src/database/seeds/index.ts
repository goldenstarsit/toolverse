import { toolCategoriesSeed } from "./tool-categories";

export async function runSeeds() {
  console.log("Starting database seeding...");

  console.log(
    `Loaded ${toolCategoriesSeed.length} tool categories.`
  );

  console.log("Database seeding completed.");
}

if (require.main === module) {
  runSeeds().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
