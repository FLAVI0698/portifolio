import React from 'react'
import styles from '../StylesContact.module.css'

const contactInfo = [
   { icon: "📍", label: "Localização", value: "Franca – São Paulo" },
   { icon: "✉️", label: "E-mail", value: "jeanluccalbx@gmail.com" },
   { icon: "📞", label: "Telefone", value: "(16) 99264-0814" },
];

const services = [
  "Desenvolvimento Front-End",
  "Web Design",
  "UI/UX Design",
  "Design Responsivo",
];

const socials = [
  { label: "GitHub",    href: "#", icon: "GH" },
  { label: "LinkedIn",  href: "#", icon: "IN" },
  { label: "WhatsApp",  href: "#", icon: "WA" },
  { label: "Instagram", href: "#", icon: "IG" },
  { label: "Behance",   href: "#", icon: "BE" },
];
export const Infor = () => {

   return (
      <div className={styles.info_card}>
         <h3 className={styles.info_title}>Informações de Contato</h3>

         <ul className={styles.contact_list}>
            {contactInfo.map((item) => (
               <li key={item.label} className={styles.contact_item}>
                  <span className={styles.contact_icon}>{item.icon}</span>
                  <div>
                     <p className={styles.contact_label}>{item.label}</p>
                     <p className={styles.contact_value}>{item.value}</p>
                  </div>
               </li>
            ))}
         </ul>

         <div>
            <p className={styles.block_title}>Serviços</p>
            <ul className={styles.services_list}>
               {services.map((s) => (
                  <li key={s} className={styles.service_item}>
                     <span className={styles.dot}>{s}</span>
                  </li>
               ))}
            </ul>
         </div>

         <div>
            <p className={styles.block_title}>Redes Sociais</p>
            <div className={styles.socials_row}>
               {socials.map((s) => (
                  <a key={s.label} href={s.href} className={styles.social_btn} arial-label={s.label}>
                     {s.icon}
                  </a>
               ))}
            </div>
         </div>
      </div>
   )
}
