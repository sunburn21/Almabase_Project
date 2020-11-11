const { getTopNRepos, getTopMCommittees } = require("./helper/githubcall");

exports.getOrgName = (req, res, next, orgName) => {
  req.orgName = orgName;
  next();
};

exports.getN = (req, res, next, n) => {
  req.n = n;
  next();
};

exports.getM = (req, res, next, m) => {
  req.m = m;
  next();
};

exports.getTopNRepoMContrib = async (req, res, next) => {
  var orgName = req.orgName;
  var n = req.n;
  var m = req.m;

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
