/**
 * @file 
 * @author Sunny
 * 
 * endpoints of REST API
 */

const express = require(`express`);
const router = express.Router();
const {
  getOrgName,
  getN,
  getM,
  getTopNRepoMContrib,
} = require("../controller/organisation");

/**
 * route parameters
 */
router.param("orgName", getOrgName);
router.param("n", getN);
router.param("m", getM);

/**
 * endpoint
 */
router.get("/org", getTopNRepoMContrib);


module.exports = router;
