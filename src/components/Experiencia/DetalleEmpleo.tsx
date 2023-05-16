import React from 'react';
import styles from './Experiencia.module.css';
import { Experiencia } from '../../types';
// propiedades que va a recibir el recuadro de detalle
export interface DetalleEmpleoProps {
    data: Experiencia // un objeto. Su estructura se puede ver haciendo Ctrl+Click sobre "Experiencia"
}
const DetalleEmpleo = ({data}: DetalleEmpleoProps) => {
    // presentar cada propiedad del objeto
    return (
        <div className={styles.contenedorDetalle}>
            <h4>{data.titulo}</h4>
            <h5>{data.organizacion} ({data.periodo})</h5>
            <span className='display-linebreak'>{data.descripcion}</span>
            {data.enlace && <a href={data.enlace}>{data.enlace}</a>}
        </div>
    );
}

export default DetalleEmpleo;