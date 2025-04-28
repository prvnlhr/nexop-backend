import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";
import bcrypt from "bcrypt";
import { z } from "zod";

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

const AuthMessages = {
  USER_NOT_FOUND: "No account found with this email",
  INVALID_PASSWORD: "Incorrect password",
  EMAIL_EXISTS: "Email already exists",
  INVALID_ROLE: "Invalid role for this user",
  AUTH_ERROR: "Authentication failed. Please try again later.",
  NETWORK_ERROR: "Network error. Please check your connection.",
};

export const signUpController: RequestHandler = async (req, res) => {
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
      return createResponse(res, 400, null, AuthMessages.EMAIL_EXISTS);
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

    return createResponse(
      res,
      201,
      {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
      null,
      "Sign-up successful. Please sign in."
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

export const signInController: RequestHandler = async (req, res) => {
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

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return createResponse(res, 401, null, AuthMessages.INVALID_PASSWORD);
    }

    // Validate role
    if (user.role !== role) {
      return createResponse(res, 403, null, AuthMessages.INVALID_ROLE);
    }

    // Return user data (NextAuth will handle session creation)
    return createResponse(
      res,
      200,
      {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
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

export const signOutController: RequestHandler = async (req, res) => {
  try {
    // In NextAuth, sign-out is handled client-side
    return createResponse(
      res,
      200,
      { success: true },
      null,
      "Sign-out should be handled client-side via NextAuth"
    );
  } catch (error: any) {
    return createResponse(
      res,
      500,
      null,
      error.message || "Failed to process sign-out"
    );
  }
};

export const sessionController: RequestHandler = async (req, res) => {
  try {
    // With NextAuth, session is typically handled client-side
    // This endpoint may not be needed if using NextAuth's built-in session handling
    return createResponse(
      res,
      200,
      { user: null },
      null,
      "Session handling is managed by NextAuth client-side"
    );
  } catch (error: any) {
    return createResponse(
      res,
      500,
      null,
      error.message || "Failed to check session"
    );
  }
};

export const authController = {
  signUpController,
  signInController,
  signOutController,
  sessionController,
};
