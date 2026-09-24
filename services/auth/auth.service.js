import { prisma } from "@/lib/prisma";
import { hashPassword, comparePassword } from "@/lib/bcrypt";
import { generateToken } from "@/lib/jwt";
import { registerSchema } from "@/validations/auth.validation";
import { loginSchema } from "@/validations/auth.validation";
import validator from "validator";
import xss from "xss";

// Register Services
export const registerService = async (body) => {
  console.log("SERVICE BODY:", body);

  // VALIDATE INPUT
  const validatedData = registerSchema.parse(body);

  // SANITIZE INPUTS
  const cleanData = {
    email: validator.normalizeEmail(validatedData.email),
    password: validatedData.password,
    fullName: xss(validatedData.fullName),
    phone: validator.escape(validatedData.phone),
    role: validatedData.role,
  };

  // CHECK EXISTING USER
  const existingUser = await prisma.user.findUnique({
    where: {
      email: cleanData.email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // HASH PASSWORD
  const hashedPassword = await hashPassword(cleanData.password);

  // CREATE USER
  const user = await prisma.user.create({
    data: {
      email: cleanData.email,

      password: hashedPassword,

      role: cleanData.role,

      profile: {
        create: {
          fullName: cleanData.fullName,

          phone: cleanData.phone,
        },
      },
    },

    include: {
      profile: true,
    },
  });

  // GENERATE TOKEN
  const token = generateToken({
    id: user.id,
    role: user.role,
  });

  // REMOVE PASSWORD
  delete user.password;

  return {
    user,
    token,
  };
};

// Login Services
export const loginService = async (body) => {

  // VALIDATE INPUT
  const validatedData = loginSchema.parse(body);
  // console.log("SERVICE VALIDATED DATA:", validatedData);

  // SANITIZE INPUT
  const cleanData = {
    email: validator.normalizeEmail(validatedData.email),
    password: validatedData.password,
  };

  // console.log("SERVICE CLEAN DATA:", cleanData);



  // FIND USER
  const user = await prisma.user.findUnique({
    where: {
      email: cleanData.email,
    },

    include: {
      profile: true,
    },
  });

  // console.log("SERVICE USER:", user);

  // CHECK USER
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // CHECK PASSWORD
  const isPasswordValid = await comparePassword(
    cleanData.password,
    user.password,
  );

  // console.log("SERVICE PASSWORD VALID:", isPasswordValid);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // GENERATE TOKEN
  const token = generateToken({
    id: user.id,
    role: user.role,
  });
  // console.log("SERVICE TOKEN:", token);

  // REMOVE PASSWORD
  delete user.password;

  return {
    user,
    token,
  };
};
