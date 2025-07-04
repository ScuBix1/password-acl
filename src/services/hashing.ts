// Ici dénissez les fonctions qui vont vous permettre de vérifier et générer des mots de passes sécurisés
import argon2 from 'argon2';
import crypto from 'crypto';

export const hashPassword = async (
  password: string
): Promise<{ password: string; salt: string }> => {
  try {
    const salt = crypto.randomBytes(32).toString('hex');
    const hash = await argon2.hash(password + salt);
    return { password: hash, salt };
  } catch (err) {
    console.error('Error hashing password:', err);
    throw err;
  }
};

export const verifyPassword = async (
  password: string,
  salt: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    return argon2.verify(hashedPassword, password + salt);
  } catch (err) {
    console.error('Error verifying password:', err);
    throw err;
  }
};
