const express = require('express');
const router = express.Router();
const { getUnidades } = require('../controllers/unidadeController');

router.get('/unidades', getUnidades);

module.exports = router;
