exports.SERVER_URL =
  process.env.NODE_ENV == "production"
    ? ""
    : "http://localhost:4000";

exports.GITHUB_BASE_API = "https://api.github.com";
