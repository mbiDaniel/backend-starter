import { createHash } from 'crypto';

export const MAILDEV_INCOMING_USER = "danny"
export const MAILDEV_INCOMING_PASS="pass1234"
export const JWT_SECRET = 'IIededeasasASSK';
export const MONGODB_URL = 'mongodb://localhost:27017/backend-starter';
export const ENCRYPTION_KEY = createHash('sha512')
  .update('LATi88ShjT7_', 'utf-8')
  .digest('hex')
  .substring(0, 32);
export const ENCRYPTION_IV = createHash('sha512')
  .update('Pas123', 'utf-8')
  .digest('hex')
  .substring(0, 16);

export const SALT_ROUNDS = 10
