const axios = require('axios');

const fetchUnidades = async () => {
    try {
        const response = await axios.get('https://trabalho1-rest-no-sql.vercel.app/api/unidades');
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar unidades: ' + error.message);
    }
};

module.exports = { fetchUnidades };
