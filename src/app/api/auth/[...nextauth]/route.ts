import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    } as any),
  ],
  callbacks: {
    async jwt({ token, user }: any): Promise<any> {
      // Persist the OAuth access_token and or the user id to the token right after signin

      return { ...token, ...user };
    },
    async session({ session, token, user }: any): Promise<any> {
      session.user = token;
      return session;
    },
  },
};
export const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST, handler as PUT, handler as PATCH };
