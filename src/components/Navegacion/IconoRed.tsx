import React from 'react';
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Icono.module.css';
const IconoRed = () => {
    return <div className={styles.icono}><a href='https://www.facebook.com/delfinadoming/'><img src={require('../../assets/img/logo_fb.png')} /></a></div>
}

export default IconoRed;