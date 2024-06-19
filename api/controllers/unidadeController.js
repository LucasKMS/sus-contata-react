const { fetchUnidades } = require('../services/unidadeService');

const getUnidades = async (req, res) => {
    try {
        const unidades = await fetchUnidades();

        // Filtra as propriedades necessárias
        const unidadesFiltradas = unidades.map(unidade => ({
            nomeUnidade: unidade.nomeUnidade,
            cep: unidade.cep,
            endereco: unidade.endereco
        }));

        res.status(200).json(unidadesFiltradas);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar unidades', error: error.message });
    }
};

module.exports = { getUnidades };
