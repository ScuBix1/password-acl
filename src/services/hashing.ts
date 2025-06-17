// Ici dénissez les fonctions qui vont vous permettre de vérifier et générer des mots de passes sécurisés
import argon2 from 'argon2';

export const hashPassword = async (password: string): Promise<{ password: string, salt: string }> => {
  try {
    const hash = await argon2.hash(password);
    return { password: hash, salt: hash.slice(0, 32) };
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
    const isValid = await argon2.verify(hashedPassword, password + salt);
    console.log('isValid', isValid);
    return isValid;
  } catch (err) {
    console.error('Error verifying password:', err);
    throw err;
  }
};
