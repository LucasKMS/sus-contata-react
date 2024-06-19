const express = require('express');
const axios = require('axios');
const router = express.Router();

// Rota para obter unidades
router.get('/unidades', async (req, res) => {
    try {
        const response = await axios.get('https://trabalho1-rest-no-sql.vercel.app/api/unidades');
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar unidades:', error);
        res.status(500).json({ message: 'Erro ao buscar unidades' });
    }
});

module.exports = router;
