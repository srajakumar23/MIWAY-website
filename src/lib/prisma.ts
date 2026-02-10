import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

let databaseUrl = process.env.DATABASE_URL;

// Deep path discovery for serverless environments (Netlify/Vercel)
if (databaseUrl?.startsWith('file:')) {
    const dbFile = 'dev.db';
    const potentialPaths = [
        path.join(process.cwd(), 'prisma', dbFile),
        path.join(process.cwd(), dbFile),
        path.join(process.cwd(), '..', 'prisma', dbFile),
        path.resolve(process.cwd(), 'prisma', dbFile),
    ];

    let foundPath = null;
    for (const p of potentialPaths) {
        if (fs.existsSync(p)) {
            foundPath = p;
            break;
        }
    }

    if (foundPath) {
        databaseUrl = `file:${foundPath}`;
        console.log(`Prisma found database at: ${databaseUrl}`);
    } else {
        console.error(`Prisma could not find ${dbFile} in searched paths:`, potentialPaths);
    }
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
