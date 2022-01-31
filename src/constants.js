const github_data = {
  token: "YOUR_GITHUB_ACCESS_TOKEN",
};

export const headersForAuth = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + github_data["token"],
};

export const baseUrl = "https://api.github.com/user";
