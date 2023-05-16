import React from 'react';
import { Habilidad } from '../../types';
import styles from './Habilidades.module.css';
export interface DetalleHabilidadProps {
    data: Habilidad // un objeto. Su estructura se puede ver haciendo Ctrl+Click sobre "Habilidad"
}
const DetalleHabilidad = ({data}: DetalleHabilidadProps) => {
    return <div className={styles.nombre}><span>{data.nombre}</span></div>
}

export default DetalleHabilidad;