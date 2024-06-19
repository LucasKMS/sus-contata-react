import React, { useState, useEffect } from 'react';
import styles from './MeuPerfil.module.css';
import paciente from '../assets/Usuario.png'
import axios from 'axios';


function MeuPerfil () {
  // setNomeCompleto(data._nomeCompleto || '');
  // setDataNascimento(data._dataNascimento ? new Date(data._dataNascimento).toISOString().split('T')[0] : '');
  // setEndereco(data._endereco ?
  //   `${data._endereco.logradouro}, ${data._endereco.numero} - ${data._endereco.bairro}, ${data._endereco.cidade}`
  //   : ''
  // );
  return (
    <main className={styles.main}>
      <div className={styles.coluna1}>
        <div className={styles.foto}>
          <figure>
            <img src={paciente} alt="Foto Paciente" />
          </figure>
        </div>
        <div className={styles.informacoesPaciente}>
          <div>
            <label htmlFor="nome" className={styles.nomePaciente}>Nome completo:</label>
            <input type="text" placeholder="Valtinho da 2" />
          </div>

          <div>
            <label htmlFor="email" className={styles.emailPaciente}>E-mail:</label>
            <input type="text" placeholder="Valtinhoda2@gmail.com" />
          </div>

          <div>
            <label htmlFor="telefone1" className={styles.telefone1Paciente}>Telefone 1:</label>
            <input type="text" placeholder="(15) 98154-8563" />
          </div>

          <div>
            <label htmlFor="telefone2" className={styles.telefone2Paciente}>Telefone 2:</label>
            <input type="text" placeholder="(15) 3226-9678" />
          </div>
        </div>
      </div>

      <div className={styles.coluna2}>
        <h2>Contatos extra (reponsável ou auxiliar)</h2>
        <div className={styles.contatosDiv}>
          <div className={styles.contato1}>
            <select name="relacao" id="relacao">
              <option selected>Grau de parentesco</option>
              <option value="Pai">Pai</option>
              <option value="Mãe">Mãe</option>
              <option value="Filho(a)">Filho(a)</option>
              <option value="Tio(a)">Tio(a)</option>
              <option value="Cunhado(a)">Cunhado(a)</option>
              <option value="Amigo">Amigo</option>
            </select>
            <input type="text" placeholder="Nome e Sobrenome" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Telefone 1" />
            <input type="text" placeholder="Telefone 2" />
          </div>
          <div className={styles.contato2}>
            <select name="relacao" id="relacao">
              <option selected>Grau de parentesco</option>
              <option value="Pai">Pai</option>
              <option value="Mãe">Mãe</option>
              <option value="Filho(a)">Filho(a)</option>
              <option value="Tio(a)">Tio(a)</option>
              <option value="Cunhado(a)">Cunhado(a)</option>
              <option value="Amigo">Amigo</option>
            </select>
            <input type="text" placeholder="Nome e Sobrenome" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Telefone 1" />
            <input type="text" placeholder="Telefone 2" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MeuPerfil;
