import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, req }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile, email, credentials, req }) {
      try {
        const existingGuest = await getGuest(user?.email);

        if (!existingGuest)
          await createGuest({
            email: user?.email,
            fullName: user?.name,
          });

        return true;
      } catch {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
    async session({ session, user, token, req }) {
      const guest = await getGuest(session?.user?.email);
      if (!guest) {
        console.error("Guest not found for session:", session);
        return session;
      }
      session.user.id = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
