const mongoose = require("mongoose");

const config = require("../config/config");

const logger = require('../logging/logger')

mongoose.set("strictQuery", false);

exports.connectToDB = () => {
  mongoose.connect(config.MONGOURL);

  mongoose.connection.on("connected", () => {
    logger.info("Connected to Database");
  });
};
