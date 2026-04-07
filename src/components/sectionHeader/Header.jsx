import React from 'react'
import styles from './StylesHeader.module.css'
import { NavBar } from './navBar/NavBar'
import { FieldLogo } from './fieldLogo/FieldLogo'

const Header = () => {

   return (
      <>
         <div className={styles.container}>
            <FieldLogo />
            <NavBar />
         </div>
      </>
   )
}

export { Header }