const { config } = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/pacienteRoutes"); // CommonJS

config();

// Criando uma instância do servidor Express
const app = express();

// Middleware para analisar JSON
app.use(express.json());

const { PORT, MONGODB_URI } = process.env;

// Conexão com o MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Conectado ao MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Erro na conexão com o MongoDB:', err);
});

// Definindo as rotas
app.use('/api', router);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
