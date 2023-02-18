const express = require("express");
const helmet = require('helmet');
const rateLimit = require('express-rate-limit')


const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
// Apply the rate limiting middleware to all requests
app.use(limiter)
app.use(helmet())


app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

//Middleware for Unhandled routes
app.all("*", async (req, res, next) => {
  const err = new Error(`cannot find ${req.originalUrl}`);
  err.status = "fail";
  err.statusCode = 404;

  next(err);
});

module.exports = app;
