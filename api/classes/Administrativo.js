const { AdministrativoModel } = require('../models/administrativoModel');
const { AgendamentoModel } = require('../models/agendamentoModel');
const Agendamento = require('../interfaces/Agendamento');

class Administrativo extends Agendamento {
    constructor({ cpf, nomeCompleto, dataNascimento, endereco, email, telefones, tipoUsuario }) {
        super();
        this._cpf = cpf;
        this._nomeCompleto = nomeCompleto;
        this._dataNascimento = dataNascimento;
        this._endereco = endereco;
        this._email = email;
        this._telefones = telefones;
        this._tipoUsuario = tipoUsuario;
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

    // Método para salvar o administrativo no banco de dados
    async save() {
        const administrativo = new AdministrativoModel({
            cpf: this._cpf,
            nomeCompleto: this._nomeCompleto,
            dataNascimento: this._dataNascimento,
            endereco: this._endereco,
            email: this._email,
            telefones: this._telefones
        });
        await administrativo.save();
        return administrativo; // Retorna o administrativo salvo
    }

    static async getAll() {
        try {
            const administrativos = await AdministrativoModel.find();
            return administrativos.map(administrativo => new this(administrativo));
        } catch (error) {
            throw new Error('Erro ao buscar todos os funcionários administrativos: ' + error.message);
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
            const administrativo = await AdministrativoModel.findOneAndUpdate({ cpf: this._cpf }, filteredUpdates, { new: true });
            if (!administrativo) {
                throw new Error('administrativo não encontrado!');
            }

            // Atualiza os campos na instância de administrativo
            Object.assign(this, filteredUpdates);

            return administrativo; // Retorna o administrativo atualizado
        } catch (error) {
            throw new Error('Erro ao atualizar administrativo: ' + error.message);
        }
    }

    async delete() {
        const administrativo = await AdministrativoModel.findOneAndDelete({ cpf: this._cpf });
        if (!administrativo) {
            throw new Error('administrativo não encontrado!');
        }
        return administrativo; // Retorna o administrativo deletado
    }

    static async findById(id) {
        try {
            const administrativoData = await AdministrativoModel.findById(id);
            if (administrativoData) {
                return new Administrativo(administrativoData);
            }
            return null;
        } catch (error) {
            throw new Error('Erro ao buscar administrativo por ID');
        }
    }

    static async findByCpf(cpf) {
        try {
            const administrativoData = await AdministrativoModel.findOne({ cpf });
            if (administrativoData) {
                return new Administrativo(administrativoData);
            }
            return null;
        } catch (error) {
            throw new Error('Erro ao buscar administrativo por CPF');
        }
    }

    static async findByEmail(email) {
        try {
            const administrativoData = await AdministrativoModel.findOne({ email });
            if (administrativoData) {
                return new Administrativo(administrativoData);
            }
            return null;
        } catch (error) {
            throw new Error('Erro ao buscar administrativo por E-Mail');
        }
    }

    // Métodos de agendamento
    async criarAgendamento(pacienteCpf, data, hora) {
        try {
            const agendamento = new AgendamentoModel({
                pacienteCpf,
                data,
                hora,
                status: 'pendente'
            });
            await agendamento.save();
            return agendamento;
        } catch (error) {
            throw new Error('Erro ao criar agendamento: ' + error.message);
        }
    }

    async consultarAgendamentos() {
        try {
            const agendamentos = await AgendamentoModel.find();
            return agendamentos;
        } catch (error) {
            throw new Error('Erro ao consultar agendamentos: ' + error.message);
        }
    }

    async cancelarAgendamento(agendamentoId) {
        try {
            const agendamento = await AgendamentoModel.findOneAndUpdate(
                { _id: agendamentoId },
                { status: 'cancelado' },
                { new: true }
            );
            if (!agendamento) {
                throw new Error('Agendamento não encontrado!');
            }
            return agendamento;
        } catch (error) {
            throw new Error('Erro ao cancelar agendamento: ' + error.message);
        }
    }

    async reagendarAgendamento(agendamentoId, novaData, novaHora) {
        try {
            const agendamento = await AgendamentoModel.findOneAndUpdate(
                { _id: agendamentoId },
                { status: 'pendente', data: novaData, hora: novaHora },
                { new: true }
            );
            if (!agendamento) {
                throw new Error('Agendamento não encontrado!');
            }
            return agendamento;
        } catch (error) {
            throw new Error('Erro ao reagendar agendamento: ' + error.message);
        }
    }
}

module.exports = Administrativo;
