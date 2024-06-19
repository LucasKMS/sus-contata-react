import React from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';




function CadastroAgendamento () {
  return (
    <Container className="d-flex flex-column align-items-center">
      <h2 className="mb-3">Novo Agendamento</h2>

      <Form action="agendamento" method="post" className="w-100 d-flex flex-column align-items-center">
        <Form.Group as={Col} md="6" className="mb-3">
          <fieldset className="form-control">
            <legend>Selecionar Cliente</legend>
            
            <Form.Label htmlFor="clienteCPF" className="col-form-label">Digite o CPF do cliente:</Form.Label>
            <Form.Control 
            type="text" 
            name="clienteCPF" 
            id="clienteCPF" 
            // onChange={handleChange}
            />

            <Form.Label htmlFor="clienteNome" className="col-form-label">Nome:</Form.Label>
            <Form.Control 
            type="text" 
            name="clienteNome" 
            id="clienteNome" 
            disabled 
            readOnly />

            <Form.Label htmlFor="dataNascimento" className="col-form-label">Data de nascimento:</Form.Label>
            <Form.Control 
            type="date" 
            id="dataNascimento"
            disabled 
            readOnly />

            <Form.Label htmlFor="clienteEndereco" className="col-form-label">Endereço:</Form.Label>
            <Form.Control 
            as="textarea" 
            name="clienteEndereco" 
            id="clienteEndereco" 
            disabled 
            readOnly 
            />
          </fieldset>
        </Form.Group>

        <Form.Group as={Col} md="6">
          <fieldset className="form-control">
            <legend>Solicitar Agendamento</legend>
            
            <Form.Label htmlFor="selUnidade" className="col-form-label">Unidade:</Form.Label>
            <Form.Control 
            as="select" 
            name="selUnidade"
            id="selUnidade"
            >
              <option selected>Selecionar UBS</option>
              <option value="1">UBS - Vila Nova</option>
              <option value="2">UBS - Vila Garcia</option>
              <option value="3">UBS - Itapeva</option>
              <option value="4">UBS - Barra Funda</option>
              <option value="5">UBS - Novo Mundo</option>
              <option value="6">UBS - Vila Amorim</option>
              <option value="7">UBS - Jardim Archila</option>
              <option value="8">UBS - Jardim Serrano</option>
              <option value="9">UBS - Jardim Clarice</option>
              <option value="10">UBS - Parque Bela Vista</option>
              <option value="11">UBS - Rio Acima</option>
              <option value="12">ESF - Green Valley</option>
              <option value="13">ESF - Jardim Tatiana</option>
              <option value="14">ESF - PROMORAR</option>
            </Form.Control>

            <Row>
              <Col md="6">
                <Form.Label htmlFor="data" className="col-form-label">Data:</Form.Label>
                <Form.Control 
                type="date" 
                name="data" 
                id="data" 
                />
              </Col>

              <Col md="6">
                <Form.Label htmlFor="horario" className="col-form-label">Horario:</Form.Label>
                <Form.Control 
                type="time" 
                name="horario" 
                id="horario" 
                />
              </Col>
            </Row>

            <Form.Label htmlFor="tipoAtendimento" className="col-form-label">Tipo atendimento:</Form.Label>
            <Form.Control 
            as="select" 
            name="tipoAtendimento" 
            id="tipoAtendimento"
            >
              <option selected>Selecionar tipo de atendimento</option>
              <option value="Consulta">Consulta</option>
              <option value="Exame">Exame</option>
              <option value="Procedimento">Procedimento</option>
              <option value="Retorno">Retorno</option>
            </Form.Control>

            <Form.Label htmlFor="especialidade" className="col-form-label">Especialidade:</Form.Label>
            <Form.Control 
            type="text" 
            id="especialidade" />
          </fieldset>
        </Form.Group>

        <Button type="submit" className="mt-3" variant="primary">Agendar</Button>
      </Form>
    </Container>
  );
}

export default CadastroAgendamento;
