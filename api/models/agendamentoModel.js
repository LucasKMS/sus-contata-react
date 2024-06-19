// models/agendamentoModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgendamentoSchema = new Schema({
    tipoAtendimento: {type: String, required: true},
    especialidade: { type: String, required: true },
    data: { type: Date, required: true },
    hora: { type: String, required: true },
    nomeUnidade: { type: String, required: true },
    pacienteCpf: { type: String, required: true },
    status: { type: String, enum: ['pendente', 'confirmado', 'cancelado'], default: 'pendente' }
});

const AgendamentoModel = mongoose.model('Agendamento', AgendamentoSchema);

module.exports = { AgendamentoModel };


