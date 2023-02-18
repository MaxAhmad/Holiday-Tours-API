require("dotenv").config();

module.exports = {
  MONGOURL: process.env.MONGOURL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_COOKIES_EXPIRES_IN: process.env.JWT_COOKIES_EXPIRES_IN,
};
