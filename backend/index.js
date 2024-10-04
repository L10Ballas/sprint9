const express = require('express');
const cors = require('cors'); // Para permitir CORS
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Ajuste o caminho, se necessário

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json()); // Para analisar JSON

// Rotas
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});