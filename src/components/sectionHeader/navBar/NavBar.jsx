import React from 'react'
import styles  from './StylesNavBar.module.css'

export const NavBar = () => {
   return (
      <div className={styles.fieldMenu}>
         <ul>
            <li className={`${styles.currentItem} ${styles.mark}`}><a href="#home">HOME</a></li>
            <li className={`${styles.currentItem} `}><a href="#about">SOBRE</a></li>
            <li className={styles.currentItem}><a href="#projects">PROJETOS</a></li>
            <li className={styles.currentItem}><a href="#contact">CONTATO</a></li>
         </ul>
      </div>
   )
}
