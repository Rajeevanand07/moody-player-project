require("dotenv").config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Read env vars
const ADMIN_USER = process.env.ADMIN_ID;
const ADMIN_PASS = process.env.ADMIN_PASS;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

router.get('/login', (req, res) => {
  res.json({ message: 'Admin login' });
});

// --- Admin login ---
router.post('/login', async (req, res) => {
  const { user, pass } = req.body;
  
  if (!user || !pass) return res.status(400).json({ error: 'Missing credentials' });

  if (user !== ADMIN_USER) return res.status(401).json({ error: 'Invalid user or pass hmmm...' });
  console.log("user", user);
  console.log("pass", pass);
  
  const valid = await bcrypt.compare(pass, ADMIN_PASS);
  if (!valid) return res.status(401).json({ error: 'Invalid user or pass after bcrypt' });

  const token = jwt.sign({ role: 'admin', user: ADMIN_USER }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

  res.json({ token });
});

module.exports = router;
