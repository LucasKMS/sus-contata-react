import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import logoSvg from "../../assets/logo_sus_contata.png";

function NavBar() {
    return (
        <nav className="navbar custom-nav mb-4 vw-100 d-flex flex-wrap">
            <div id="gradient-menu" className="gradient-menu d-flex flex-grow-1 flex-row p-3 me-4">
                <Link to='/'>
                    <img src={logoSvg} alt="SUS-Contata_logo" className={styles.imagem}/>
                </Link>
                <ul className="d-flex list-unstyled mb-0">
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
            </div>
        </nav>
    );
}

export default NavBar;
