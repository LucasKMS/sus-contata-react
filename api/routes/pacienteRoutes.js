const express = require('express');
const router = express.Router();
const { createPaciente,  getPacienteById, updatePaciente, getPacienteByCPF } = require('../controllers/pacienteController');
const { cancelarAgendamento } = require('../controllers/agendamentoController')

// Rota para obter um paciente por CPF
router.get('/pacientes/cpf/:cpf', getPacienteByCPF);

// Rota para criar um paciente
router.post('/pacientes', createPaciente);

// Rota para obter um paciente por ID
router.get('/pacientes/:id', getPacienteById);

// Rota para atualizar um paciente por CPF
router.put('/pacientes/:cpf', updatePaciente);

// Rota para cancelar um agendamento
router.patch('/agendamentos/cancelar/:id', cancelarAgendamento)

module.exports = router;
