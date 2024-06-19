const { AgendamentoModel } = require('../models/agendamentoModel');

class Agendamento {
    constructor({ _id, data, hora, pacienteCpf, status, nomeUnidade, especialidade, tipoAtendimento }) {
        this._id = _id;
        this.data = data;
        this.hora = hora;
        this.pacienteCpf = pacienteCpf;
        this.status = status;
        this.nomeUnidade = nomeUnidade;
        this.especialidade = especialidade;
        this.tipoAtendimento = tipoAtendimento;
    }

    setStatus(value) {
        this.status = value
    }

    async save() {
        const agendamento = new AgendamentoModel({
            data: this.data,
            hora: this.hora,
            pacienteCpf: this.pacienteCpf,
            status: this.status,
            nomeUnidade: this.nomeUnidade,
            especialidade: this.especialidade,
            tipoAtendimento: this.tipoAtendimento
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
            if (!agendamento) {
                throw new Error('Agendamento não encontrado');
            }
            return new Agendamento(agendamento);
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

    // Implementação da função de cancelamento
    async cancelarAgendamento() {
        try {
            const agendamento = await AgendamentoModel.findById(this._id);
            if (!agendamento) {
                throw new Error('Agendamento não encontrado');
            }
            agendamento.status = 'cancelado';
            await agendamento.save();
            return agendamento;
        } catch (error) {
            throw new Error('Erro ao cancelar o agendamento: ' + error.message);
        }
    }

    async criarAgendamento(tipoAtendimento, especialidade, unidade, pacienteCpf, data, hora) {
        try {
            const agendamento = new AgendamentoModel({
                tipoAtendimento,
                especialidade,
                unidade,
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
}

module.exports = Agendamento;