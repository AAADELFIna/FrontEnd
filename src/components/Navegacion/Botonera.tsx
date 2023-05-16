import React from 'react';
import styles from './Botonera.module.css';
interface BotoneraProps {
    onClick: () => void; // funcion que va a recibir desde la BarraNavegacion, para abrir el modal de login
    isLoggedIn: boolean;
}
const Botonera = ({onClick, isLoggedIn}: BotoneraProps) => {
    return <div>
        <button className={styles.botonLogin} onClick={onClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
}

export default Botonera;