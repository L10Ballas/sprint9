const express = require('express');
const router = express.Router();
const db = require('../db/database'); // Ajuste o caminho, se necessário

// Endpoint para registro
router.post('/register', (req, res) => {
  const { email, password, tag } = req.body;

  // Insira aqui a lógica para armazenar o usuário no banco de dados
  const sql = 'INSERT INTO users (email, password, tag) VALUES (?, ?, ?)';
  db.run(sql, [email, password, tag], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

// Endpoint para login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Insira aqui a lógica para autenticar o usuário
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.get(sql, [email, password], (err, row) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (row) {
      res.json({ user: row });
    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  });
});

module.exports = router;
