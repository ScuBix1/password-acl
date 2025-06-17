import { Hono } from 'hono';
import { authMiddleware } from '../middleware/auth.js';
import { ac } from '../services/accessControl.js';

const route = new Hono();

// Ajoutez vous routes d'api ici
route.get('/profile/:id', authMiddleware, async (c) => {
  if (ac.can('user').readOwn('profile').granted) {
    return c.text('chaine de caractere');
  }
});

export default route;
