const Paciente = require('../classes/Paciente');

// Função para criar um paciente
const createPaciente = async (req, res) => {
    try {
        const paciente = new Paciente(req.body);
        const savedPaciente = await paciente.save();
        res.status(201).json(savedPaciente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar o paciente', error: error.message });
    }
};

// Função para obter todos os pacientes
const getAllPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.getAll();
        res.status(200).json(pacientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a listagem dos pacientes', error: error.message });
    }
};

// Função para obter um paciente por ID
const getPacienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const paciente = await Paciente.findById(id);
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter o paciente', error: error.message });
    }
};

// Função para obter um paciente por CPF
const getPacienteByCPF = async (req, res) => {
    const { cpf } = req.params;
    try {
        const paciente = await Paciente.findByCpf(cpf);
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter o paciente', error: error.message });
    }
};

// Função para atualizar um paciente por ID
const updatePaciente = async (req, res) => {
    const { cpf } = req.params;
    try {
        const paciente = await Paciente.findByCpf(cpf);
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente não encontrado para atualização' });
        }

        const updatedPaciente = await paciente.update(req.body);
        res.status(200).json(updatedPaciente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o paciente', error: error.message });
    }
};

// Função para deletar um paciente por ID
const deletePaciente = async (req, res) => {
    const { cpf } = req.params;
    try {
        const paciente = await Paciente.findByCpf(cpf);
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente não encontrado para exclusão' });
        }

        await paciente.delete();
        res.status(200).json({ message: 'Paciente excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o paciente', error: error.message });
    }
};

module.exports = {
    createPaciente,
    getAllPacientes,
    getPacienteById,
    updatePaciente,
    deletePaciente,
    getPacienteByCPF
};
