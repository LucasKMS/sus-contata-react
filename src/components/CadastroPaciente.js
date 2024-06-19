import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import styles from './CadastroPaciente.module.css';
import axios from 'axios';


function CadastroPaciente() {

  const [cpf, setCpf] = useState('')
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [complemento, setComplemento] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [email, setEmail] = useState('')
  const [telefone1, setTelefone1] = useState('')
  const [telefone2, setTelefone2] = useState('')
  const [grauParentescoContato1, setGrauParentescoContato1] = useState('')
  const [nomeCompletoContato1, setNomeCompletoContato1] = useState('')
  const [emailContato1, setEmailContato1] = useState('')
  const [telefone1Contato1, setTelefone1Contato1] = useState('')
  const [telefone2Contato1, setTelefone2Contato1] = useState('')
  const [grauParentescoContato2, setGrauParentescoContato2] = useState('')
  const [nomeCompletoContato2, setNomeCompletoContato2] = useState('')
  const [emailContato2, setEmailContato2] = useState('')
  const [telefone1Contato2, setTelefone1Contato2] = useState('')
  const [telefone2Contato2, setTelefone2Contato2] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      cpf,
      nomeCompleto,
      dataNascimento,
      endereco: {
        cep,
        logradouro,
        numero,
        bairro,
        complemento,
        cidade
      },
      email: email,
      telefones: {
        telefone1,
        telefone2
      },
      contatosAdicionais: {
        contato1: {
          parentesco: grauParentescoContato1,
          nomeCompleto: nomeCompletoContato1,
          email: emailContato1,
          telefones: [
            { telefone1: telefone1Contato1, telefone2: telefone2Contato1 }
          ]
        },
        contato2: {
          parentesco: grauParentescoContato2,
          nomeCompleto: nomeCompletoContato2,
          email: emailContato2,
          telefones: [
            { telefone1: telefone1Contato2, telefone2: telefone2Contato2 }
          ]
        }
      },
      encaixe: false,
      tipoUsuario: 'paciente'
    }

    try {
      const response = await axios.post('http://localhost:3000/api/pacientes', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Resposta:', response.data);

      setNomeCompleto('');
      setDataNascimento(''); 
      setCep('');
      setLogradouro('');
      setNumero('');
      setBairro(''); 
      setComplemento(''); 
      setCidade(''); 
      setUf(''); 
      setEmail(''); 
      setTelefone1(''); 
      setTelefone2(''); 
      setGrauParentescoContato1(''); 
      setNomeCompletoContato1(''); 
      setEmailContato1(''); 
      setTelefone1Contato1(''); 
      setTelefone2Contato1(''); 
      setGrauParentescoContato2(''); 
      setNomeCompletoContato2(''); 
      setEmailContato2(''); 
      setTelefone1Contato2(''); 
      setTelefone2Contato2('');
    } 
    catch (error) {
      console.error('Erro:', error);
    }
  }


  return (
    <>
      <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-2">
        <h2 className="mb-3">Cadastrar Novo Usuário</h2>

        <Row className="w-100">
          <Col xs={12} md={6}>
            <fieldset className={`form-control ${styles.fieldset}`}>
              <legend>Informações Pessoais</legend>

              <Form.Group controlId="nomeCompleto">
                <Form.Label>Nome Completo:</Form.Label>
                <Form.Control
                  type="text"
                  name="nomeCompleto"
                  value={nomeCompleto}
                  onChange={event => setNomeCompleto(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="cpf">
                <Form.Label>CPF:</Form.Label>
                <Form.Control
                  type="text"
                  name="cpf"
                  value={cpf}
                  onChange={event => setCpf(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="dataNascimento">
                <Form.Label>Data de Nascimento:</Form.Label>
                <Form.Control
                  type="date"
                  name="dataNascimento"
                  value={dataNascimento}
                  onChange={event => setDataNascimento(event.target.value)}
                />
              </Form.Group>
            </fieldset>
          </Col>

          <Col xs={12} md={6}>
            <fieldset className={`form-control ${styles.fieldset}`}>
              <legend>Informações de Contato</legend>

              <Form.Group controlId="email">
                <Form.Label>E-Mail:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="email@exemplo.com"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="tel1">
                <Form.Label>Telefone 1:</Form.Label>
                <Form.Control
                  type="tel"
                  name="telefone1"
                  value={telefone1}
                  onChange={event => setTelefone1(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="tel2">
                <Form.Label>Telefone 2:</Form.Label>
                <Form.Control
                  type="tel"
                  name="telefone2"
                  value={telefone2}
                  onChange={event => setTelefone2(event.target.value)}
                />
              </Form.Group>
            </fieldset>
          </Col>
        </Row>

        <Row className="w-100">
          <Col xs={12} md={6}>
            <fieldset className={`form-control ${styles.fieldset}`}>
              <legend>Contato Auxiliar 1</legend>

              <Form.Group controlId="aux1Parentesco">
                <Form.Label>Grau de Parentesco:</Form.Label>
                <Form.Control
                  as="select"
                  name="aux1Parentesco"
                  value={grauParentescoContato1}
                  onChange={event => setGrauParentescoContato1(event.target.value)}
                >
                  <option value=''></option>
                  <option value="Mãe">Mãe</option>
                  <option value="Pai">Pai</option>
                  <option value="Filho(a)">Filho(a)</option>
                  <option value="Neto(a)">Neto(a)</option>
                  <option value="Cunhado(a)">Cunhado(a)</option>
                  <option value="Amigo(a)">Amigo(a)</option>
                  <option value="Vizinho(a)">Vizinho(a)</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="nomeAux1">
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  type="text"
                  name="aux1Nome"
                  value={nomeCompletoContato1}
                  onChange={event => setNomeCompletoContato1(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="emailAux1">
                <Form.Label>E-Mail:</Form.Label>
                <Form.Control
                  type="email"
                  name="aux1Email"
                  placeholder="email@exemplo.com"
                  value={emailContato1}
                  onChange={event => setEmailContato1(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="telAux1">
                <Form.Label>Telefone 1:</Form.Label>
                <Form.Control
                  type="tel"
                  name="aux1Tel1"
                  value={telefone1Contato1}
                  onChange={event => setTelefone1Contato1(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="tel2Aux1">
                <Form.Label>Telefone 2:</Form.Label>
                <Form.Control
                  type="tel"
                  name="aux1Tel2"
                  value={telefone2Contato1}
                  onChange={event => setTelefone2Contato1(event.target.value)}
                />
              </Form.Group>
            </fieldset>
          </Col>

          <Col xs={12} md={6}>
            <fieldset className={`form-control ${styles.fieldset}`}>
              <legend>Contato Auxiliar 2</legend>

              <Form.Group controlId="aux2Parentesco">
                <Form.Label>Grau de Parentesco:</Form.Label>
                <Form.Control
                  as="select"
                  name="aux2Parentesco"
                  value={grauParentescoContato2}
                  onChange={event => setGrauParentescoContato2(event.target.value)}
                >
                  <option value=''></option>
                  <option value="Mãe">Mãe</option>
                  <option value="Pai">Pai</option>
                  <option value="Filho(a)">Filho(a)</option>
                  <option value="Neto(a)">Neto(a)</option>
                  <option value="Cunhado(a)">Cunhado(a)</option>
                  <option value="Amigo(a)">Amigo(a)</option>
                  <option value="Vizinho(a)">Vizinho(a)</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="nomeAux2">
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  type="text"
                  name="aux2Nome"
                  value={nomeCompletoContato2}
                  onChange={event => setNomeCompletoContato2(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="emailAux2">
                <Form.Label>E-Mail:</Form.Label>
                <Form.Control
                  type="email"
                  name="aux2Email"
                  placeholder="email@exemplo.com"
                  value={emailContato2}
                  onChange={event => setEmailContato2(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="telAux2">
                <Form.Label>Telefone 1:</Form.Label>
                <Form.Control
                  type="tel"
                  name="aux2Tel1"
                  value={telefone1Contato2}
                  onChange={event => setTelefone1Contato2(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="tel2Aux2">
                <Form.Label>Telefone 2:</Form.Label>
                <Form.Control
                  type="tel"
                  name="aux2Tel2"
                  value={telefone2Contato2}
                  onChange={event => setTelefone2Contato2(event.target.value)}
                />
              </Form.Group>
            </fieldset>
          </Col>
        </Row>

        <fieldset className={`form-control ${styles.fieldset2} w-100`}>
          <legend>Endereço</legend>

          <Form.Group controlId="cep">
            <Form.Label>CEP:</Form.Label>
            <Form.Control
              type="text"
              name="cep"
              value={cep}
              onChange={event => setCep(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="logradouro">
            <Form.Label>Logradouro:</Form.Label>
            <Form.Control
              type="text"
              name="logradouro"
              value={logradouro}
              onChange={event => setLogradouro(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="nrResidencia">
            <Form.Label>Número:</Form.Label>
            <Form.Control
              type="text"
              name="numeroResidencia"
              value={numero}
              onChange={event => setNumero(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="bairro">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control
              type="text"
              name="bairro"
              value={bairro}
              onChange={event => setBairro(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="complemento">
            <Form.Label>Complemento:</Form.Label>
            <Form.Control
              type="text"
              name="complemento"
              value={complemento}
              onChange={event => setComplemento(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="cidade">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control
              type="text"
              name="cidade"
              value={cidade}
              onChange={event => setCidade(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="unidade-da-federacao">
            <Form.Label>Unidade da Federação</Form.Label>
            <Form.Select
              required
              value={uf}
              onChange={event => setUf(event.target.value)}>
              <option disabled>Selecione...</option>

              {/* Região Norte */}
              <optgroup label="Norte">
                <option>AC</option>
                <option>AM</option>
                <option>AP</option>
                <option>PA</option>
                <option>RO</option>
                <option>RR</option>
                <option>TO</option>
              </optgroup>

              {/* Região Nordeste */}
              <optgroup label="Nordeste">
                <option>AL</option>
                <option>BA</option>
                <option>CE</option>
                <option>MA</option>
                <option>PB</option>
                <option>PE</option>
                <option>PI</option>
                <option>RN</option>
                <option>SE</option>
              </optgroup>

              {/* Região Centro-Oeste */}
              <optgroup label="Centro-Oeste">
                <option>DF</option>
                <option>GO</option>
                <option>MT</option>
                <option>MS</option>
              </optgroup>

              {/* Região Sudeste */}
              <optgroup label="Sudeste">
                <option>ES</option>
                <option>MG</option>
                <option>RJ</option>
                <option>SP</option>
              </optgroup>

              {/* Região Sul */}
              <optgroup label="Sul">
                <option>PR</option>
                <option>RS</option>
                <option>SC</option>
              </optgroup>

            </Form.Select>
          </Form.Group>

        </fieldset>

        <Button type="submit" className="btn btn-success mt-3">Cadastrar</Button>
      </Form>
    </>
  );
}

export default CadastroPaciente;
