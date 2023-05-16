import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    return <div className={styles.contenedor}>
        <img alt="banner" className={styles.banner} src={require("../assets/img/banner.jpeg")}/>
        </div>
}

export default Banner;