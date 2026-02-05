import NextAuth from 'next-auth';
// Use only the configuration part matching NextAuth type for middleware if needed, 
// but importing 'auth' directly is usually fine for edge compatibility in newer beta.
import { auth } from '@/auth';

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const isOnAdmin = req.nextUrl.pathname.startsWith('/admin');

    if (isOnAdmin && !isLoggedIn) {
        return Response.redirect(new URL('/login', req.nextUrl));
    }
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
