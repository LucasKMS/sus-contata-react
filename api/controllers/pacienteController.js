const { Paciente } = require('../classes/Paciente');

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

// Função para consultar agendamentos de um paciente específico
const consultarAgendamentos = async (req, res) => {
    const { cpf } = req.params;
    try {
        const paciente = await Paciente.findByCpf(cpf);
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }
        const agendamentos = await paciente.consultarAgendamentos();
        res.status(200).json(agendamentos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao consultar agendamentos', error: error.message });
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

// Função para atualizar um paciente por CPF
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

const cancelarAgendamento = async (req, res) => {
    const { id } = req.params;
    const { cpf } = req.body; // Supondo que o CPF do paciente vem no corpo da requisição

    try {
        const paciente = await Paciente.findByCpf(cpf);
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }

        const agendamentoCancelado = await paciente.cancelarAgendamento(id);
        res.status(200).json(agendamentoCancelado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cancelar o agendamento', error: error.message });
    }
};


module.exports = {
    createPaciente,
    consultarAgendamentos,
    getPacienteById,
    updatePaciente,
    getPacienteByCPF,
    cancelarAgendamento
};