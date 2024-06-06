import React, { useState } from 'react';
import { Carousel, Form } from 'react-bootstrap';
import logoSUSContata from '../assets/logo_sus_contata.png';
import fotoUBS1 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/1 - UBS VILA NOVA.jpg';
import fotoUBS2 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/2 - ubs VILA GARCIA.jpg';
import fotoUBS3 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/3 - UBS ITAPEVA.jpg';
import fotoUBS4 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/4 - UBS BARRA FUNDA.jpg';
import fotoUBS5 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/5 - UBS NOVO MUNDO.jpg';
import fotoUBS6 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/6 - ubs vila amorim 2.jpg';
import fotoUBS7 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/7 - ubs archila.jpg';
import fotoUBS8 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/8 - ubs jardim serrano.jpg';
import fotoUBS9 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/9 - UBS JARDIM CLARICE.jpg';
import fotoUBS10 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/10 - UBS PARQUE BELA VISTA.jpg';
import fotoUBS11 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/11 - ubsrioacima2.jpg';
import fotoUBS12 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/12 - ESF GREEN VALLEY.jpg';
import fotoUBS13 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/13 - UNIDADE DE SAÚDE DA FAMILIA JARDIM TATIANA.jpg';
import fotoUBS14 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/14 - ESF PROMORAR.jpg';
import { useNavigate } from 'react-router-dom'

import styles from './Home.module.css';

