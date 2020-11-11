const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require('serverless-http');
const app = express();
const path = require("path");
const organisation = require("./route/organisation");

//middlewares
app.use(bodyParser.json());
app.use(cors());

//port
const port = process.env.PORT || 4000;

//static html
app.use(express.static("public"));

//routes
app.use("/api", organisation);

app.listen(port, () => {
  console.log(`app is running at:`);
  console.log(`http://localhost:${port}`);
});

