import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import emailLogin from "./actions/email_login/emailLogin";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const {email, password} = credentials as any;

              const user = await emailLogin(email, password);

              if (user) {
                return user.user;
              } else {
                return null;
              }
            }
        })
    ],

    session: {
        strategy: "jwt"
    },

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: "/auth/login"
    }
}
