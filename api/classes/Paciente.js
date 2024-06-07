const { PacienteModel } = require('../models/pacienteModel');

class Paciente {
    constructor({ cpf, nomeCompleto, dataNascimento, endereco, email, telefones, contatosAdicionais, encaixe }) {
        this._cpf = cpf;
        this._nomeCompleto = nomeCompleto;
        this._dataNascimento = dataNascimento;
        this._endereco = endereco;
        this._email = email;
        this._telefones = telefones;
        this._contatosAdicionais = contatosAdicionais;
        this._encaixe = encaixe;
    }

    // Getters e Setters
    get cpf() {
        return this._cpf;
    }

    set cpf(value) {
        this._cpf = value;
    }

    get nomeCompleto() {
        return this._nomeCompleto;
    }

    set nomeCompleto(value) {
        this._nomeCompleto = value;
    }

    get dataNascimento() {
        return this._dataNascimento;
    }

    set dataNascimento(value) {
        this._dataNascimento = value;
    }

    get endereco() {
        return this._endereco;
    }

    set endereco(value) {
        this._endereco = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get telefones() {
        return this._telefones;
    }

    set telefones(value) {
        this._telefones = value;
    }

    get contatosAdicionais() {
        return this._contatosAdicionais;
    }

    set contatosAdicionais(value) {
        this._contatosAdicionais = value;
    }

    get encaixe() {
        return this._encaixe;
    }

    set encaixe(value) {
        this._encaixe = value;
    }

    // Método para salvar o paciente no banco de dados
    async save() {
        const paciente = new PacienteModel({
            cpf: this._cpf,
            nomeCompleto: this._nomeCompleto,
            dataNascimento: this._dataNascimento,
            endereco: this._endereco,
            email: this._email,
            telefones: this._telefones,
            contatosAdicionais: this._contatosAdicionais,
            encaixe: this._encaixe
        });
        await paciente.save();
        return paciente; // Retorna o paciente salvo
    }

    static async getAll() {
        try {
            const pacientes = await PacienteModel.find();
            return pacientes.map(paciente => new Paciente(paciente));
        } catch (error) {
            throw new Error('Erro ao buscar todos os pacientes: ' + error.message);
        }
    }


    async update(updates) {
        const allowedUpdates = ['nomeCompleto', 'dataNascimento', 'endereco', 'email', 'telefones', 'contatosAdicionais', 'encaixe'];
        const filteredUpdates = Object.keys(updates).reduce((acc, key) => {
            if (allowedUpdates.includes(key)) {
                acc[key] = updates[key];
            }
            return acc;
        }, {});

        if (Object.keys(filteredUpdates).length === 0 && !allowedUpdates.some(key => updates.hasOwnProperty(key))) {
            throw new Error('Nenhuma atualização válida foi fornecida!');
        }

        try {
            const paciente = await PacienteModel.findOneAndUpdate({ cpf: this._cpf }, filteredUpdates, { new: true });
            if (!paciente) {
                throw new Error('Paciente não encontrado!');
            }

            // Atualiza os campos na instância de Paciente
            Object.assign(this, filteredUpdates);

            return paciente; // Retorna o paciente atualizado
        } catch (error) {
            throw new Error('Erro ao atualizar paciente: ' + error.message);
        }
    }

    async delete() {
        const paciente = await PacienteModel.findOneAndDelete({ cpf: this._cpf });
        if (!paciente) {
            throw new Error('Paciente não encontrado!');
        }
        return paciente; // Retorna o paciente deletado
    }

    static async findById(id) {
        try {
            const pacienteData = await PacienteModel.findById(id);
            if (pacienteData) {
                return new Paciente(pacienteData);
            }
            return null;
        } catch (error) {
            throw new Error('Erro ao buscar paciente por ID');
        }
    }

    static async findByCpf(cpf) {
        try {
            const pacienteData = await PacienteModel.findOne({ cpf });
            if (pacienteData) {
                return new Paciente(pacienteData);
            }
            return null;
        } catch (error) {
            throw new Error('Erro ao buscar paciente por CPF');
        }
    }
}

module.exports = Paciente;
