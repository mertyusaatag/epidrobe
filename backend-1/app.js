const express = require("express");
const cors = require("cors");
const helmet = require("helmet")
const config = require("./config/index")
const loaders = require("./loaders");
const {seriesRoutes} =require("./routes/index");

config();
loaders();

const app = express();
app.set('view engine','ejs')
app.use(cors({ credentials: true }))
app.use(express.json());
app.use(helmet());

// API endpoints
app.listen(process.env.APP_PORT, function () {
    console.log(">> Server is running (Port " + process.env.APP_PORT + ")");
    app.use("/getlastest", seriesRoutes);
    app.use("/getpopular",seriesRoutes);
    app.use("/:tv_id",seriesRoutes)
    app.use('/',seriesRoutes)
    
  });
  