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
}

module.exports = Agendamento;