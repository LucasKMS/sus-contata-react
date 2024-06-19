import React from 'react';
import { Container, Row, Col, Form, Button, Card, Accordion } from 'react-bootstrap';

import styles from './Agendamentos.module.css'

function Agendamentos() {
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
                    <Form.Control type="text" placeholder="Filtrar." className='mr-0'/>
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
                        
                        {[1, 2, 3].map((item) => (
                            <Card key={item} className="mb-3">
                                <Card.Body>
                                    <Card.Title className="titulo-agendamento" id={`agendamento${item}`}></Card.Title>
                                    <Card.Text>
                                        <pre id={`descricao${item}`}></pre>
                                    </Card.Text>
                                    <div className="confirmacao">
                                        <Button variant="success" className="confirmar" id={`confirmar${item}`}>Confirmar</Button>
                                        <Button variant="danger" className="cancelar" id={`cancelar${item}`}>Cancelar</Button>
                                        <Button variant="info" className="detalhes" id={`detalhes${item}`}>Detalhes</Button>
                                    </div>
                                </Card.Body>

                                <Accordion>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body id={`divDetalhes${item}`} style={{ display: 'none' }}>
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
