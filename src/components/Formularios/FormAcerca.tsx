import React, { useState } from 'react';
import styles from './Formularios.module.css';
import { InfoBasica } from '../../types';
import { updateInfoBasica } from '../../api/infoBasica';
interface FormAcercaProps {
    infoBasica: InfoBasica;
    onSuccess: () => void;
}
const FormAcerca = ({infoBasica, onSuccess}: FormAcercaProps) => {
    const [nombre, setNombre] = useState(infoBasica.nombre);
    const [cargo, setCargo] = useState(infoBasica.cargo);
    const [acerca, setAcerca] = useState(infoBasica.acerca);

    const onSubmitClick = async () => {
        let response = await updateInfoBasica(infoBasica.id, {nombre, cargo, acerca});
        if (response.statusCode === 200){
            onSuccess();
        }
        else {
            alert("Se ha producido un error al guardar");
        }
    }

    return (<div>
        <h4>Información Básica</h4>
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
                <span>Cargo</span>
            </div>
            <div className={styles.texto}>
                <input type='text' value={cargo} onChange={(e) => setCargo(e.target.value)} />
            </div>
        </div>
        <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>Acerca de</span>
            </div>
            <div className={styles.texto}>
                <textarea value={cargo} onChange={(e) => setAcerca(e.target.value)} />
            </div>
        </div>

        <div className={styles.fila}>
            <div className={styles.boton}>
                <button onClick={onSubmitClick}>Guardar</button>
            </div>
        </div>
    </div>);
}

export default FormAcerca;