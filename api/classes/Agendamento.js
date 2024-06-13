// classes/Agendamento.js

const { AgendamentoModel } = require('../models/agendamentoModel');

class Agendamento {
    constructor({ data, hora, pacienteCpf, status }) {
        this.data = data;
        this.hora = hora;
        this.pacienteCpf = pacienteCpf;
        this.status = status;
    }

    async save() {
        const agendamento = new AgendamentoModel({
            data: this.data,
            hora: this.hora,
            pacienteCpf: this.pacienteCpf,
            status: this.status,
        });
        await agendamento.save();
        return agendamento;
    }

    static async getAll() {
        try {
            const agendamentos = await AgendamentoModel.find();
            return agendamentos;
        } catch (error) {
            throw new Error('Erro ao buscar todos os agendamentos: ' + error.message);
        }
    }

    static async findById(id) {
        try {
            const agendamento = await AgendamentoModel.findById(id);
            return agendamento;
        } catch (error) {
            throw new Error('Erro ao buscar agendamento por ID: ' + error.message);
        }
    }

    async update(updates) {
        try {
            const agendamento = await AgendamentoModel.findByIdAndUpdate(this._id, updates, { new: true });
            return agendamento;
        } catch (error) {
            throw new Error('Erro ao atualizar agendamento: ' + error.message);
        }
    }

    async delete() {
        try {
            const agendamento = await AgendamentoModel.findByIdAndDelete(this._id);
            return agendamento;
        } catch (error) {
            throw new Error('Erro ao excluir agendamento: ' + error.message);
        }
    }
}

module.exports = Agendamento;
