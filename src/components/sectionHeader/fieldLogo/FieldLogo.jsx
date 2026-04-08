import React from 'react'
import styles from './StylesFieldLogo.module.css'
import logoImg from '../../../assets/img-logo2.png'

export const FieldLogo = () => {
   return (
      <>
         <div className={styles.fieldLogo}>

            <a href="#home">
               <div className={styles.fieldImgLogo}>
                  <img src={logoImg} alt="image-logo" />
               </div>
               <span>FLAVIO GABRIEL</span>
            </a>

         </div>
      </>
   )
}