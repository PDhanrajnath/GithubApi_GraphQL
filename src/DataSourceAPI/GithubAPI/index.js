const { RESTDataSource } = require("apollo-datasource-rest");

class GithubAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.github.com/user";
  }

  async getUser() {
    const { response } = await this.get("");
    return response;
  }
}

module.exports = GithubAPI;
