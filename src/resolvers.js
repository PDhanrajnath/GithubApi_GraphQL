import fetch from "node-fetch";
import { headersForAuth, baseUrl } from "./constants.js";

const resolvers = {
  Query: {
    getUser: async (_parent) => {
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
