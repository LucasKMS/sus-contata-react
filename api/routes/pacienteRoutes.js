const express = require('express');
const router = express.Router();
const { createPaciente, getAllPacientes, getPacienteById, updatePaciente, deletePaciente, getPacienteByCPF } = require('../controllers/pacienteController');

// Rota para criar um paciente
router.post('/pacientes', createPaciente);

// Rota para obter todos os pacientes
router.get('/pacientes', getAllPacientes);

// Rota para obter um paciente por ID
router.get('/pacientes/:id', getPacienteById);

// Rota para obter um paciente por CPF
router.get('/pacientes/cpf/:cpf', getPacienteByCPF);

// Rota para atualizar um paciente por CPF
router.put('/pacientes/:cpf', updatePaciente);

// Rota para deletar um paciente por CPF
router.delete('/pacientes/:cpf', deletePaciente);

module.exports = router;
