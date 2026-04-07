import React from 'react'
import styles from './StylesSectionWhoIam.module.css'

export const SectionWhoIAm = () => {
   
   return (
      <div className={styles.content_container_who_Iam}>
         <h2 className={styles.content_title_who_Iam}>Me conheça!</h2>
         <p className={styles.content_text_who_Iam}>
            Sou <strong>Desenvolvedor</strong>, atualmente na posição de junior e sempre estou em busca de melhorar meus conhecimentos. Em todos os meus projetos gosto de seguir padrões de interfaces modernas, intuitivas e de alto impacto na experiência do usuário.
         </p>
         <p className={styles.content_text_who_Iam}>
            Atualmente todos os meu projetos são academicos e pessoal, sempre mostro meus projetos no <a>LinkedIn</a> e posto todos no <a>GitHub</a>.
         </p>

         <p className={styles.content_text_who_Iam}>
            Se estiver interesse de me contratar estou aberto a oportunidades onde eu possa contribuir, aprender e crescer em projetos desafiadores. Se você tiver uma posição que se alinhe às minhas habilidades e à minha vontade de evoluir, será um prazer conectar e conversar.
         </p>


      </div>
   )
}
