const { AgendamentoModel } = require("../models/agendamentoModel");

class Agendamento {
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
            pacienteCpf: this.cpf,
            especialidade: this.especialidade,
            tipoAtendimento: this.tipoAtendimento,
            status: this.status
        });
        await agendamento.save();
        return agendamento; // Retorna o agendamento salvo
    }
}

module.exports = Agendamento;