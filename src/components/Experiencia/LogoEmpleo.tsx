import React from 'react';
import styles from './Experiencia.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
// propiedades que va a recibir el componente del logo
// url con el link de la imagen que se va a traer de internet
interface LogoEmpleoProps {
    url?: string; // opcional, por el signo ?
}
const LogoEmpleo = ({url}: LogoEmpleoProps) => {
    // si hay una imagen, mostrarla
    return (
        <div className={styles.logoEmpresa}>
            {url ? 
            <img src={url}/> : 
            <div className={styles.icono}><FontAwesomeIcon size='5x' icon={faBookOpenReader} /></div>
            }
        </div>
    );
}

export default LogoEmpleo;
