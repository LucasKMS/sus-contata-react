const express = require('express');
const router = express.Router();
const { getUnidades } = require('../controllers/unidadeController');

// Listar todas as unidades
router.get('/unidades', getUnidades);



module.exports = router;
