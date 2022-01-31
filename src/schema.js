import { gql } from "apollo-server";

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
    two_factor_authentication: Boolean
  }


  type Query {
    getUser: User
  }
`;

export default typeDefs;
