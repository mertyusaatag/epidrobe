const express = require("express");
const cors = require("cors");
const helmet = require("helmet")
const config = require("./config/index")
const loaders = require("./loaders");

config();
loaders();

const app = express();
app.use(cors({ credentials: true }))
app.use(express.json());
app.use(helmet());

// API endpoints
app.listen(process.env.APP_PORT, function () {
    console.log(">> Server is running (Port " + process.env.APP_PORT + ")");
  });
  