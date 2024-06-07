import React from 'react';
import { Container, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
// import styles from './CadastroUbs.module.css'

function CadastroUbs() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h4 className="text-primary mt-3">Cadastro de Unidades Básicas de Saúde</h4>
                        
                            <Form id="formUnidades" method="post" className="m-auto" style={{ maxWidth: '600px' }}>
                                <hr className="my-4" />
                                <Form.Group className="mb-3" controlId="nome_unidade">
                                    <Form.Label>Nome da Unidade</Form.Label>
                                    <Form.Control type="text" name="nome_unidade" required maxLength="30" autoFocus />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="data-de-cadastro">
                                    <Form.Label>Data de Cadastro</Form.Label>
                                    <Form.Control type="date" name="data-de-cadastro" required />
                                </Form.Group>
                                <hr className="bg-transparent border-0 py-1" />
                                <Form.Group className="mb-3" controlId="cep">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control type="text" name="cep" required maxLength="8" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="logradouro">
                                    <Form.Label>Logradouro</Form.Label>
                                    <Form.Control type="text" name="logradouro" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="numero">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control type="number" name="numero" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="complemento">
                                    <Form.Label>Complemento</Form.Label>
                                    <Form.Control as="textarea" name="complemento" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="bairro">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control type="text" name="bairro" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="localidade">
                                    <Form.Label>Localidade</Form.Label>
                                    <Form.Control type="text" name="localidade" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="unidade-da-federacao">
                                    <Form.Label>Unidade da Federação</Form.Label>
                                    <Form.Select required>
                                        <option value="" selected>Selecione...</option>
                                        <option>RS</option>
                                        <option>SC</option>
                                        <option>PR</option>
                                        <option>SP</option>
                                        <option>RJ</option>
                                        <option>ES</option>
                                        <option>MG</option>
                                        <option>MS</option>
                                        <option>MT</option>
                                        <option>GO</option>
                                        <option>DF</option>
                                        <option>BA</option>
                                        <option>SE</option>
                                        <option>AL</option>
                                        <option>PE</option>
                                        <option>PB</option>
                                        <option>RN</option>
                                        <option>CE</option>
                                        <option>PI</option>
                                        <option>MA</option>
                                        <option>TO</option>
                                        <option>PA</option>
                                        <option>AP</option>
                                        <option>RR</option>
                                        <option>AM</option>
                                        <option>RO</option>
                                        <option>AC</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="latitude">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="number" name="latitude" min="-90" max="90" step="any" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="longitude">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="number" name="longitude" min="-180" max="180" step="any" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Button className="btn btn-primary" name="salvar" type="submit">💾Salvar</Button>
                                </Form.Group>
                            </Form>
                        
                    </Col>
            
                    <Col md={6}>
                        <h4 className="text-primary mt-3">Unidades Cadastradas</h4>
                        <hr className="my-4" />
                        <Table bordered hover>
                            <thead>
                                <tr className="table-info">
                                    <th>Nome Unidade</th>
                                    <th>Endereço</th>
                                    <th>Data Cadastro</th>
                                    <th>Geo Localização</th>
                                    <th>Opções</th>
                                </tr>
                            </thead>
                            <tbody id="dadosTabela"></tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

            {/* Modal Mensagem */}
            <Modal show={false} id="modalMensagem" tabindex="-1" role="dialog">
                <Modal.Dialog className="bg-danger">
                    <Modal.Content>
                        <Modal.Header>
                            <Modal.Title className="text-danger">Mensagem</Modal.Title>
                            <Button variant="close" data-bs-dismiss="modal" aria-label="Fechar"></Button>
                        </Modal.Header>
                        <Modal.Body>
                            <p id="mensagem"></p>
                        </Modal.Body>
                    </Modal.Content>
                </Modal.Dialog>
            </Modal>

            {/* Modal Edição de Unidade */}
            <Modal show={false} id="modalEditarUnidade" tabindex="-1" aria-labelledby="modalEditarUnidadeLabel" aria-hidden="true">
                <Modal.Dialog centered>
                    <Modal.Content>
                        <Modal.Header>
                            <Modal.Title id="modalEditarUnidadeLabel">Editar Unidade</Modal.Title>
                            <Button variant="close" data-bs-dismiss="modal" aria-label="Fechar"></Button>
                        </Modal.Header>
                        <Modal.Body>
                            <Form id="formEditarUnidade">
                                <Form.Group className="mb-3" controlId="editar_nome_unidade">
                                    <Form.Label>Nome da Unidade</Form.Label>
                                    <Form.Control type="text" name="editar_nome_unidade" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="editar_data_de_cadastro">
                                    <Form.Label>Data de Cadastro</Form.Label>
                                    <Form.Control type="date" name="editar_data_de_cadastro" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="editar_cep">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control type="text" name="editar_cep" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="editar_logradouro">
                                    <Form.Label>Logradouro</Form.Label>
                                    <Form.Control type="text" name="editar_logradouro" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="editar_numero">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control type="number" name="editar_numero" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="editar_complemento">
                                    <Form.Label>Complemento</Form.Label>
                                    <Form.Control as="textarea" name="editar_complemento" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="editar_bairro">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control type="text" name="editar_bairro" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="editar_localidade">
                                    <Form.Label>Localidade</Form.Label>
                                    <Form.Control type="text" name="editar_localidade" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="editar_unidade_da_federacao">
                                    <Form.Label>Unidade da Federação</Form.Label>
                                    <Form.Select name="editar_unidade_da_federacao">
                                        <option value="">Selecione...</option>
                                        <option>RS</option>
                                        <option>SC</option>
                                        <option>PR</option>
                                        <option>SP</option>
                                        <option>RJ</option>
                                        <option>ES</option>
                                        <option>MG</option>
                                        <option>MS</option>
                                        <option>MT</option>
                                        <option>GO</option>
                                        <option>DF</option>
                                        <option>BA</option>
                                        <option>SE</option>
                                        <option>AL</option>
                                        <option>PE</option>
                                        <option>PB</option>
                                        <option>RN</option>
                                        <option>CE</option>
                                        <option>PI</option>
                                        <option>MA</option>
                                        <option>TO</option>
                                        <option>PA</option>
                                        <option>AP</option>
                                        <option>RR</option>
                                        <option>AM</option>
                                        <option>RO</option>
                                        <option>AC</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="editar_latitude">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="number" name="editar_latitude" min="-90" max="90" step="any" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="editar_longitude">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="number" name="editar_longitude" min="-180" max="180" step="any" />
                                </Form.Group>
                                <Button variant="primary" type="submit">Salvar Alterações</Button>
                            </Form>
                        </Modal.Body>
                    </Modal.Content>
                </Modal.Dialog>
            </Modal>
        </>
    );
}

export default CadastroUbs;
