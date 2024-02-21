import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User } from "@/lib/definitions";

async function getUser(email: string): Promise<User | null> {
    try {
        return null;
    }
}
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
        const parsedCredentials = z.
            object({
                email: z.string().email(),
                password: z.string().min(8),
            }).
            safeParse(credentials);
        
        if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
        }
       },
     }),
    ],
});

