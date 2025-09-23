import React from 'react'
import styles from './StylesMain.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  return (
    <>
      <main className={`flex justify-center ${styles.containerMain}`}>

        <aside className={`${styles.aside}`}>
          <address>
            <ul>
              <li>
                <a  href="https://github.com/FLAVI0698" target='_blank'>
                  <FontAwesomeIcon className={`${styles.contentU}`} icon={faGithub} size="1x" color="black" />
                </a>
              </li>
              <li><a href="www.linkedin.com/in/flavio-gabriel-gouveia" target='_blank'>
              <FontAwesomeIcon className={`${styles.contentU}`} icon={faLinkedin} size="1x" color="black" />
              </a></li>
            </ul>
          </address>
        </aside>

        <section id='home' className={`${styles.hero}`}>

          <div className={`${styles.heroContent}`}>

            <h1 className={`${styles.title}`}>Bem vindo, eu sou o Flavio Gabriel</h1>
            <p className={`${styles.textMain}`}>Desenvolvedor web orientado a resultados, ajudando empresas a alcançar seus objetivos por meio da criação e gestão de sites e aplicativos eficazes.</p>
            <div>

              <a href="#projects" className={`${styles.btnProjects}`}>PROJETOS</a>
            </div>

          </div>
          
          <div className={`${styles.animationScroll}`}>
            <p>seta</p>
          </div>

        </section>

        <section id='about' >
          <h2>Sobre</h2>
        </section>

        <section id='project' className='hidden'>
          <h2>Project</h2>
        </section>

        <section id='skills' className='hidden'>
          <h2>Skills</h2>
        </section>

      </main>
    </>
  )
}
export { Main }