// routes/agendamentoRoutes.js

const express = require('express');
const router = express.Router();
const {
    createAgendamento,
    getAgendamentos,
    getAgendamentoById,
    updateAgendamento,
    deleteAgendamento
} = require('../controllers/agendamentoController');

// Rota para criar um agendamento
router.post('/agendamentos', createAgendamento);

// Rota para obter todos os agendamentos
router.get('/agendamentos', getAgendamentos);

// Rota para obter um agendamento por ID
router.get('/agendamentos/:id', getAgendamentoById);

// Rota para atualizar um agendamento por ID
router.put('/agendamentos/:id', updateAgendamento);

// Rota para deletar um agendamento por ID
router.delete('/agendamentos/:id', deleteAgendamento);

module.exports = router;
