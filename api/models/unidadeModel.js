const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnidadeSchema = new Schema({
    nomeUnidade: {
        type: String,
        required: true,
        minlength: 5
    },
    cep: {
        type: String,
        required: true,
        match: /^\d{8}$/
    },
    endereco: {
        logradouro: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 200
        },
        numero: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        uf: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 2
        }
    },
    dataCadastro: {
        type: Date,
        required: true
    }
    
});



// Criando o modelo Unidade a partir do esquema UnidadeSchema
const UnidadeModel = mongoose.model('Unidade', UnidadeSchema);

// Exportando o modelo Unidade
module.exports = { UnidadeModel };
