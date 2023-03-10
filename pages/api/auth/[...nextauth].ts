import NextAuth from 'next-auth';
import type {NextAuthOptions} from 'next-auth';
import GitghubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GitghubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/',
  },
};

export default NextAuth(authOptions);
