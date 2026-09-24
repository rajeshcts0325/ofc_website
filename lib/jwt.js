import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";

// GENERATE TOKEN (Edge Middleware)
export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

// VERIFY TOKEN (Edge Middleware)
export const verifyEdgeToken = async (token) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const { payload } = await jwtVerify(token, secret);
  return payload;
};