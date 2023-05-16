import React, { useState } from 'react';
import Modal from 'react-modal';
import DetalleHabilidad, { DetalleHabilidadProps } from "./DetalleHabilidad";
import IndicadorHabilidad from "./IndicadorHabilidad";
import styles from './Habilidades.module.css';
import FormHabilidad from '../Formularios/FormHabilidad';
import { deleteHabilidad } from '../../api/habilidades';
import BotonesAccion from '../BotonesAccion/BotonesAccion';
type ContenedorHabilidadProps = DetalleHabilidadProps & {editable: boolean; onChange: () => void};
const ContenedorHabilidad = ({data, editable, onChange}: ContenedorHabilidadProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const onEditClick = () => {
        setModalOpen(true);
    }

    const onDeleteClick = async () => {
        if (confirm("¿Desea eliminar el registro?")){
            let response = await deleteHabilidad(data.id);
            setModalOpen(false);
            if (response.statusCode === 200){
                onChange();
            }
            else {
                alert("Se ha producido un error al eliminar");
            }
        }
    }

    const onSuccess = () => {
        setModalOpen(false);
        onChange();
    }

    const onModalClose = () => {
        setModalOpen(false); // para cerrar la modal
    }
    return <div className={styles.contenedor}>
        {editable && (
            <>
                <BotonesAccion onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
                <Modal isOpen={isModalOpen} onRequestClose={onModalClose}>
                    <FormHabilidad habilidad={data} onSuccess={onSuccess} />
                </Modal>
            </>
        )}
        <IndicadorHabilidad data={data} />
        <DetalleHabilidad data={data} />
    </div>
}

export default ContenedorHabilidad;