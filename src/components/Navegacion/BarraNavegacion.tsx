import React, { useState } from 'react';
import Modal from 'react-modal';
import Botonera from "./Botonera";
import Enlaces from "./Enlaces";
import styles from './BarraNavegacion.module.css';
import LogoInstitucional from './LogoInstitucional';
import Login from '../Formularios/Login';
interface BarraNavegacionProps {
    isLoggedIn: boolean;
    onLoginSuccess: () => void;
}

const BarraNavegacion = ({onLoginSuccess, isLoggedIn}: BarraNavegacionProps) => {
    const [isLoginOpen, setLoginOpen] = useState(false); // variable de estado, inicialmente en false (off)
    const onLoginClick = () => {
        setLoginOpen(true); // coloca a la variable en true, para que la modal sea visible
    }

    const onModalClose = () => {
        setLoginOpen(false); // para cerrar la modal
    }
    return <div className={styles.navegacion}>
        <Modal
            isOpen={isLoginOpen}
            onRequestClose={onModalClose}
            contentLabel="Iniciar Sesión"
            style={{content: {width: "300px", margin: "0 auto", height: "300px", backgroundColor: "#e0c692"}}}
        >
            <Login onLoginSuccess={() => {
                    setLoginOpen(false); 
                    onLoginSuccess();
                }}
            />
        </Modal>
        <LogoInstitucional />
        <Botonera onClick={onLoginClick} isLoggedIn={isLoggedIn} />
        <Enlaces />
    </div>
}

export default BarraNavegacion;