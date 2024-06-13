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

// Definindo o esquema para o administrativo
const AdministrativoSchema = new Schema({
    cpf: { type: String, required: true, unique: true },
    nomeCompleto: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    endereco: { type: EnderecoSchema, required: true },
    email: { type: String, required: true, unique: true },
    telefones: { type: TelefoneSchema },
    tipoUsuario: {
        type: String,
        enum: ["adm", "paciente", "medico"],
        required: true,
        default: "adm"
    }
});

const AdministrativoModel = mongoose.model('Administrativo', AdministrativoSchema);

module.exports = { AdministrativoModel };
