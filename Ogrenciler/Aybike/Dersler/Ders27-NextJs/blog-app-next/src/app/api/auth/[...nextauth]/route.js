import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          "http://localhost:3002/users?email=" + credentials?.email
        );
        const users = await res.json();
        const user = users[0];

        if (!user) throw new Error("Email veya şifre hatalı!");

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Email veya şifre hatalı!");

        return { id: user.id, email: user.email };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const GET = handler;
export const POST = handler;
