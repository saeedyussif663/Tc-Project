import { User } from '@/CONSTANTS';
import { type ClassValue, clsx } from 'clsx';
import { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<any> {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) {
          throw new Error('No credentials provided.');
        }

        const response = await fetch(
          `${process.env.baseUrl}/api/v1/users/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          },
        );

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.user_msg);
        }

        const res = await response.json();

        console.log({ res });

        const user: User = {
          id: res.data.user.id,
          name: res.data.user.name,
          email: res.data.user.email,
          phone_number: res.data.user.phone_number,
          account: res.data.user.account_type,
          access_token: res.data.access_token,
          role: res.data.user.account_type,
        };

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 5 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...user,
        };
      }
      return token;
    },

    async session({ token, session }) {
      if (token) {
        session.user = token as Session['user'];
        session.expires = Date.now();
      }

      return session;
    },
  },
};
