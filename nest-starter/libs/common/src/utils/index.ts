import { ENCRYPTION_IV, ENCRYPTION_KEY, SALT_ROUNDS } from '@app/config';
import { createCipheriv, createDecipheriv } from 'crypto';
import * as bcrypt from 'bcrypt';

export function encryptText(text: string): string {
  let cipher = createCipheriv('aes-256-cbc', ENCRYPTION_KEY, ENCRYPTION_IV);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('base64');
}

export function decryptText(text: string) {
  let encryptedText = Buffer.from(text, 'base64');
  let decipher = createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, ENCRYPTION_IV);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

export async function hashString(text: string) {
  const hash = await bcrypt.hash(text, SALT_ROUNDS);
  return hash;
}

export async function compareHash(text: string, hash: string) {
    const isMatch = await bcrypt.compare(text, hash);
    return isMatch
  }