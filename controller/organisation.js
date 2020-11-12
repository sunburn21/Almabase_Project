/**
 * @file
 * @author Sunny
 *
 * controllers of endpoints
 */

const { getTopNRepos, getTopMCommittees } = require("./helper/githubcall");

/**
 * Middleware that sets the orgName parameter
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @param {string} orgName
 */
exports.getOrgName = (req, res, next, orgName) => {
  req.orgName = orgName;
  next();
};

/**
 * Middleware that sets n parameter
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @param {number} n
 */
exports.getN = (req, res, next, n) => {
  req.n = n;
  next();
};

/**
 * Middleware that sets m parameter
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @param {number} m
 */
exports.getM = (req, res, next, m) => {
  req.m = m;
  next();
};

/**
 * controller method
 *
 * return top n repostories and its top m contributors
 *
 * @param {*} req
 * @param {*} res
 */
exports.getTopNRepoMContrib = async (req, res) => {
  var { orgName, n, m } = req.query;

  const topNrepos = await getTopNRepos(orgName, n);
  var nrepoMcontrib = [];
  for (repo in topNrepos) {
    var repoName = topNrepos[repo];
    const topMcommittees = await getTopMCommittees(repoName, orgName, m);
    nrepoMcontrib.push(topMcommittees);
  }
  if (nrepoMcontrib.length === 0) {
    return res.status(404).send({
      error: "Error Occurred",
    });
  }
  return res.json(nrepoMcontrib);
};
