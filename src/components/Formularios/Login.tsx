import React, { useState } from 'react';
import styles from './Formularios.module.css';
import { login } from '../../api/auth';
interface LoginProps {
    onLoginSuccess: () => void;
}

const Login = ({onLoginSuccess}: LoginProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onLoginClick = async () => {
        let response = await login({username: username, password: password});
        if (response.statusCode === 200){
            onLoginSuccess();
        }
        else {
            alert("Usuario o clave incorrecto");
        }
    }
    return (<div className={styles.contenedorLogin}>
        <h3>Mi Portfolio Web</h3>
        <h4>Argentina Programa</h4>
        <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>Usuario</span>
            </div>
            <div className={styles.texto}>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
        </div>
        <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>Contraseña</span>
            </div>
            <div className={styles.texto}>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>

        <div className={styles.fila}>
            <div className={styles.boton}>
                <button onClick={onLoginClick}>Iniciar Sesión</button>
            </div>
        </div>
    </div>)
}

export default Login;