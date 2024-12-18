const { verifyToken } = require("./authservices");
const { privateKey } = require("../config/config.dev.json");

const authMiddleware = async (req, res, next) => {
  const headerToken = req.header("authorization");
  try {
    console.log(headerToken);
    const splitToken = headerToken.split(" ");
    const token = verifyToken(splitToken[1], privateKey);
    console.log("token hehe", token);

    const currentTime = Math.floor(Date.now() / 1000);

    if (token.exp < currentTime) {
      return res.status(400).json({
        code: 401,
        status: "Expired token",
        payload: null,
      });
    }

    req.parsedToken = token;

    next();
  } catch (e) {
    console.log(e, "e dolo");

    if (e.name == "TokenExpiredError") {
      return res.status(401).json({
        code: 401,
        status: "Unauthorized",
        payload: "Token is expired",
      });
    }

    res.status(400).json({
      code: 401,
      status: "Unauthorized",
      payload: null,
    });
  }
};

module.exports = {
  authMiddleware,
};
