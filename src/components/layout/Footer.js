import styles from './Footer.module.css';
import apoiador1 from "../../assets/apoiadores/apoiador1.png";
import apoiador2 from "../../assets/apoiadores/apoiador2.png";
import apoiador3 from "../../assets/apoiadores/apoiador3.png";
import apoiador4 from "../../assets/apoiadores/apoiador4.png";
import facebook from "../../assets/Facebook_f_logo_(2019).svg.webp";
import instagram from "../../assets/instagram-icon-free-png.webp";
import linkedin from "../../assets/linkedin-logo-png-1826.png";

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className={styles.card}>
            <ul className={styles.menuFooter}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/agendamentos'>Agendamentos</Link>
                </li>
                <li>
                    <Link to='/meuperfil'>Meu Perfil</Link>
                </li>
                <li>
                    <Link to='/login'>Login/Logoff</Link>
                </li>
            </ul>

            <div className={styles.apoiadores}>
                <img src={apoiador1} alt="apoiador1" />
                <img src={apoiador2} alt="apoiador2" />
                <img src={apoiador3} alt="apoiador3" />
                <img src={apoiador4} alt="apoiador4" />
            </div>

            <div className={styles.contatos}>
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com">
                            <img src={facebook} alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
