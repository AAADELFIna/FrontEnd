import React from 'react';
import styles from './Acerca.module.css';
interface FotoPerfilProps {
    nombre: string;
    cargo: string;
}
const FotoPerfil = (props: FotoPerfilProps) => {
    return (
    <div className={styles.fotoPerfil}>
        <img src={require('../../assets/img/foto_perfil2.jpeg')} />
        <span className={styles.nombrePerfil}>{props.nombre}</span>
        <span className={styles.puesto}>{props.cargo}</span>
    </div>
    );
}

export default FotoPerfil;