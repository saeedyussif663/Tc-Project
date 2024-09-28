import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      token: string;
      role: string;
      name: string;
      id: string;
      email: string;
      phone_number: string;
      access_token: string;
    };
    expires: number;
  }
}
