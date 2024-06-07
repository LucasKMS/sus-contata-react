import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CadastroUBS from '../components/CadastroUbs';
import CadastroNovoUsuario from '../components/CadastroNovoUsuario';

function Cadastro() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'CadastroUBS':
        return <CadastroUBS />;
      case 'CadastroNovoUsuario':
        return <CadastroNovoUsuario />;
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
                className="mb-2 w-10"
                onClick={() => setActiveComponent('CadastroUBS')}
                > Cadastrar Nova UBS
            </Button>

            <Button
                variant="secondary"
                className="mb-2"
                onClick={() => setActiveComponent('CadastroNovoUsuario')}
                >
                Cadastrar Novo Paciente
            </Button>
        </div>
      {renderComponent()}
    </div>
  );
}

export default Cadastro;
