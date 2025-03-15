import { AuthService } from "@/app/service/AuthService";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {

                if (!credentials?.email || !credentials?.password) {
                    throw new Error("E-posta ve şifre gerekli!");
                }

                const user = await AuthService.getUser(credentials.email);

                if (!user) {
                    throw new Error("E-posta veya şifre hatalı!");
                }

                if (user.password !== credentials.password) {
                    throw new Error("E-posta veya şifre hatalı!");
                }

                return {
                    email: user.email,
                    state: user.state,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: "O7V6m8qKfJ+X9fZ3Y9xl1yq3U6kF6rS9pA==",
});

export const GET = handler;
export const POST = handler;