import { db } from "../connection";
import { testTable } from "../schema";

async function seed() {
  const data: (typeof testTable.$inferInsert)[] = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      name: `Test ${i}`,
      description: `Test ${i} description`,
      successCount: i,
    });
  }
  await db.insert(testTable).values(data);
}

console.log("Seeding...");
seed()
  .then(() => {
    console.log("Seeding complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error while seeding: ", error);
    process.exit(1);
  });
