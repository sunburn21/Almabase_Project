/**
 * @file
 * contains methods to make http calls to GITHUB API (hit limit 60 per hour)
 * methods return top repository and its top contributors of an organisation
 */

const { default: Axios } = require("axios");
const { GITHUB_BASE_API } = require("../../common/config");


/**
 * Axios instance to make http calls
 */
const instance = Axios.create({
  baseURL: GITHUB_BASE_API,
  headers: { "Content-Type": "application/json" },
});



/**
 * returns top n repositories of an organisation ordered by fork_count 
 * 
 * @param {string} orgName
 * @param {number} n
 * @returns {Array} topRepos
 */
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

/**
 * return top m contributors of a repository ordered by number of commits
 * 
 * @param {string} repoName
 * @param {string} orgName
 * @param {number} m
 * @returns {object} repoContributor
 */
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
    repoContributor = { repo: repoName, contributors: topContributors };

    return repoContributor;
  } catch (error) {
    console.log(error);
  }
};
