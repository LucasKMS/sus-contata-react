const { AgendamentoModel } = require("../models/agendamentoModel");

class Agendamento {
    constructor(data) {
        this.nomeUnidade = data.nomeUnidade;
        this.data = data.data;
        this.hora = data.hora;
        this.pacienteCpf = data.pacienteCpf;
        this.especialidade = data.especialidade;
        this.tipoAtendimento = data.tipoAtendimento;
        this.status = data.status || 'pendente'; // Define um status padrão
    }
    
    async criarAgendamento(pacienteCpf, data, hora) {
        throw new Error('Método não implementado');
    }

    async consultarAgendamentos() {
        throw new Error('Método não implementado');
    }

    async cancelarAgendamento(agendamentoId) {
        throw new Error('Método não implementado');
    }

    async reagendarAgendamento(agendamentoId, novaData, novaHora) {
        throw new Error('Método não implementado');
    }

    async save() {
        const agendamento = new AgendamentoModel({
            nomeUnidade: this.nomeUnidade,
            data: this.data,
            hora: this.hora,
            pacienteCpf: this.pacienteCpf,
            especialidade: this.especialidade,
            tipoAtendimento: this.tipoAtendimento,
            status: this.status
        });
        await agendamento.save();
        return agendamento; // Retorna o agendamento salvo
    }
}

module.exports = Agendamento;