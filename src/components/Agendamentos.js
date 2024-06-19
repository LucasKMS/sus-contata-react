import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Card, Accordion } from 'react-bootstrap';
import styles from './Agendamentos.module.css';

function Agendamentos() {
    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        const fetchAgendamentos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/agendamentos'); // Substitua com o endpoint real da sua API
                setAgendamentos(response.data);
            } catch (error) {
                console.error('Erro ao buscar agendamentos:', error);
            }
        };

        fetchAgendamentos();
    }, []);

    return (
        <Container id="agendamentos">
            <Row className={styles.divFiltro}>
                <Col>
                    <Form.Group controlId="filtroEspecialidade">
                        <Form.Control as="select" className={styles.filtroSelect} defaultValue="">
                            <option value="" disabled>Selecione a especialidade</option>
                            <option value="alergologista">Alergologista</option>
                            <option value="pediatra">Pediatra</option>
                            <option value="psiquiatra">Psiquiatra</option>
                            <option value="ginecologista">Ginecologista</option>
                            <option value="neurologista">Neurologista</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="filtroEProcedimento">
                        <Form.Control as="select" className={styles.filtroSelect}>
                            <option value="">Selecione o procedimento</option>
                            <option value="cirurgia">Cirurgia</option>
                            <option value="consulta">Consulta</option>
                            <option value="exame">Exame</option>
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Control type="text" placeholder="Filtrar." className='mr-0' />
                </Col>
                <Col>
                    <Button variant="primary" className={styles.procurar}>🔎</Button>
                </Col>
            </Row>

            <section id="dialogo">
                <Row>
                    <Col md={8}>
                        <h2>Consultas agendadas</h2>
                        <Button variant="secondary" className={styles.historico}>Histórico</Button>

                        {agendamentos.map((agendamento, index) => (
                            <Card key={index} className="mb-3">
                                <Card.Body>
                                    <Card.Title className="titulo-agendamento">
                                        {agendamento.tipoAtendimento} - {agendamento.especialidade}
                                    </Card.Title>
                                    <Card.Text>
                                        Data: {new Date(agendamento.data).toLocaleDateString()}<br />
                                        Hora: {agendamento.hora}<br />
                                        Status: {agendamento.status}
                                    </Card.Text>
                                    <div className="confirmacao">
                                        <Button variant="success" className="confirmar">Confirmar</Button>
                                        <Button variant="danger" className="cancelar">Cancelar</Button>
                                        <Button variant="info" className="detalhes">Detalhes</Button>
                                    </div>
                                </Card.Body>

                                <Accordion>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body id={`divDetalhes${index}`} style={{ display: 'none' }}>
                                            <h3>Tentativas de contato</h3>
                                            {[...Array(5)].map((_, idx) => (
                                                <span key={idx}>dd/mm/aa - Tentativa de contato via</span>
                                            ))}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </section>
        </Container>
    );
}

export default Agendamentos;
