import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google';
import  googleLogin from "./actions";


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],

    callbacks: {
        async signIn({ user }: { user: AdapterUser | User }) {
            try {

                await googleLogin(user?.name as string, user?.email as string);

                return true;
            } catch (error: any) {
                console.log(error);
                return false;
            }
        }
    }
}
