import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logoSvg from '../../assets/logo_sus_contata.png'; 

function NavBar() {
    return (
        <nav className={`mb-4${styles.navbar} ${styles['custom-nav']}`}>
            
            <div id="gradient-menu" className={styles['gradient-menu']}>
                <div className={styles.logoMenu}>
                    <Link to='/'>
                        <img src={logoSvg} alt="SUS-Contata_logo" className={styles.imagem} />
                    </Link>
                </div>
                <ul className={styles['list-unstyled']}>
                    <li className={styles['list-item']}>
                        <Link to='/' className={styles['nav-link']}>Home</Link>
                    </li>
                    <li className={styles['list-item']}>
                        <Link to='/agendamentos' className={styles['nav-link']}>Agendamentos</Link>
                    </li>
                    <li className={styles['list-item']}>
                        <Link to='/meuperfil' className={styles['nav-link']}>Meu Perfil</Link>
                    </li>
                    <li className={styles['list-item']}>
                        <Link to='/cadastros' className={styles['nav-link']}>Cadastros</Link>
                    </li>
                    <li className={styles['list-item']}>
                        <Link to='/login' className={styles['nav-link']}>Login/Logoff</Link>
                    </li>  
                </ul> 
            </div>
        </nav>
    );
}

export default NavBar;
