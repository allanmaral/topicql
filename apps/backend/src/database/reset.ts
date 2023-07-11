import { PrismaClient } from '@prisma/client';

async function reset(): Promise<void> {
  const prisma = new PrismaClient();

  await prisma.topic.deleteMany();
  await prisma.user.deleteMany();
}

console.log('[RESET] Started ---');
const startTime = new Date().getTime();
reset()
  .then(() => {
    console.log(
      `[RESET] Finished: Records deleted -- Time spent: ${
        new Date().getTime() - startTime
      }ms`
    );
  })
  .catch((error) => {
    console.log(`[RESET] Error: Failed to seed`, error);
    process.exit();
  });
