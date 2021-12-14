import { query as q } from "faunadb";

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_ID,
      authorization: { params: { scope: "read:user" } },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user }) {
      const { email } = user;
      console.log(`email: ${email}`);
      await fauna
        .query(q.Create(q.Collection("users"), { data: { email } }))
        .then((ret) => console.log(ret))
        .catch((err) => console.error(`Error: ${err}`));
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
