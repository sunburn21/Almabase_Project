const { default: Axios } = require("axios");
const {GITHUB_BASE_API} = require("../../common/config");

const instance = Axios.create({
  baseURL: GITHUB_BASE_API,
  headers: { "Content-Type": "application/json" },
});

exports.getTopNRepos = async (orgName, n) => {
  try {
    var response = await instance.get(`/orgs/${orgName}/repos`);
    response = response.data;
    response.sort(function (a, b) {
      return b.forks_count - a.forks_count;
    });

    topRepos = [];

    n = response.length < n ? response.length : n;

    for (var i = 0; i < n; i++) {
      topRepos.push(response[i].name);
    }
    return topRepos;
  } catch (error) {
    console.log(error);
  }
};

exports.getTopMCommittees = async (repoName, orgName, m) => {
  try {
    var response = await instance.get(
      `repos/${orgName}/${repoName}/contributors`
    );
    response = response.data;
    response.sort(function (a, b) {
      return b.contributions - a.contributions;
    });
    topContributors = [];
    m = response.length < m ? response.length : m;
    for (var i = 0; i < m; i++) {
      topContributors.push({
        name: response[i].login,
        avatar: response[i].avatar_url,
        url: response[i].html_url,
        commits: response[i].contributions,
      });
    }
    return { repo: repoName, contributors: topContributors };
  } catch (error) {
    console.log(error);
  }
};
