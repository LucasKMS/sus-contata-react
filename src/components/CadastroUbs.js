import { useState } from 'react';

import axios from 'axios';

import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
// import styles from './CadastroUbs.module.css'

function CadastroUbs() {
    const [nomeUnidade, setNomeUnidade] = useState('');
    const [dataCadastro, setDataCadastro] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [uf, setUf] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
            

    async function handleSubmit(event) {
        event.preventDefault();
    
        const data = {
            nomeUnidade,
            cep,
            endereco: {
                logradouro,
                numero,
                bairro,
                uf
            },
            dataCadastro,
        };
    
        try {
            const response = await axios.post('http://localhost:3000/api/unidade', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            console.log('Resposta:', response.data);
    
            setNomeUnidade('');
            setDataCadastro('');
            setCep('');
            setLogradouro('');
            setNumero('');
            setBairro('');
            setUf('');
            setLocalidade('');
            setLatitude('');
            setLongitude('');
    
        } catch (error) {
            console.error('Erro:', error);
        }
    }
    

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h4 className="text-primary mt-3">Cadastro de Unidades Básicas de Saúde</h4>
                        
                            <Form id="formUnidades" onSubmit={handleSubmit} className="m-auto" style={{ maxWidth: '600px' }}>
                                <hr className="my-4" />
                                <Form.Group className="mb-3" controlId="nome_unidade">
                                    <Form.Label>Nome da Unidade</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="nome_unidade" 
                                    required 
                                    maxLength="30" 
                                    autoFocus 
                                    value={nomeUnidade}
                                    onChange={event => setNomeUnidade(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="data-de-cadastro">
                                    <Form.Label>Data de Cadastro</Form.Label>
                                    <Form.Control 
                                    type="date" 
                                    name="data-de-cadastro" 
                                    required 
                                    value={dataCadastro}
                                    onChange={event => setDataCadastro(event.target.value)}
                                    />
                                </Form.Group>

                                <hr className="bg-transparent border-0 py-1" />
                                <Form.Group className="mb-3" controlId="cep">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="cep" 
                                    required 
                                    maxLength="8" 
                                    value={cep}
                                    onChange={event => setCep(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="logradouro">
                                    <Form.Label>Logradouro</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="logradouro" 
                                    required 
                                    value={logradouro}
                                    onChange={event => setLogradouro(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="numero">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    name="numero" 
                                    required 
                                    value={numero}
                                    onChange={event => setNumero(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="complemento">
                                    <Form.Label>Complemento</Form.Label>
                                    <Form.Control 
                                    as="textarea" 
                                    name="complemento" 
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="bairro">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="bairro" 
                                    required 
                                    value={bairro}
                                    onChange={event => setBairro(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="localidade">
                                    <Form.Label>Localidade</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="localidade" 
                                    required 
                                    value={localidade}
                                    onChange={event => setLocalidade(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="unidade-da-federacao">
                                    <Form.Label>Unidade da Federação</Form.Label>
                                    <Form.Select required value={uf} onChange={event => setUf(event.target.value)}>
                                        <option selected >Selecione...</option>
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
                                    <Form.Control 
                                    type="number" 
                                    name="latitude" 
                                    min="-90" 
                                    max="90" 
                                    step="any" 
                                    required 
                                    value={latitude}
                                    onChange={event => setLatitude(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="longitude">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    name="longitude" 
                                    min="-180" 
                                    max="180" 
                                    step="any" 
                                    required 
                                    value={longitude}
                                    onChange={event => setLongitude(event.target.value)}
                                    />
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
        </>
    );
}

export default CadastroUbs;
