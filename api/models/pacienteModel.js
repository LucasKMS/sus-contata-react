const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definindo o esquema para os telefones
const TelefoneSchema = new Schema({
    telefone1: { type: String },
    telefone2: { type: String }
}, { _id: false });

// Definindo o esquema para o endereço
const EnderecoSchema = new Schema({
    cep: { type: String, required: true },
    logradouro: { type: String, required: true },
    numero: { type: String, required: true },
    bairro: { type: String, required: true },
    complemento: { type: String },
    cidade: { type: String, required: true }
});

// Definindo o esquema para contatos adicionais
const ContatoAdicionalSchema = new Schema({
    parentesco: { type: String },
    nomeCompleto: { type: String },
    email: { type: String },
    telefones: { type: [TelefoneSchema], _id: false }
}, { _id: false }); // Definido como subdocumento, não ter _id próprio

// Definindo o esquema para o paciente
const PacienteSchema = new Schema({
    cpf: { type: String, required: true, unique: true },
    nomeCompleto: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    endereco: { type: EnderecoSchema, required: true },
    email: { type: String },
    telefones: { type: TelefoneSchema, _id: false },
    contatosAdicionais: {
        contato1: { type: ContatoAdicionalSchema, _id: false },
        contato2: { type: ContatoAdicionalSchema, _id: false }
    },
    encaixe: { type: Boolean },
    tipoUsuario: {
        type: String,
        enum: ['adm', 'paciente', 'medico'],
        required: true,
        default: 'paciente'
    }
}, { timestamps: true }); // Adiciona campos createdAt e updatedAt

// Criando o modelo Paciente a partir do esquema PacienteSchema
const PacienteModel = mongoose.model('Paciente', PacienteSchema);

// Exportando o modelo Paciente
module.exports = { PacienteModel };
