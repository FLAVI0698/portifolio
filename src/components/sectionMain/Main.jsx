import styles from './StylesMain.module.css'
import { Home } from './1_SectionHome/Home';
import { About } from './2_SectionAbout/About';
import { Projects } from './3_SectionProjects/Projects';
import { Contacts } from './4_SectionContact/Contact';

const Main = () => {

  return (
    <>
      <main className={`${styles.containerMain}`}>

        <div className={styles.content}>
          <Home />
          <About />
          <Projects />
          <Contacts/>
        </div>

      </main>
    </>
  )
}
export { Main }