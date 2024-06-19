const express = require('express');
const router = express.Router();
const {
    createAdministrativo,
    getAllAdministrativos,
    getAdministrativoByEmail,
    updateAdministrativo,
    deleteAdministrativo,
    getAllPacientes,
    getPacienteByCpf
} = require('../controllers/administrativoController');

const {
    createAgendamento,
    getAgendamentos,
    getAgendamentoById,
    updateAgendamento,
    deleteAgendamento
} = require('../controllers/agendamentoController');

// Rota para criar um administrativo
router.post('/administrativo/', createAdministrativo);

// Rota para obter todos os administrativos
router.get('/administrativo/', getAllAdministrativos);

// Rota para obter um administrativo por ID
router.get('/administrativo/:email', getAdministrativoByEmail);

// Rota para atualizar um administrativo por ID
router.put('/administrativo/:id', updateAdministrativo);

// Rota para deletar um administrativo por ID
router.delete('/administrativo/:email', deleteAdministrativo);

// Rota para listar todos os pacientes
router.get('/adm/pacientes', getAllPacientes)

// Rota para listar o paciente pelo CPF
router.get('/adm/pacientes/cpf/:cpf', getPacienteByCpf)

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