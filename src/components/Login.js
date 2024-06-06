import styles from './Login.module.css'
import logoSUSContata from '../assets/logo_sus_contata.png';

function Login() {
    return (
        <>
        <div className={styles.principal}>
            <div className={styles.logo}>
                <figure>
                    <img src={logoSUSContata} alt="SUSContata"/>
                </figure>
            </div>
        </div>

        <div className= {styles.botao}>
            <div className= {styles.infoLogin}>
            <label className= {styles.usuario} for="usuario">Usuário</label>
            <input className= {styles.usuario} id="usuario" type="text"/>
            <label className= {styles.senha} for="senha">Senha</label>
            <input className= {styles.senha} id="senha" type="text"/>
        </div>

        <button className={styles.conecta}>Conectar</button>

        <div className={styles.radioLogin}>
            <div className='d-flex'>
                <input type="radio" name="optLogin" className= {styles.cidadao} value="cidadao" />
                <label for="cidadao">Login Cidadão</label>
            </div>
            
            <div className='d-flex'>
                <input type="radio" name="optLogin" className= {styles.administrativo} value="administrativo"/>
                <label for="administrativo">Login Administrativo</label>
            </div>

            <div className='d-flex'>
                <input type="radio" name="optLogin" className= {styles.medico} value="medico"/>
                <label for="administratmedicoivo">Login Médico</label>
            </div>
        </div>
      </div>
    </>
    )
}

export default Login