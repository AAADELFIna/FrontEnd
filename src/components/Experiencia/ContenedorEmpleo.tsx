import React, { useState } from 'react';
import Modal from 'react-modal'
import LogoEmpleo from "./LogoEmpleo";
import DetalleEmpleo, {DetalleEmpleoProps} from "./DetalleEmpleo";
import styles from './Experiencia.module.css';
import BotonesAccion from '../BotonesAccion/BotonesAccion';
import FormExperiencia from '../Formularios/FormExperiencia';
import { deleteExperiencia } from '../../api/experiencias';
type ContenedorEmpleoProps = DetalleEmpleoProps & {editable: boolean; onChange: () => void};
const ContenedorEmpleo = ({data, editable, onChange}: ContenedorEmpleoProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const onEditClick = () => {
        setModalOpen(true);
    }

    const onDeleteClick = async () => {
        if (confirm("¿Desea eliminar el registro?")){
            let response = await deleteExperiencia(data.id);
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
                    <FormExperiencia experiencia={data} onSuccess={onSuccess} />
                </Modal>
            </>
        )}
        <LogoEmpleo url={data.urlImagen} />
        <DetalleEmpleo data={data} />
    </div>
}

export default ContenedorEmpleo;