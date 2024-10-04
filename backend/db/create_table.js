const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Conecta ao banco de dados SQLite
const dbPath = path.join(__dirname, 'database.db'); // ajuste o nome do seu arquivo de banco de dados, se necessário
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

// Cria a tabela users
const sql = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  tag TEXT NOT NULL
);`;

db.run(sql, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Tabela users criada ou já existe.');
  }
});

// Fecha a conexão com o banco de dados
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
});