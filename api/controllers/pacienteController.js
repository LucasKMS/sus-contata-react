const Paciente = require('../classes/Paciente');

const createPaciente = async (req, res) => {
    try {
        const { cpf, nomeCompleto, dataNascimento, endereco } = req.body;
        const paciente = new Paciente({ cpf, nomeCompleto, dataNascimento, endereco });
        await paciente.save();
        res.status(201).send(paciente);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getAllPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.getAll();
        res.status(200).send(pacientes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPacienteByCpf = async (req, res) => {
    try {
        const paciente = await Paciente.findByCpf(req.params.cpf);
        if (!paciente) {
            return res.status(404).send();
        }
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPacienteById = async (req, res) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        if (!paciente) {
            return res.status(404).send();
        }
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updatePacienteByCpf = async (req, res) => {
    const updates = req.body;

    // Verifica se o objeto 'updates' é nulo ou indefinido
    if (!updates || typeof updates !== 'object') {
        return res.status(400).send({ error: 'Dados de atualização inválidos!' });
    }

    const allowedUpdates = ['cpf', 'nomeCompleto', 'dataNascimento', 'endereco', 'email', 'telefones', 'contatosAdicionais', 'encaixe'];
    const isValidOperation = Object.keys(updates).every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Atualizações inválidas!' });
    }

    try {
        const paciente = await Paciente.findByCpf(req.params.cpf);
        if (!paciente) {
            return res.status(404).send({ error: 'Paciente não encontrado!' });
        }

        // Atualizar telefones se estiverem presentes no JSON de atualização
        if (updates.telefones) {
            paciente.telefones = updates.telefones;
        }

        // Atualizar contatos adicionais se estiverem presentes no JSON de atualização
        if (updates.contatosAdicionais) {
            paciente.contatosAdicionais = updates.contatosAdicionais;
        }

        // Atualizar outros campos diretamente
        Object.assign(paciente, updates);

        const pacienteAtualizado = await Paciente.update(updates); // Corrigido
        res.status(200).send(pacienteAtualizado);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const deletePacienteByCpf = async (req, res) => {
    try {
        const paciente = await Paciente.findByCpf(req.params.cpf);
        if (!paciente) {
            return res.status(404).send();
        }
        const pacienteDeletado = await Paciente.delete();
        res.status(200).send(pacienteDeletado);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    createPaciente,
    getAllPacientes,
    getPacienteById,
    getPacienteByCpf,
    updatePacienteByCpf,
    deletePacienteByCpf
};
