const express = require('express');
const router = express.Router();
const { createAdministrativo, getAllAdministrativos, getAdministrativoByEmail, updateAdministrativo, deleteAdministrativo } = require('../controllers/administrativoController');

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

module.exports = router;
