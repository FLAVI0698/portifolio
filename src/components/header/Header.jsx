import React from 'react'
import styles from './StylesHeader.module.css'

const Header = () => {

    
    return (
        <>
            <div className={styles.container}>

                <div className={styles.fieldLogo}>

                    <a href="#home">
                        <div className={styles.fieldImgLogo}>
                            <img src="../src/assets/img-logo2.png" alt="image-logo" />
                        </div>
                        <span>FLAVIO GABRIEL</span>
                    </a>

                </div>

                <div className={styles.fieldMenu}>
                    <ul>
                        <li className={`${styles.currentItem} ${styles.mark}`}><a href="#home">HOME</a></li>
                        <li className={`${styles.currentItem} `}><a href="#about">SOBRE</a></li>
                        <li className={styles.currentItem}><a href="#project">PROJETO</a></li>
                        <li className={styles.currentItem}><a href="#skills">HABILIDADES</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export { Header }