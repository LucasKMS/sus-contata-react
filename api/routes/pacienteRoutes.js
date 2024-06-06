const express = require('express');
const router = express.Router();
const { createPaciente, getAllPacientes, getPacienteById, deletePacienteById, getPacienteByCpf, updatePacienteByCpf, deletePacienteByCpf } = require('../controllers/pacienteController');

router.post('/pacientes', createPaciente);

router.get('/pacientes', getAllPacientes);

router.get('/pacientes/id/:id', getPacienteById);

router.get('/pacientes/cpf/:cpf', getPacienteByCpf);

router.put('/pacientes/:cpf', updatePacienteByCpf);

router.delete('/pacientes/:cpf', deletePacienteByCpf);

module.exports = router;
