import { User } from '@/CONSTANTS';
import { type ClassValue, clsx } from 'clsx';
import { NextAuthOptions } from 'next-auth';
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
        if (!credentials) {
          throw new Error('No credentials provided.');
        }

        const { email, password } = credentials;

        try {
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

          const { data } = await response.json();

          const user: User = {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            phone_number: data.user.phone_number,
            account: data.user.account_type,
            access_token: data.access_token,
          };

          return user;
        } catch (err: any) {
          throw new Error(err.message);
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      return token;
    },

    async session({ token, session }) {
      console.log({ session });
      return session;
    },
  },
};
