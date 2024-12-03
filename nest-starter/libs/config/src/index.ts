import { createHash } from "crypto";

export const MAILDEV_INCOMING_USER = "danny";
export const MAILDEV_INCOMING_PASS = "pass1234";
export const JWT_SECRET = "IIededeasasASSK";
export const SMTP_HOST = "smtp.sendgrid.net";
export const SMTP_PORT = 465;
export const SMTP_USER = "apikey";
export const SMTP_PASS =
  "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";
export const MAIL_FROM_USER = "mbidaniel01@gmail.com";
export const MONGODB_URL = "mongodb://localhost:27017/backend-starter";
export const ENCRYPTION_KEY = createHash("sha512")
  .update("LATi88ShjT7_", "utf-8")
  .digest("hex")
  .substring(0, 32);
export const ENCRYPTION_IV = createHash("sha512")
  .update("Pas123", "utf-8")
  .digest("hex")
  .substring(0, 16);

export const SALT_ROUNDS = 10;
export const PORT = 8000;
