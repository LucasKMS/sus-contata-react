const express = require('express');
const router = express.Router();
const { createUnidade, getAllUnidades, getUnidadeById, updateUnidade, deleteUnidade } = require('../controllers/unidadeController');

// Rota para criar uma unidade
router.post('/unidade', createUnidade);

// Rota para obter todas as unidades
router.get('/unidade', getAllUnidades);

// Rota para obter uma unidade por ID
router.get('/unidade/:id', getUnidadeById);

// Rota para atualizar uma unidade por ID
router.put('/unidade/:id', updateUnidade);

// Rota para deletar uma unidade por ID
router.delete('/unidade/:id', deleteUnidade);

module.exports = router;
