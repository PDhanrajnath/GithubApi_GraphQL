import fetch from "node-fetch";

const github_data = {
  token: "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",
};

const headersForAuth = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + github_data["token"],
};

const resolvers = {
  Query: {
    getUser: async (_parent, context) => {
      const response = await fetch("https://api.github.com/user", {
        method: "GET",
        headers: headersForAuth,
      });
      const data = await response.json();
      return data;
    },
  },
};

export default resolvers;
