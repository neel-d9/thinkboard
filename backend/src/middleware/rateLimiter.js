import { rateLimiter } from "../config/redis.js";

const rateLimiterMiddleware = async (req, res, next) => {
  if (!req.path.startsWith("/api")) {
    return next();
  }

  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(429)
      .json({ message: "Too many requests, please try again later" });
  }
};

export default rateLimiterMiddleware;
