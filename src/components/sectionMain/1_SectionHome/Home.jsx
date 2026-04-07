import React from 'react'
import styles from './StylesHome.module.css'
import { AnimationArrow } from './AnimationArrow/AnimationArrow'
import { Aside } from '../0_SectionAside/Aside'

export const Home = () => {

   return (
      <>
         <section id='home' className={styles.sectionHome}>
            
            <div className={`${styles.hero}`}>
               <div className={`${styles.heroContent}`}>

                  <h1 className={`${styles.title}`}>Bem vindo, eu sou o Flavio Gabriel</h1>
                  <p className={`${styles.textMain}`}>Desenvolvedor web orientado a resultados, ajudando empresas a alcançar seus objetivos por meio da criação e gestão de sites e aplicativos eficazes.</p>
                  <div>

                     <a href="#projects" className={`${styles.btnProjects}`}>PROJETOS</a>
                  </div>

               </div>
               
               <AnimationArrow />
            </div>
            <Aside/>
         </section>
      </>
   )
}