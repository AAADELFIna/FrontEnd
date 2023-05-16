import React, { useState } from 'react';
import styles from './Formularios.module.css';
import { Habilidad } from '../../types';
import { updateHabilidad } from '../../api/habilidades';
interface FormHabilidadProps {
    habilidad: Habilidad;
    onSuccess: () => void;
}
const FormHabilidad = ({habilidad, onSuccess}: FormHabilidadProps) => {
    const [nombre, setNombre] = useState(habilidad.nombre);
    const [calificacion, setCalificacion] = useState(habilidad.calificacion);
    const onSubmitClick = async () => {
        let response = await updateHabilidad(habilidad.id, {nombre, calificacion});
        if (response.statusCode === 200){
            onSuccess();
        }
        else {
            alert("Se ha producido un error al guardar");
        }
    }
    return (<div>
        <h4>Habilidad</h4>
        <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>Nombre</span>
            </div>
            <div className={styles.texto}>
                <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
        </div>
        <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>Valor (1-10)</span>
            </div>
            <div className={styles.texto}>
                <input type='text' value={calificacion} onChange={(e) => setCalificacion(Number(e.target.value))} />
            </div>
        </div>

        <div className={styles.fila}>
            <div className={styles.boton}>
                <button onClick={onSubmitClick}>Guardar</button>
            </div>
        </div>
    </div>);
}

export default FormHabilidad;