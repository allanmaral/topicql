import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export interface Context {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
  userId?: number;
}
