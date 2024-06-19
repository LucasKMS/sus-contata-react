// controllers/agendamentoController.js

const Agendamento = require('../classes/Agendamento');

// Função para criar um agendamento
const createAgendamento = async (req, res) => {
    try {
        const agendamento = new Agendamento(req.body);
        const savedAgendamento = await agendamento.save();
        res.status(201).json(savedAgendamento);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar o agendamento', error: error.message });
    }
};

// Função para obter todos os agendamentos
const getAgendamentos = async (req, res) => {
    try {
        const agendamentos = await Agendamento.getAll();
        res.status(200).json(agendamentos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a listagem dos agendamentos', error: error.message });
    }
};

// Função para obter um agendamento por ID
const getAgendamentoById = async (req, res) => {
    const { id } = req.params;
    try {
        const agendamento = await Agendamento.findById(id);
        if (!agendamento) {
            return res.status(404).json({ message: 'Agendamento não encontrado' });
        }
        res.status(200).json(agendamento);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter o agendamento', error: error.message });
    }
};

// Função para atualizar um agendamento por ID
const updateAgendamento = async (req, res) => {
    const { id } = req.params;
    try {
        const agendamento = await Agendamento.findById(id);
        if (!agendamento) {
            return res.status(404).json({ message: 'Agendamento não encontrado para atualização' });
        }

        const updatedAgendamento = await agendamento.update(req.body);
        res.status(200).json(updatedAgendamento);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o agendamento', error: error.message });
    }
};

// Função para deletar um agendamento por ID
const deleteAgendamento = async (req, res) => {
    const { id } = req.params;
    try {
        const agendamento = await Agendamento.findById(id);
        if (!agendamento) {
            return res.status(404).json({ message: 'Agendamento não encontrado para exclusão' });
        }

        await agendamento.delete();
        res.status(200).json({ message: 'Agendamento excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o agendamento', error: error.message });
    }
};

module.exports = {
    createAgendamento,
    getAgendamentos,
    getAgendamentoById,
    updateAgendamento,
    deleteAgendamento
};
