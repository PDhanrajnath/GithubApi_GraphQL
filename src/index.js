import { ApolloServer} from "apollo-server";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = "" ?? req.headers.authorization;
    return token;
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
