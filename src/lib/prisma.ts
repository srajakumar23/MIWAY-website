import { PrismaClient } from '@prisma/client';
import path from 'path';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

let databaseUrl = process.env.DATABASE_URL;

// If it's a relative SQLite path, make it absolute for Netlify
if (databaseUrl?.startsWith('file:./')) {
    const relativePath = databaseUrl.replace('file:./', '');
    const absolutePath = path.join(process.cwd(), relativePath);
    databaseUrl = `file:${absolutePath}`;
    console.log(`Prisma absolute path: ${databaseUrl}`);
}

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        datasources: {
            db: {
                url: databaseUrl,
            },
        },
        log: ['error', 'warn'],
    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
