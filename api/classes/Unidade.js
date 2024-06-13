const { UnidadeModel } = require('../models/unidadeModel');

class Unidade {
    constructor({ nomeUnidade, cep, endereco, dataCadastro }) {
        this._nomeUnidade = nomeUnidade;
        this._cep = cep;
        this._endereco = endereco;
        this._dataCadastro = dataCadastro;
    }

    // Getters e Setters
    get nomeUnidade() {
        return this._nomeUnidade;
    }

    set nomeUnidade(value) {
        this._nomeUnidade = value;
    }

    get cep() {
        return this._cep;
    }

    set cep(value) {
        this._cep = value;
    }

    get endereco() {
        return this._endereco;
    }

    set endereco(value) {
        this._endereco = value;
    }

    get dataCadastro() {
        return this._dataCadastro;
    }

    set dataCadastro(value) {
        this._dataCadastro = value;
    }

    get localizacao() {
        return this._localizacao;
    }

    set localizacao(value) {
        this._localizacao = value;
    }

        // Método para salvar a unidade no banco de dados
        async save() {
            const unidadeData = {
                nomeUnidade: this._nomeUnidade,
                cep: this._cep,
                endereco: this._endereco,
                dataCadastro: this._dataCadastro
            };

            // Verifica se localizacao.coordinates está definido
            if (this._localizacao && this._localizacao.coordinates) {
                unidadeData.localizacao = {
                    type: 'Point',
                    coordinates: this._localizacao.coordinates
                };
            }

            const unidade = new UnidadeModel(unidadeData);

            try {
                await unidade.save();
                return unidade;
            } catch (error) {
                throw new Error('Erro ao registrar a unidade: ' + error.message);
            }
        }

        static async getAll() {
            try {
                const unidades = await UnidadeModel.find();
                return unidades.map(unidade => new Unidade(unidade));
            } catch (error) {
                throw new Error('Erro ao buscar todas as unidades: ' + error.message);
            }
        }

        async update(updates) {
            const allowedUpdates = ['nomeUnidade', 'cep', 'endereco', 'dataCadastro', 'localizacao'];
            const filteredUpdates = Object.keys(updates).reduce((acc, key) => {
                if (allowedUpdates.includes(key)) {
                    acc[key] = updates[key];
                }
                return acc;
            }, {});

            if (Object.keys(filteredUpdates).length === 0 && !allowedUpdates.some(key => updates.hasOwnProperty(key))) {
                throw new Error('Nenhuma atualização válida foi fornecida!');
            }

            try {
                const unidade = await UnidadeModel.findOneAndUpdate({ _id: this._id }, filteredUpdates, { new: true });
                if (!unidade) {
                    throw new Error('Unidade não encontrada!');
                }

                // Atualiza os campos na instância de Unidade
                Object.assign(this, filteredUpdates);

                return unidade;
            } catch (error) {
                throw new Error('Erro ao atualizar unidade: ' + error.message);
            }
        }

        async delete() {
            const unidade = await UnidadeModel.findOneAndDelete({ _id: this._id });
            if (!unidade) {
                throw new Error('Unidade não encontrada!');
            }
            return unidade;
        }

        static async findById(id) {
            try {
                const unidadeData = await UnidadeModel.findById(id);
                if (unidadeData) {
                    return new Unidade(unidadeData);
                }
                return null;
            } catch (error) {
                throw new Error('Erro ao buscar unidade por ID: ' + error.message);
            }
        }
}

module.exports = Unidade;
