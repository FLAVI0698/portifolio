import React, { useState, useRef } from 'react'
import styles from './StylesAbout.module.css'
import { AnimationUnderlineAbout } from './AnimationUnderlineAbout/AnimationUnderlineAbout'
import { SectionWhoIAm } from './1_SectionWhoIAm/SectionWhoIAm'
import { SectionSkills } from './2_SectionSkills/SectionSkills'

export const About = () => {
   const { elementsRef, inView } = AnimationUnderlineAbout()

   return (
      <>
         <section id='about' className={styles.about}>
               <div className={styles.content_about}>
                  <h2 className={`${styles.content_title_about} ${inView ? styles.inView : ""}`} ref={elementsRef}>SOBRE MIM</h2>
                  
                  <p className={styles.content_text_about}>
                     Aqui você saberar mais informações sobre mim, e quais são minhas principais habilidades na area do desenvolvimento.
                     </p>
               </div>

               <div className={styles.content_project_and_skills}>
                  <SectionWhoIAm/>
                  <SectionSkills/>
               </div>
         </section>
      </>
   )
}

