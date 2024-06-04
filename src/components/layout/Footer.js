import './Footer.module.css';
import  apoiador1  from "../../assets/apoiadores/apoiador1.png";
import  apoiador2  from "../../assets/apoiadores/apoiador2.png";
import  apoiador3 from "../../assets/apoiadores/apoiador3.png";
import  apoiador4 from "../../assets/apoiadores/apoiador4.png";
import  facebook from "../../assets/Facebook_f_logo_(2019).svg.webp"
import  instagram from "../../assets/instagram-icon-free-png.webp"
import  linkedin from "../../assets/linkedin-logo-png-1826.png"

import { Link } from 'react-router-dom';

function Footer() {
    return (
            <div className="card d-flex flex-row ms-4 me-4 justify-content-between">
                <ul id="menu-footer" className="nav flex-column ms-4 flex-shrink-0">
                    <li className="me-3">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="me-3">
                        <Link to='/agendamentos'>Agendamentos</Link>
                    </li>
                    <li className="me-3">
                        <Link to='/meuperfil'>Meu Perfil</Link>
                    </li>
                    <li className="me-3">
                        <Link to='/login'>Login/Logoff</Link>
                    </li>
                </ul>

                <div id="apoiadores" className="bg-light rounded d-flex flex-sm-shrink-1 flex-nowrap">
                    <img src= {apoiador1} alt="apoiador1" className="apoiadores"/>
                    <img src= {apoiador2} alt="apoiador2" className="apoiadores"/>
                    <img src= {apoiador3} alt="apoiador3" className="apoiadores"/>
                    <img src= {apoiador4} alt="apoiador4" className="apoiadores"/>
                </div>

                <div id="contatos">
                    <ul>
                        <li>
                            <a target="_blank" href="https://facebook.com">
                                <img src={facebook} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://instagram.com">
                                    <img src={instagram} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com">
                                <img src={linkedin} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }

export default Footer
