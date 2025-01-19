import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = 3000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware setup
app.use(session({
  secret: process.env['SESSION_SECRET'],
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env['NODE_ENV'] === 'production' || process.env['HTTPS_ENABLED'] === 'true',
    httpOnly: true, // Prevents client-side JS access
    maxAge: 24 * 60 * 60 * 1000, // Session expires in 24 hours
    sameSite: (process.env['NODE_ENV'] === 'production' || process.env['HTTPS_ENABLED'] === 'true') ? 'strict' : 'lax',
  },
  name: 'adminSession', // Add unique session name
  unset: 'destroy' // Ensure session is fully destroyed on logout
}));

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password123') {
    req.session.user = { username }; // Set user in session
    res.redirect('/dashboard');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Dashboard Route (Authenticated)
app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Hello, ${req.session.user.username}! Welcome to your dashboard.`);
  } else {
    res.status(401).send('You must log in first.');
  }
});

// Logout Route
app.get('/logout', (req, res) => {
  req.session.destroy((err: any) => {
    if (err) {
      return res.status(500).send('Failed to destroy session');
    }
    // After successfully destroying the session, return a response
    return res.redirect('/login');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:4200`);
});
