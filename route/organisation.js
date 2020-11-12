const express = require(`express`);
const router = express.Router();
const {
  getOrgName,
  getN,
  getM,
  getTopNRepoMContrib,
} = require("../controller/organisation");

//params
router.param("orgName", getOrgName);
router.param("n", getN);
router.param("m", getM);

//routes;
router.get("/org", getTopNRepoMContrib);
module.exports = router;
