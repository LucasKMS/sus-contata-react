const { UnidadeModel } = require('../models/unidadeModel');

class Unidade {
    constructor({ nomeUnidade, cep, endereco, dataCadastro }) {
        this._nomeUnidade = nomeUnidade;
        this._cep = cep;
        this._endereco = endereco;
        this._dataCadastro = dataCadastro;
    }

        static async getAll() {
            try {
                const unidades = await UnidadeModel.find();
                return unidades.map(unidade => new Unidade(unidade));
            } catch (error) {
                throw new Error('Erro ao buscar todas as unidades: ' + error.message);
            }
        }

}

module.exports = Unidade;
