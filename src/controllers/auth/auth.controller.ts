import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";
import bcrypt from "bcrypt";
import { z } from "zod";
import jwt from "jsonwebtoken";

const signUpSchema = z.object({
  fullname: z
    .string()
    .min(2)
    .regex(/^[a-zA-Z\s]+$/, "No numbers or special characters"),
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .regex(/^(?=.*[A-Z])(?=.*[0-9]).+$/),
  role: z.enum(["customer", "admin"]),
});

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["customer", "admin"]),
});

const createJwtToken = (payload: {
  userId: string;
  email: string;
  role: string;
}) => {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "14d" });
};

const signUpController: RequestHandler = async (req, res) => {
  try {
    // Validate input
    const parsed = signUpSchema.safeParse(req.body);
    if (!parsed.success) {
      return createResponse(
        res,
        400,
        null,
        "Invalid input: " + parsed.error.message
      );
    }

    const { fullname, email, password, role } = parsed.data;

    // Check if email exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return createResponse(res, 400, null, "Email already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword,
        role,
      },
    });

    // Generate JWT
    const token = createJwtToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Set cookie
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 14 * 24 * 60 * 60 * 1000,
    });

    return createResponse(
      res,
      201,
      { id: user.id, fullname, email, role },
      null,
      "Sign-up successful"
    );
  } catch (error: any) {
    return createResponse(
      res,
      500,
      null,
      error.message || "Internal server error"
    );
  }
};

const AuthMessages = {
  USER_NOT_FOUND: "No account found with this email",
  INVALID_PASSWORD: "Incorrect password",
  EMAIL_EXISTS: "Email already exists",
  INVALID_ROLE: "Invalid role for this user",
  AUTH_ERROR: "Authentication failed. Please try again later.",
  NETWORK_ERROR: "Network error. Please check your connection.",
};

const signInController: RequestHandler = async (req, res) => {
  try {
    // Validate input
    const parsed = signInSchema.safeParse(req.body);
    if (!parsed.success) {
      return createResponse(
        res,
        400,
        null,
        "Invalid input: " + parsed.error.message
      );
    }

    const { email, password, role } = parsed.data;

    // Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return createResponse(res, 401, null, AuthMessages.USER_NOT_FOUND);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return createResponse(res, 401, null, AuthMessages.INVALID_PASSWORD);
    }

    // Validate role
    if (user.role !== role) {
      return createResponse(res, 403, null, "Invalid role for this user");
    }

    // Generate JWT
    const token = createJwtToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Set cookie
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 14 * 24 * 60 * 60 * 1000, // 2 weeks
    });

    return createResponse(
      res,
      200,
      { id: user.id, fullName: user.fullname, email, role },
      null,
      "Sign-in successful"
    );
  } catch (error: any) {
    return createResponse(
      res,
      500,
      null,
      error.message || "Internal server error"
    );
  }
};

const signOutController: RequestHandler = async (req, res) => {
  try {
    // Clear the HTTP-only auth token cookie
    let token = req.cookies.auth_token;

    res.clearCookie("auth_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    // Clear the client-readable session data cookie
    res.clearCookie("session_data", {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return createResponse(
      res,
      200,
      { success: true },
      null,
      "Sign-out successful"
    );
  } catch (error: any) {
    console.error("Sign-out error:", error);
    return createResponse(
      res,
      500,
      null,
      error.message || "Failed to sign out"
    );
  }
};

export const sessionController: RequestHandler = async (req, res) => {
  try {
    let token = req.cookies.auth_token;
    if (!token && req.headers.cookie) {
      const cookies = req.headers.cookie.split(";").map((c) => c.trim());
      const authCookie = cookies.find((c) => c.startsWith("auth_token="));
      token = authCookie?.split("=")[1];
    }

    if (!token) {
      return createResponse(
        res,
        200,
        { user: null },
        null,
        "No session token found"
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, fullname: true, role: true },
    });

    if (!user) {
      res.clearCookie("auth_token");
      return createResponse(res, 200, { user: null }, "User not found");
    }

    return createResponse(res, 200, { user }, null, "Session valid");
  } catch (error) {
    res.clearCookie("auth_token");
    return createResponse(res, 200, { user: null }, "Invalid session");
  }
};

export const authController = {
  signUpController,
  signInController,
  signOutController,
  sessionController,
};
