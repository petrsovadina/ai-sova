// lib/security/encryption.ts

import crypto from 'crypto';

// Define the encryption algorithm and key length
const algorithm = 'aes-256-cbc';
const keyLength = 32; // 256 bits
const ivLength = 16; // 128 bits

// Generate a random encryption key
function generateKey(): Buffer {
  return crypto.randomBytes(keyLength);
}

// Generate a random initialization vector
function generateIV(): Buffer {
  return crypto.randomBytes(ivLength);
}

// Encrypt data using AES-256-CBC
export function encrypt(data: string, key: Buffer): { iv: Buffer; encryptedData: string } {
  const iv = generateIV();
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { iv, encryptedData: encrypted };
}

// Decrypt data using AES-256-CBC
export function decrypt(encryptedData: string, key: Buffer, iv: Buffer): string {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Example usage
const key = generateKey();
const data = 'Sensitive data that needs encryption';
const { iv, encryptedData } = encrypt(data, key);
const decryptedData = decrypt(encryptedData, key, iv);

console.log('Original Data:', data);
console.log('Encrypted Data:', encryptedData);
console.log('Decrypted Data:', decryptedData);

