import { PrismaClient } from '@prisma/client';

import { seedTopics } from './topics';
import { seedUsers } from './users';

async function seedAll(): Promise<void> {
  const prisma = new PrismaClient();

  await seedUsers(prisma);
  await seedTopics(prisma);
}

console.log('[SEED] Started ---');
const startTime = new Date().getTime();
seedAll()
  .then(() => {
    console.log(
      `[SEED] Finished: All tables seeded -- Time spent: ${
        new Date().getTime() - startTime
      }ms`
    );
  })
  .catch((error) => {
    console.log(`[SEED] Error: Failed to seed`, error);
    process.exit();
  });
