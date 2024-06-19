import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';

function CadastroAgendamento() {
  const [cpf, setCpf] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [unidade, setUnidade] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [tipoAtendimento, setTipoAtendimento] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    // Função para buscar unidades da API do backend
    async function fetchUnidades() {
      try {
        const response = await axios.get('http://localhost:3000/api/unidades'); // Rota do backend
        setUnidades(response.data);
        console.log('Unidades carregadas:', response.data); // Adicione este log para verificar os dados
      } catch (error) {
        console.error('Erro ao buscar unidades:', error);
      }
    }

    // Chama a função para buscar unidades ao montar o componente
    fetchUnidades();
  }, []);

  async function handleChange() {
    try {
      const response = await axios.get(`http://localhost:3000/api/adm/pacientes/cpf/${cpf}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = response.data;

      setNomeCompleto(data._nomeCompleto || '');
      setDataNascimento(data._dataNascimento ? new Date(data._dataNascimento).toISOString().split('T')[0] : '');
      setEndereco(data._endereco ?
        `${data._endereco.logradouro}, ${data._endereco.numero} - ${data._endereco.bairro}, ${data._endereco.cidade}`
        : ''
      );

    } catch (error) {
      console.log('Erro ao buscar paciente:', error);
      setErro('Erro ao buscar paciente.');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!cpf || !unidade || !data || !hora || !tipoAtendimento || !especialidade) {
      setErro('Todos os campos são obrigatórios.');
      return;
    }

    const agendamento = {
      nomeUnidade: unidade,
      tipoAtendimento,
      especialidade,
      data,
      hora,
      pacienteCpf: cpf,
      status: 'pendente'
    };

    try {
      const response = await axios.post('http://localhost:3000/api/agendamentos', agendamento, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Resposta:', response.data);
      setSucesso('Agendamento realizado com sucesso!');
      setErro('');

      // Limpar formulário após sucesso
      setCpf('');
      setNomeCompleto('');
      setDataNascimento('');
      setEndereco('');
      setUnidade('');
      setData('');
      setHora('');
      setTipoAtendimento('');
      setEspecialidade('');

    } catch (error) {
      console.error('Erro ao agendar:', error);
      setErro('Erro ao agendar. Detalhes: ' + error.response.data.message);
      setSucesso('');
    }
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <h2 className="mb-3">Novo Agendamento</h2>
      {erro && <div className="alert alert-danger">{erro}</div>}
      {sucesso && <div className="alert alert-success">{sucesso}</div>}
      <Form onSubmit={handleSubmit} className="w-100 d-flex flex-column align-items-center">
        <Form.Group as={Col} md="6" className="mb-3">
          <fieldset className="form-control">
            <legend>Selecionar Cliente</legend>
            <Form.Label htmlFor="clienteCPF" className="col-form-label">Digite o CPF do cliente:</Form.Label>
            <Form.Control
              type="text"
              name="clienteCPF"
              id="clienteCPF"
              value={cpf}
              onChange={event => setCpf(event.target.value)}
              onBlur={handleChange}
            />
            <Form.Label htmlFor="clienteNome" className="col-form-label">Nome:</Form.Label>
            <Form.Control
              type="text"
              name="clienteNome"
              id="clienteNome"
              readOnly
              disabled
              value={nomeCompleto}
            />
            <Form.Label htmlFor="dataNascimento" className="col-form-label">Data de nascimento:</Form.Label>
            <Form.Control
              type="date"
              id="dataNascimento"
              readOnly
              disabled
              value={dataNascimento}
            />
            <Form.Label htmlFor="clienteEndereco" className="col-form-label">Endereço:</Form.Label>
            <Form.Control
              as="textarea"
              name="clienteEndereco"
              id="clienteEndereco"
              readOnly
              disabled
              value={endereco}
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
              value={unidade}
              onChange={event => setUnidade(event.target.value)}
            >
              <option value="">Selecionar UBS</option>
              {unidades.map((unidade) => (
                <option key={unidade._id} value={unidade.nomeUnidade}>
                  {unidade.nomeUnidade}
                </option>
              ))}
            </Form.Control>
            <Row>
              <Col md="6">
                <Form.Label htmlFor="data" className="col-form-label">Data:</Form.Label>
                <Form.Control
                  type="date"
                  name="data"
                  id="data"
                  value={data}
                  onChange={event => setData(event.target.value)}
                />
              </Col>
              <Col md="6">
                <Form.Label htmlFor="horario" className="col-form-label">Horario:</Form.Label>
                <Form.Control
                  type="time"
                  name="horario"
                  id="horario"
                  value={hora}
                  onChange={event => setHora(event.target.value)}
                />
              </Col>
            </Row>
            <Form.Label htmlFor="tipoAtendimento" className="col-form-label">Tipo atendimento:</Form.Label>
            <Form.Control
              as="select"
              name="tipoAtendimento"
              id="tipoAtendimento"
              value={tipoAtendimento}
              onChange={event => setTipoAtendimento(event.target.value)}
            >
              <option value="">Selecionar tipo de atendimento</option>
              <option value="Consulta">Consulta</option>
              <option value="Exame">Exame</option>
              <option value="Procedimento">Procedimento</option>
              <option value="Retorno">Retorno</option>
            </Form.Control>
            <Form.Label htmlFor="especialidade" className="col-form-label">Especialidade:</Form.Label>
            <Form.Control
              type="text"
              id="especialidade"
              value={especialidade}
              onChange={event => setEspecialidade(event.target.value)}
            />
          </fieldset>
        </Form.Group>
        <Button type="submit" className="mt-3" variant="primary">Agendar</Button>
      </Form>
    </Container>
  );
}

export default CadastroAgendamento;
