import React from 'react';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './BotonesAccion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface BotonesAccionProps {
    onEditClick: () => void;
    onDeleteClick: () => void;
}
const BotonesAccion = ({onEditClick, onDeleteClick}: BotonesAccionProps) => {
    return (
        <div className={styles.botonesAccion}>
            <div className={styles.boton} onClick={onEditClick}>
                <FontAwesomeIcon size='1x' icon={faPencil} />
            </div>
            <div className={styles.boton} onClick={onDeleteClick}>
                <FontAwesomeIcon size='1x' icon={faXmark} />
            </div>
        </div>
    );
}

export default BotonesAccion;