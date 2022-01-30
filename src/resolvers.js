import fetch from "node-fetch";

const github_data = {
  token: "ghp_W.......",
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
      console.log(context.Authorization);
      const response = await fetch("https://api.github.com/user", {
        method: "GET",
        headers: headersForAuth,
      });
      const data = await response.json();
      return data;
    },
    getOrgRepos: async (_parent, args, context) => {
      const response = await fetch(
        `https://api.github.com/orgs/${args.orgName}/repos`,
        {
          method: "GET",
          headers: headersForAuth,
        }
      );
      // console.log(await response.json());
    },
  },
};

export default resolvers;
