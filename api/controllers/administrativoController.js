// controllers/administrativoController.js

const Administrativo = require('../classes/Administrativo');
const Agendamento = require('../interfaces/Agendamento');

// Função para criar um registro administrativo
const createAdministrativo = async (req, res) => {
    try {
        const administrativo = new Administrativo(req.body);
        const savedAdministrativo = await administrativo.save();
        res.status(201).json(savedAdministrativo);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar o administrativo', error: error.message });
    }
};

// Função para obter todos os registros administrativos
const getAllAdministrativos = async (req, res) => {
    try {
        const administrativos = await Administrativo.getAll();
        res.status(200).json(administrativos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a listagem dos registros administrativos', error: error.message });
    }
};

// Função para obter um registro administrativo por ID
const getAdministrativoByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const administrativo = await Administrativo.findByEmail(email);
        if (!administrativo) {
            return res.status(404).json({ message: 'Registro administrativo não encontrado' });
        }
        res.status(200).json(administrativo);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter o registro administrativo', error: error.message });
    }
};

// Função para atualizar um registro administrativo por ID
const updateAdministrativo = async (req, res) => {
    const { email } = req.params;
    try {
        const administrativo = await Administrativo.findByEmail(email);
        if (!administrativo) {
            return res.status(404).json({ message: 'Registro administrativo não encontrado para atualização' });
        }

        const updatedAdministrativo = await administrativo.update(req.body);
        res.status(200).json(updatedAdministrativo);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o registro administrativo', error: error.message });
    }
};

// Função para deletar um registro administrativo por ID
const deleteAdministrativo = async (req, res) => {
    const { email } = req.params;
    try {
        const administrativo = await Administrativo.findByEmail(email);
        if (!administrativo) {
            return res.status(404).json({ message: 'Registro administrativo não encontrado para exclusão' });
        }

        await administrativo.delete();
        res.status(200).json({ message: 'Registro administrativo excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o registro administrativo', error: error.message });
    }
};

// Função para obter todos os registros de pacientes
const getAllPacientes = async (req, res) => {
    try {
        const pacientes = await Administrativo.getAllPacientes();
        console.log('Pacientes retornados pelo controlador:', pacientes);
        res.status(200).json(pacientes);
    } catch (error) {
        console.error('Erro ao obter a listagem dos pacientes no controlador:', error);
        res.status(500).json({ message: 'Erro ao obter a listagem dos pacientes', error: error.message });
    }
};

// Função para obter todos os registros de pacientes
const getPacienteByCpf = async (req, res) => {
    const { cpf } = req.params
    try {
        const paciente = await Administrativo.getPacienteByCpf(cpf);
        console.log('Paciente retornados pelo controlador:', paciente);
        res.status(200).json(paciente);
    } catch (error) {
        console.error('Erro ao obter a listagem do paciente no controlador:', error);
        res.status(500).json({ message: 'Erro ao obter a listagem do paciente', error: error.message });
    }
};

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
        const agendamentoData = await Agendamento.findById(id);
        if (!agendamentoData) {
            return res.status(404).json({ message: 'Agendamento não encontrado para exclusão' });
        }

        console.log('Agendamento Data:', agendamentoData);

        // Cria a instância corretamente com o ID
        const agendamentoInstance = new Agendamento({ _id: id, ...agendamentoData.toObject() });
        console.log('Agendamento Instance:', agendamentoInstance);

        if (typeof agendamentoInstance.delete !== 'function') {
            throw new Error('agendamentoInstance.delete não é uma função');
        }

        await agendamentoInstance.delete();
        res.status(200).json({ message: 'Agendamento excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o agendamento', error: error.message });
    }
};

module.exports = {
    createAdministrativo,
    getAllAdministrativos,
    getAdministrativoByEmail,
    updateAdministrativo,
    deleteAdministrativo,
    getAllPacientes,
    getPacienteByCpf,
    createAgendamento,
    getAgendamentos,
    getAgendamentoById,
    updateAgendamento,
    deleteAgendamento
};