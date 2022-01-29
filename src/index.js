import { ApolloServer, gql } from "apollo-server";
import fetch from "node-fetch";

const typeDefs = gql`
  type UserPlan {
    name: String
    space: Int
    collaborators: String
  }
  type User {
    login: String
    name: String
    id: Int
    url: String
    node_id: String
    avatar_url: String
    html_url: String
    followers_url: String
    following_url: String
    gists_url: String
    type: String
    location: String
    public_repos: Int
    public_gists: Int
    followers: Int
    following: Int
    collaborators: Int
    plan: UserPlan
  }

  type Query {
    getUser: User
  }
`;

const github_data = {
  token: "ghp_hUKa2no..............",
  userName: "PDhanrajnath",
  repo: "Apollo-GraphQL-React",
};

const headersForAuth = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + github_data["token"],
};

const resolvers = {
  Query: {
    getUser: async (_parent, context) => {
      console.log(JSON.stringify(context.Authorization));
      const response = await fetch("https://api.github.com/user", {
        method: "GET",
        headers: headersForAuth,
      });
      const data = await response.json();
      return data;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;
    // console.log(JSON.stringify(token));
    return token;
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
