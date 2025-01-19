import session from 'express-session';

declare global {
  namespace Express {
    interface SessionData {
      user?: { username: string }; // Adding user to session data
    }
    interface Request {
      session: session.Session & Partial<session.SessionData>;
    }
  }
}
