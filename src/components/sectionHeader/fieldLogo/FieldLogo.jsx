import React from 'react'
import styles from './StylesFieldLogo.module.css'

export const FieldLogo = () => {
   return (
      <>
         <div className={styles.fieldLogo}>

            <a href="#home">
               <div className={styles.fieldImgLogo}>
                  <img src="../src/assets/img-logo2.png" alt="image-logo" />
               </div>
               <span>FLAVIO GABRIEL</span>
            </a>

         </div>
      </>
   )
}