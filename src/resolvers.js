import fetch from "node-fetch";
import { headersForAuth, baseUrl } from "./constants";

const resolvers = {
  Query: {
    getUser: async (_parent) => {
      console.log(process.env.BASE_URL);
      const response = await fetch(baseUrl, {
        method: "GET",
        headers: headersForAuth,
      });
      const data = await response.json();
      return data;
    },
  },
};

export default resolvers;
