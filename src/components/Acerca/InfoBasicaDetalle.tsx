import React from 'react';
import styles from './Acerca.module.css';
interface InfoBasicaDetalleProps {
    descripcion: string;
    
}
const InfoBasicaDetalle = (props: InfoBasicaDetalleProps) => {
    return (
    <div className={styles.infoBasica}>
        <h3>Acerca de mí</h3>
        <p>{props.descripcion}</p>
    </div>
    );
}

export default InfoBasicaDetalle;