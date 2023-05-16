import React, { useState } from 'react';
import styles from './Formularios.module.css';
import { Experiencia } from '../../types';
import { updateExperiencia } from '../../api/experiencias';
interface FormExperienciaProps {
    experiencia: Experiencia;
    onSuccess: () => void;
}
const FormExperiencia = ({experiencia, onSuccess}: FormExperienciaProps) => {
    const tituloFormulario: {[key:string]: string} = {
        laboral: "Experiencia Laboral",
        estudio: "Estudios",
        proyecto: "Proyecto"
    };

    const tituloOrganizacion: {[key:string]: string} = {
        laboral: "Empresa",
        proyecto: "Empresa",
        estudio: "Institución"
    };

    const tituloPuesto: {[key:string]: string} = {
        laboral: "Puesto",
        proyecto: "Puesto",
        estudio: "Carrera"
    };

    const [organizacion, setOrganizacion] = useState(experiencia.organizacion);
    const [titulo, setTitulo] = useState(experiencia.titulo);
    const [urlImagen, setUrlImagen] = useState(experiencia.urlImagen);
    const [periodo, setPeriodo] = useState(experiencia.periodo);
    const [descripcion, setDescripcion] = useState(experiencia.descripcion);
    const [enlace, setEnlace] = useState(experiencia.enlace);

    const onSubmitClick = async () => {
        let response = await updateExperiencia(experiencia.id, {organizacion, titulo, urlImagen, periodo, descripcion, enlace});
        if (response.statusCode === 200){
            onSuccess();
        }
        else {
            alert("Se ha producido un error al guardar");
        }
    };

    return (<div>
        <h4>{tituloFormulario[experiencia.tipo]}</h4>
        <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>{tituloOrganizacion[experiencia.tipo]}</span>
            </div>
            <div className={styles.texto}>
                <input type='text' value={organizacion} onChange={(e) => setOrganizacion(e.target.value)} />
            </div>
        </div>
        <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>{tituloPuesto[experiencia.tipo]}</span>
            </div>
            <div className={styles.texto}>
                <input type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
        </div>

        <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>Periodo</span>
            </div>
            <div className={styles.texto}>
                <input type='text' value={periodo} onChange={(e) => setPeriodo(e.target.value)} />
            </div>
        </div>

        {experiencia.tipo !== 'estudio' && <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>Descripción</span>
            </div>
            <div className={styles.texto}>
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
        </div>}

        <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>URL de Imagen</span>
            </div>
            <div className={styles.texto}>
                <input type='text' value={urlImagen} onChange={(e) => setUrlImagen(e.target.value)} />
            </div>
        </div>

        {experiencia.tipo === 'proyecto' && <div className={styles.fila}>
            <div className={styles.etiqueta}>
                <span>Enlace</span>
            </div>
            <div className={styles.texto}>
                <input type='text' value={enlace} onChange={(e) => setEnlace(e.target.value)} />
            </div>
        </div>}

        <div className={styles.fila}>
            <div className={styles.boton}>
                <button onClick={onSubmitClick}>Guardar</button>
            </div>
        </div>
    </div>);
}

export default FormExperiencia;