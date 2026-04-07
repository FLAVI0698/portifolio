import React from 'react'
import styles from './StylesContact.module.css'
import { Form } from './Form/Form';
import { Infor } from './Infor_contact/Infor_contact';





export const Contacts = () => {
  

 
  return (
    <section className={styles.section} id="contact">
      <div className={styles.header}>
        <h2 className={styles.title}>Entre em contato</h2>
        <div className={styles.title_line} />
        <p className={styles.subtitle}>Se você quer fazer um projeto ou quiser entrar em contato para contratação, sinta-se à vontade para me enviar uma mensagem!</p>
      </div>

      <div className={styles.grid}>

        {/* Formulario */}
        <Form />

        {/* Informações de Contato */}
       <Infor />

      </div>
    </section>
  )
}