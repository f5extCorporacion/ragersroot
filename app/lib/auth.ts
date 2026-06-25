import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
interface GoogleAuthParams {
  prompt?: string;
  access_type?: string;
  response_type?: string;
}
export const authOptions = {
  session: {
    strategy: "jwt" as const,
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      } , 
    }),
   
  ],
  secret:process.env.NEXTAUTH_SECRET
};
