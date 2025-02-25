import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

interface JwtPayload {
  _id: string;
  username: string;
  email: string;
}

const secretKey = process.env.JWT_SECRET_KEY || 'default_secret';

/**
 * Function to authenticate user using JWT in Apollo Server context
 */
export const getUserFromToken = (token: string | undefined): JwtPayload | null => {
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

/**
 * Function to sign a new JWT token
 */
export const signToken = (username: string, email: string, _id: string): string => {
  const payload = { username, email, _id };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};