// controllers/administrativoController.js

const Administrativo = require('../classes/Administrativo');

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

module.exports = {
    createAdministrativo,
    getAllAdministrativos,
    getAdministrativoByEmail,
    updateAdministrativo,
    deleteAdministrativo
};
