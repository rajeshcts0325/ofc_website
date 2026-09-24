import bcrypt from "bcryptjs";

// HASH PASSWORD
export const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

// COMPARE PASSWORD
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
