import React, { useState } from 'react';
import Modal from 'react-modal';
import FotoPerfil from "./FotoPerfil";
import InfoBasicaDetalle from "./InfoBasicaDetalle";
import styles from './Acerca.module.css';
import { InfoBasica } from '../../types';
import BotonesAccion from '../BotonesAccion/BotonesAccion';
import FormAcerca from '../Formularios/FormAcerca';
interface ContenedorAcercaProps {
    data: InfoBasica;
    editable: boolean;
    onChange: () => void;
}
const ContenedorAcerca = ({data, editable, onChange}: ContenedorAcercaProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const onEditClick = () => {
        setModalOpen(true);
    }

    const onDeleteClick = async () => {
        
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
                    <FormAcerca infoBasica={data} onSuccess={onSuccess} />
                </Modal>
            </>
        )}
        <FotoPerfil nombre={data.nombre} cargo={data.cargo} />
        <InfoBasicaDetalle descripcion={data.acerca} />
    </div>
}

export default ContenedorAcerca;