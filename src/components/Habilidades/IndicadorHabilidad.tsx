import React from 'react';
import styles from './Habilidades.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { DetalleHabilidadProps } from './DetalleHabilidad';

const colors: {[key: string]: string} = {
    dura: '#426cf5',
    blanda: '#e88a25',
    idioma: '#8122c9'
}

const IndicadorHabilidad = ({data}: DetalleHabilidadProps) => {
    return <div className={styles.habilidad}>
        <CircularProgressbar styles={{text: {fill: 'black'}, path: {stroke: colors[data.tipo]}}} value={data.calificacion} maxValue={10} text={`${data.calificacion}/10`} />
    </div>
}

export default IndicadorHabilidad;