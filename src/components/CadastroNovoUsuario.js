import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import styles from './CadastroNovoUsuario.module.css';

function CadastroNovoUsuario() {
  const [usuarioData, setUsuarioData] = useState({
    nomeCompleto: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    telefone1: '',
    telefone2: '',
    aux1Parentesco: '',
    aux1Nome: '',
    aux1Email: '',
    aux1Tel1: '',
    aux1Tel2: '',
    aux2Parentesco: '',
    aux2Nome: '',
    aux2Email: '',
    aux2Tel1: '',
    aux2Tel2: '',
    cep: '',
    logradouro: '',
    numeroResidencia: '',
    complemento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioData({
      ...usuarioData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica de envio do formulário aqui
    console.log(usuarioData);
  };

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
                value={usuarioData.nomeCompleto}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="cpf">
              <Form.Label>CPF:</Form.Label>
              <Form.Control
                type="text"
                name="cpf"
                value={usuarioData.cpf}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="dataNascimento">
              <Form.Label>Data de Nascimento:</Form.Label>
              <Form.Control
                type="date"
                name="dataNascimento"
                value={usuarioData.dataNascimento}
                onChange={handleChange}
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
                value={usuarioData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="tel1">
              <Form.Label>Telefone 1:</Form.Label>
              <Form.Control
                type="tel"
                name="telefone1"
                value={usuarioData.telefone1}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="tel2">
              <Form.Label>Telefone 2:</Form.Label>
              <Form.Control
                type="tel"
                name="telefone2"
                value={usuarioData.telefone2}
                onChange={handleChange}
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
                value={usuarioData.aux1Parentesco}
                onChange={handleChange}
                >
                <option value="">Grau de parentesco</option>
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
                value={usuarioData.aux1Nome}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="emailAux1">
              <Form.Label>E-Mail:</Form.Label>
              <Form.Control
                type="email"
                name="aux1Email"
                placeholder="email@exemplo.com"
                value={usuarioData.aux1Email}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="telAux1">
              <Form.Label>Telefone 1:</Form.Label>
              <Form.Control
                type="tel"
                name="aux1Tel1"
                value={usuarioData.aux1Tel1}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="tel2Aux1">
              <Form.Label>Telefone 2:</Form.Label>
              <Form.Control
                type="tel"
                name="aux1Tel2"
                value={usuarioData.aux1Tel2}
                onChange={handleChange}
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
                value={usuarioData.aux2Parentesco}
                onChange={handleChange}
                >
                <option value="">Grau de parentesco</option>
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
                value={usuarioData.aux2Nome}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="emailAux2">
              <Form.Label>E-Mail:</Form.Label>
              <Form.Control
                type="email"
                name="aux2Email"
                placeholder="email@exemplo.com"
                value={usuarioData.aux2Email}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="telAux2">
              <Form.Label>Telefone 1:</Form.Label>
              <Form.Control
                type="tel"
                name="aux2Tel1"
                value={usuarioData.aux2Tel1}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="tel2Aux2">
              <Form.Label>Telefone 2:</Form.Label>
              <Form.Control
                type="tel"
                name="aux2Tel2"
                value={usuarioData.aux2Tel2}
                onChange={handleChange}
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
            value={usuarioData.cep}
            onChange={handleChange}
            />
        </Form.Group>

        <Form.Group controlId="logradouro">
          <Form.Label>Logradouro:</Form.Label>
          <Form.Control
            type="text"
            name="logradouro"
            value={usuarioData.logradouro}
            onChange={handleChange}
            />
        </Form.Group>

        <Form.Group controlId="nrResidencia">
          <Form.Label>Número:</Form.Label>
          <Form.Control
            type="text"
            name="numeroResidencia"
            value={usuarioData.numeroResidencia}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="complemento">
          <Form.Label>Complemento:</Form.Label>
          <Form.Control
            type="text"
            name="complemento"
            value={usuarioData.complemento}
            onChange={handleChange}
            />
        </Form.Group>
      </fieldset>

      <Button type="submit" className="btn btn-success mt-3">Cadastrar</Button>
    </Form>
</>
  );
}

export default CadastroNovoUsuario;
