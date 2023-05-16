import React from 'react';
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Icono.module.css';
const IconoMail = () => {
    return <div className={styles.icono}><a href='mailto:delfinadoming@gmail.com'><FontAwesomeIcon size='2x' icon={faAt} /></a></div>
}

export default IconoMail;