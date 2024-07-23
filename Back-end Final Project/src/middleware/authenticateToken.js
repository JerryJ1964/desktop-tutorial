import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Access token not provided!" });
  }

  const secretKey = process.env.AUTH_SECRET_KEY || "your_secret_key";

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token!" });
    }

    req.user = user;
    next();
  });
};

export default authenticateToken;
