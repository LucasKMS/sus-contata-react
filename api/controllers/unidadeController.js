const Unidade = require('../classes/Unidade');

// Função para criar uma unidade
const createUnidade = async (req, res) => {
    try {
        const unidade = new Unidade(req.body);
        const savedUnidade = await unidade.save();
        res.status(201).json(savedUnidade);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar a unidade', error: error.message });
    }
};

// Função para obter todas as unidades
const getAllUnidades = async (req, res) => {
    try {
        const unidades = await Unidade.getAll();
        res.status(200).json(unidades);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a listagem das unidades', error: error.message });
    }
};

// Função para obter uma unidade por ID
const getUnidadeById = async (req, res) => {
    const { id } = req.params;
    try {
        const unidade = await Unidade.findById(id);
        if (!unidade) {
            return res.status(404).json({ message: 'Unidade não encontrada' });
        }
        res.status(200).json(unidade);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a unidade', error: error.message });
    }
};

// Função para atualizar uma unidade por ID
const updateUnidade = async (req, res) => {
    const { id } = req.params;
    try {
        const unidade = await Unidade.findById(id);
        if (!unidade) {
            return res.status(404).json({ message: 'Unidade não encontrada para atualização' });
        }

        const updatedUnidade = await unidade.update(req.body);
        res.status(200).json(updatedUnidade);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar a unidade', error: error.message });
    }
};

// Função para deletar uma unidade por ID
const deleteUnidade = async (req, res) => {
    const { id } = req.params;
    try {
        const unidade = await Unidade.findById(id);
        if (!unidade) {
            return res.status(404).json({ message: 'Unidade não encontrada para exclusão' });
        }

        await unidade.delete();
        res.status(200).json({ message: 'Unidade excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir a unidade', error: error.message });
    }
};

module.exports = {
    createUnidade,
    getAllUnidades,
    getUnidadeById,
    updateUnidade,
    deleteUnidade
};
