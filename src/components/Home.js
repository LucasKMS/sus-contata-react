import logoSUSContata from '../assets/logo_sus_contata.png'
import fotoUBS1 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/1 - UBS VILA NOVA.jpg'
import fotoUBS2 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/2 - ubs VILA GARCIA.jpg'
import fotoUBS3 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/3 - UBS ITAPEVA.jpg'
import fotoUBS4 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/4 - UBS BARRA FUNDA.jpg'
import fotoUBS5 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/5 - UBS NOVO MUNDO.jpg'
import fotoUBS6 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/6 - ubs vila amorim 2.jpg'
import fotoUBS7 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/7 - ubs archila.jpg'
import fotoUBS8 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/8 - ubs jardim serrano.jpg'
import fotoUBS9 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/9 - UBS JARDIM CLARICE.jpg'
import fotoUBS10 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/10 - UBS PARQUE BELA VISTA.jpg'
import fotoUBS11 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/11 - ubsrioacima2.jpg'
import fotoUBS12 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/12 - ESF GREEN VALLEY.jpg'
import fotoUBS13 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/13 - UNIDADE DE SAÚDE DA FAMILIA JARDIM TATIANA.jpg'
import fotoUBS14 from '../assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/14 - ESF PROMORAR.jpg'

import styles from './Home.module.css'



function Home() {
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
                    <button id="conecte-sus">Conecte SUS</button>
                <div/>

                <div className={styles.select_box}>
                    <select aria-label="Default select example">
                        <option selected disabled>Selecione a UBS</option>
                        <option value="ubs1">UBS Vila Nova</option>
                        <option value="ubs2">UBS Vila Garcia</option>
                        <option value="ubs3">UBS Itapeva</option>
                        <option value="ubs4">UBS Barra Funda</option>
                        <option value="ubs5">UBS Jardim Novo Mundo</option>
                        <option value="ubs6">UBS Vila Amorim</option>
                        <option value="ubs7">UBS Jardim Archila</option>
                        <option value="ubs8">UBS Jardim Serrano</option>
                        <option value="ubs9">UBS Jardim Clarice</option>
                        <option value="ubs10">UBS Parque Bela Vista</option>
                        <option value="ubs11">UBS Rio Acima</option>
                        <option value="ubs12">UNIDADE Green Valley</option>
                        <option value="ubs13">UNIDADE DE SAUDE DA FAMILIA JD TATIANA</option>
                        <option value="ubs14">ESF PROMORAR</option>
                    </select>
                </div>
            </div>
         </div>

        <div id="carousel-map" className={styles.carouselMap}>
            <div className={styles.carousel}>
            <div id="carouselUBSs" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel_inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={fotoUBS1}
                        className={`${styles.imgCarousel} d-block img-carousel ubs1`} alt="..." id="c-ubs1" />
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS2}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs2" />
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS3}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs3" />
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS4}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs4" />
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS5}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs5" />
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS6}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs6" />
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS7}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs7" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS8}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs8" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS9}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs9" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS10}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs10" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS11}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs11" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS12}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs12" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS13}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs13" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={fotoUBS14}
                        className={`${styles.imgCarousel} d-block img-carousel`} alt="..." id="c-ubs14" />
                    </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselUBSs" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselUBSs" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div id="mapa">
            <img className={`${styles.imgCarousel} img-carousel`} src="./assets/ENDEREÇOS E FOTOS DAS UBS DE VOTORANTIM/Endereços/UBS-1.png" alt=""
                id="m-ubs" />
            </div>
        </div>
    </div>
</>
)
}

export default Home