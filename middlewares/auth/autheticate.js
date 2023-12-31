const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.headers.access_token;
    if (!token) {
        return res.status(400).json({message: "Vui lòng đăng nhập!" });
      }
      try {
        const data = jwt.verify(token, "haulah");
        req.username = data.username;
        return next();
      } catch {
        return res.status(401).json({message: "Token đã hết hạn!" });
      }
}

const authenticateRefreshToken = (req, res, next) => {
  const token = req.headers.refresh_token;
  if (!token) {
      return res.status(400).json({message: "Vui lòng đăng nhập!" });
    }
    try {
      const data = jwt.verify(token, "haulah");
      req.username = data.username;
      return next();
    } catch {
      return res.status(401).json({message: "Token đã hết hạn!" });
    }
}

module.exports = {
    authenticate,
    authenticateRefreshToken
}