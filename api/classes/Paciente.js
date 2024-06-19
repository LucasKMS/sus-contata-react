const { AgendamentoModel } = require('../models/agendamentoModel'); // Adicionei ponto e vírgula aqui
const { PacienteModel } = require('../models/PacienteModel')

class Paciente {
    constructor({ cpf, nomeCompleto, dataNascimento, endereco, email, telefones, contatosAdicionais, encaixe, tipoUsuario }) {
        this._cpf = cpf;
        this._nomeCompleto = nomeCompleto;
        this._dataNascimento = dataNascimento;
        this._endereco = endereco;
        this._email = email;
        this._telefones = telefones;
        this._contatosAdicionais = contatosAdicionais;
        this._encaixe = encaixe;
        this._tipoUsuario = tipoUsuario;  // Adicionado o campo tipoUsuario
    }

    // Getters e Setters

    getCpf() {
        return this._cpf
    }

    setCpf(value) {
        this._cpf = value
    }

    getDataNascimento() {
        return this._dataNascimento
    }

    setDataNascimento(value) {
        this._dataNascimento = value
    }

    getEndereco() {
        return this._endereco
    }

    setEndereco(value) {
        this._endereco = value
    }

    getEmail() {
        return this._email
    }

    setEmail(value) {
        this._email = value
    }

    getTelefones() {
        return this._telefones
    }

    setTelefones(value) {
        this._telefones = value
    }

    getContatosAdicionais() {
        return this._contatosAdicionais
    }

    setContatosAdicionais(value) {
        this._contatosAdicionais = value
    }

    getEncaixe() {
        return this.encaixe
    }

    setEncaixe(value) {
        this._encaixe = value
    }

    getTipoUsuario() {
        return this._tipoUsuario
    }

    setTipoUsuario(value) {
        this._tipoUsuario = value
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
            encaixe: this._encaixe,
            tipoUsuario: this._tipoUsuario  // Adicionado o campo tipoUsuario
        });
        await paciente.save();
        return paciente; // Retorna o paciente salvo
    }

    // Método para obter todos os pacientes
    static async getAll() {
        try {
            const pacientes = await PacienteModel.find();
            return pacientes.map(paciente => new Paciente(paciente));
        } catch (error) {
            throw new Error('Erro ao buscar todos os pacientes: ' + error.message);
        }
    }

    async update(updates) {
        const allowedUpdates = ['nomeCompleto', 'dataNascimento', 'email', 'telefones', 'contatosAdicionais', 'encaixe'];
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
            throw new Error('Erro ao buscar paciente por ID: ' + error.message);
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
            throw new Error('Erro ao buscar paciente por CPF: ' + error.message);
        }
    }

    // Métodos de agendamento
    async consultarAgendamentos() {
        try {
            const agendamentos = await AgendamentoModel.find({ pacienteCpf: this._cpf });
            return agendamentos;
        } catch (error) {
            throw new Error('Erro ao consultar agendamentos: ' + error.message);
        }
    }

    async cancelarAgendamento(agendamentoId) {
        try {
            const agendamento = await AgendamentoModel.findOneAndUpdate(
                { _id: agendamentoId, pacienteCpf: this._cpf },
                { status: 'cancelado' },
                { new: true }
            );
            if (!agendamento) {
                throw new Error('Agendamento não encontrado ou não pertence ao paciente!');
            }
            return agendamento;
        } catch (error) {
            throw new Error('Erro ao cancelar agendamento: ' + error.message);
        }
    }

    async reagendarAgendamento(agendamentoId, novaData, novaHora) {
        try {
            const agendamento = await AgendamentoModel.findOneAndUpdate(
                { _id: agendamentoId, pacienteCpf: this._cpf },
                { status: 'pendente', data: novaData, hora: novaHora },
                { new: true }
            );
            if (!agendamento) {
                throw new Error('Agendamento não encontrado ou não pertence ao paciente!');
            }
            return agendamento;
        } catch (error) {
            throw new Error('Erro ao pedir reagendamento: ' + error.message);
        }
    }
}

module.exports = { Paciente };