const UBSCarousel = ({ ubsList, selectedUBS, handleSelectChange }) => (
  <div>
    <Form.Select aria-label="Selecione a UBS" onChange={handleSelectChange} className={styles.Form_Select}>
      <option value="">Selecione a UBS</option>
      {ubsList.map((ubs) => (
        <option key={ubs.value} value={ubs.value}>
          {ubs.label}
        </option>
      ))}
    </Form.Select>

    {selectedUBS && (
  <div>
    <Carousel activeIndex={ubsList.findIndex(ubs => ubs.value === selectedUBS)} controls={false} indicators={false} className={styles.Carousel}>
      {ubsList.map((ubs) => (
        <Carousel.Item key={ubs.value} className={styles.CarouselItem}>
          <img
            className="d-block w-100 border-2"
            src={ubs.imgSrc}
            alt={ubs.label}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    <div>
        <p><br/>
        <b> {ubsList.find(ubs => ubs.value === selectedUBS).label}</b> 
        </p>
        <p>
        📌<b>Endereço:</b> {ubsList.find(ubs => ubs.value === selectedUBS).address.street}
        <br/>🏙️<b>Cidade:</b> {ubsList.find(ubs => ubs.value === selectedUBS).address.city}
        <br/>📫 <b>CEP:</b> {ubsList.find(ubs => ubs.value === selectedUBS).address.postalCode}
        <br/>☎️ <b>Telefone:</b> {ubsList.find(ubs => ubs.value === selectedUBS).address.contact}
        </p>
    </div>
  </div>
)}
</div>
);

function Home() {
  const [selectedUBS, setSelectedUBS] = useState('');

  const handleSelectChange = (event) => {
    setSelectedUBS(event.target.value);
  };

  const ubsList = [
    { value: 'ubs1', label: 'UBS Vila Nova', imgSrc: fotoUBS1, 
        address: {
            street: 'Av. Pedro Augusto Rangel, 1925 - Nova Votorantim',
            city: 'Votorantim SP',
            postalCode: '18113-140',
            contact: '(15) 3243-3827'
        } 
    },
    { value: 'ubs2', label: 'UBS Vila Garcia', imgSrc: fotoUBS2,
    address: {
        street: 'Av. Izabel Ferreira Coelho, 271 - Jardim Daniel Antonio',
        city: 'Votorantim SP',
        postalCode: '18112-390',
        contact: '(15) 3243-3570'
    } 
     },
    { value: 'ubs3', label: 'UBS Itapeva', imgSrc: fotoUBS3,
    address: {
        street: 'Rua João Santiago Figueira, 200 - Itapeva',
        city: 'Votorantim SP',
        postalCode: '18117-650',
        contact: '(15) 3242-1403'
    } 
     },
    { value: 'ubs4', label: 'UBS Barra Funda', imgSrc: fotoUBS4,
    address: {
        street: 'Rua Lopes Chaves, S/N - Barra Funda',
        city: 'Votorantim SP',
        postalCode: '18114-320',
        contact: '(15) 3343-6962'
    } 
     },
    { value: 'ubs5', label: 'UBS Jardim Novo Mundo', imgSrc: fotoUBS5,
    address: {
        street: 'Rua Abílio Maia, 46 - Jardim Novo Mundo',
        city: 'Votorantim SP',
        postalCode: '18119-040',
        contact: '(15) 3243-6006'
    } 
     },
    { value: 'ubs6', label: 'UBS Vila Amorim', imgSrc: fotoUBS6,
        address: {
            street: 'Rua José Antônio de Mello, 81 - Vila Amorim',
            city: 'Votorantim SP',
            postalCode: '18115-150',
            contact: '(15) 3242-5393'
        } 
     },
    { value: 'ubs7', label: 'UBS Jardim Archila', imgSrc: fotoUBS7,
        address: {
            street: 'Rua Lázara Bueno de Arruda - Jardim Archila',
            city: 'Votorantim SP',
            postalCode: '18111-660',
            contact: '(15) 3247-3012'
        } 
     },
    { value: 'ubs8', label: 'UBS Jardim Serrano', imgSrc: fotoUBS8,
        address: {
            street: 'Rua Francisco Lopes de Almeida, 76 - Jardim Palmira',
            city: 'Votorantim SP',
            postalCode: '18115-550',
            contact: '(15) 3242-1390'
        } 
     },
    { value: 'ubs9', label: 'UBS Jardim Clarice', imgSrc: fotoUBS9,
        address: {
            street: 'Rua Mercedes Nardi Arcuri, S/N - Jardim Clarice',
            city: 'Votorantim SP',
            postalCode: '18116-575',
            contact: '(15) 3243-3446'
        } 
     },
    { value: 'ubs10', label: 'UBS Parque Bela Vista', imgSrc: fotoUBS10,
        address: {
            street: 'Av. São João, 867 - Centro',
            city: 'Votorantim SP',
            postalCode: '18110-210',
            contact: '(15) 3243-2605'
        } 
     },
    { value: 'ubs11', label: 'UBS Rio Acima', imgSrc: fotoUBS11,
        address: {
            street: 'Av. Octávio Augusto Rangel, 1282 - Jardim Toledo',
            city: 'Votorantim SP',
            postalCode: '18112-056',
            contact: '(15) 3243-1513'
        } 
     },
    { value: 'ubs12', label: 'UNIDADE Green Valley', imgSrc: fotoUBS12,
        address: {
            street: 'Rua José Raimundo da Silva - Green Valley',
            city: 'Votorantim SP',
            postalCode: '18119-325',
            contact: '(15) 3343-3854'
        } 
     },
    { value: 'ubs13', label: 'UNIDADE DE SAUDE DA FAMILIA JD TATIANA', imgSrc: fotoUBS13,
        address: {
            street: 'Rua Adão Martins - Jardim Tatiana',
            city: 'Votorantim SP',
            postalCode: '18119-165',
            contact: '(15) 3243-3762'
        } 
     },
    { value: 'ubs14', label: 'ESF PROMORAR', imgSrc: fotoUBS14,
        address: {
            street: 'Rua Boaventura Maganhato, 138, bairro São Matheus',
            city: 'Votorantim SP',
            postalCode: '18113-720',
            contact: '(15) 3243-2228'
        } 
     }
  ];

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/login')}

  return (
    <>
      <div id="login" className={styles.login}>
        <div id="principal">
          <div id="logo2" className={styles.logo2}>
            <figure>
              <img className={styles.imgIcones} src={logoSUSContata} alt="SUSContata" />
            </figure>
          </div>

          <div id="subtitulo" className={styles.subtitulo}>
            <h2>Serviço de comunicação com o cidadão</h2>
          </div>

          <div id="descricao" className={styles.descricao}>
            <p className={`${styles.textCustom} text-custom`}>
              Agora ficou mais fácil acompanhar as consultas, exames e procedimentos agendados nas UBS's e
              unidades hospitalares.
              <br />
              <br />
              O SUS Contata é o serviço de comunicação com o usuário do SUS que o mantém informado dos
              agendamentos efetuados nas unidades de saúde, possibilitando maior organização e buscando
              melhorar o atendimento do sistema de saúde.
              <br />
              <br />
              Conecte-se agora e visualize seus agendamentos e requisitos para procedimentos.
            </p>
          </div>

          <div id="botao" className={styles.botao}>
            <button id="conecte-sus" onClick={handleClick}>Conecte SUS</button>
          </div>

          <div className={styles.select_box}>
            <UBSCarousel ubsList={ubsList} selectedUBS={selectedUBS} handleSelectChange={handleSelectChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
