import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CadastroAgendamento from '../components/CadastroAgendamento';
import CadastroPaciente from './CadastroPaciente';

function Cadastro() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'CadastroPaciente':
        return <CadastroPaciente />;
        case 'CadastroAgendamento':
        return <CadastroAgendamento />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column align-items-center space-between">
      <h2 className="mb-3">Selecionar o tipo de cadastro:</h2>
        <div className="d-flex flex-row align-items-center gap-2">

            <Button
                variant="primary"
                className="mb-2"
                onClick={() => setActiveComponent('CadastroPaciente')}
                >
                Cadastrar Novo Paciente
            </Button>

            <Button
                variant="success"
                className="mb-2"
                onClick={() => setActiveComponent('CadastroAgendamento')}
                >
                Cadastrar Novo Agendamento
            </Button>
        </div>
      {renderComponent()}
    </div>
  );
}

export default Cadastro;
