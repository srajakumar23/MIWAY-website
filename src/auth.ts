import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { authConfig } from './auth.config';

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                console.log('Authorize called with:', credentials?.email);
                try {
                    const parsedCredentials = z
                        .object({ email: z.string().email(), password: z.string().min(6) })
                        .safeParse(credentials);

                    if (parsedCredentials.success) {
                        const { email, password } = parsedCredentials.data;
                        const user = await prisma.user.findUnique({ where: { email } });

                        if (!user) {
                            console.log('User not found:', email);
                            return null;
                        }

                        const passwordsMatch = await bcrypt.compare(password, user.password);
                        if (passwordsMatch) {
                            console.log('Password match success for:', email);
                            return user;
                        }
                        console.log('Password mismatch for:', email);
                    } else {
                        console.log('Credential validation failed:', parsedCredentials.error.message);
                    }
                } catch (e) {
                    console.error('Authorize exception:', e);
                    throw e;
                }

                return null;
            },
        }),
    ],
});
